import fs from "fs";
import path from "path";
import process from "process";

const root = process.cwd();
const failures = [];

function readFile(relativePath) {
  const fullPath = path.join(root, relativePath);

  if (!fs.existsSync(fullPath)) {
    failures.push(`Missing required file: ${relativePath}`);
    return "";
  }

  return fs.readFileSync(fullPath, "utf8");
}

function expectIncludes(content, needle, label) {
  if (!content.includes(needle)) {
    failures.push(`Missing expected content in ${label}: ${needle}`);
  }
}

function expectNotIncludes(content, needle, label) {
  if (content.includes(needle)) {
    failures.push(`Unexpected temporary content in ${label}: ${needle}`);
  }
}

function expectRegex(content, pattern, label, description) {
  if (!pattern.test(content)) {
    failures.push(`Missing expected ${description} in ${label}`);
  }
}

const indexHtml = readFile("index.html");
const privacyHtml = readFile("privacy.html");
const supportHtml = readFile("support.html");
const stylesCss = readFile("styles.css");
const readmeMd = readFile("README.md");
const scriptJs = readFile("script.js");

if (indexHtml) {
  expectIncludes(indexHtml, 'href="privacy.html"', "index.html");
  expectIncludes(indexHtml, 'href="support.html"', "index.html");
  expectIncludes(indexHtml, 'href="styles.css"', "index.html");
  expectIncludes(indexHtml, 'href="appstore.png"', "index.html");
  expectIncludes(indexHtml, 'src="script.js"', "index.html");
  expectIncludes(indexHtml, "Build better daily habits with automatic app check-ins.", "index.html");
  expectIncludes(indexHtml, "Current features", "index.html");
  expectIncludes(indexHtml, "Real product screenshots from the current app flow.", "index.html");
  expectIncludes(indexHtml, "Widget + reminders", "index.html");
  expectIncludes(indexHtml, "Premium unlocks unlimited tasks", "index.html");
  expectIncludes(indexHtml, "Explicit authorization, narrow monitoring scope.", "index.html");
  expectIncludes(indexHtml, "Purchases are handled through Apple StoreKit", "index.html");
  expectIncludes(indexHtml, "What does the app monitor?", "index.html");
  expectIncludes(indexHtml, "screen/img_6.png", "index.html");
  expectNotIncludes(indexHtml, "Illustrative interface", "index.html");
  expectNotIncludes(indexHtml, "Product preview", "index.html");
  expectNotIncludes(indexHtml, "Preview mockup", "index.html");
}

if (privacyHtml) {
  expectIncludes(privacyHtml, 'href="index.html"', "privacy.html");
  expectIncludes(privacyHtml, 'href="support.html"', "privacy.html");
  expectIncludes(privacyHtml, "Privacy Policy", "privacy.html");
  expectIncludes(privacyHtml, "Family Controls", "privacy.html");
  expectIncludes(privacyHtml, "Widget status may be shared through app-group storage", "privacy.html");
  expectIncludes(privacyHtml, "Premium purchases and restores are handled through Apple StoreKit.", "privacy.html");
  expectIncludes(privacyHtml, "Effective Date: March 29, 2026", "privacy.html");
  expectIncludes(privacyHtml, "Contact: wrq142857@gmail.com", "privacy.html");
}

if (supportHtml) {
  expectIncludes(supportHtml, 'href="index.html"', "support.html");
  expectIncludes(supportHtml, 'href="privacy.html"', "support.html");
  expectIncludes(supportHtml, "Support", "support.html");
  expectIncludes(supportHtml, "General support", "support.html");
  expectIncludes(supportHtml, "Permission setup help", "support.html");
  expectIncludes(supportHtml, "Premium and restore issues", "support.html");
  expectIncludes(supportHtml, "Privacy and feedback", "support.html");
  expectIncludes(supportHtml, "wrq142857@gmail.com", "support.html");
  expectIncludes(supportHtml, "We aim to respond within a reasonable time.", "support.html");
}

if (stylesCss) {
  expectRegex(stylesCss, /:root\s*{/, "styles.css", "root variables");
  expectRegex(stylesCss, /\.hero-visuals/, "styles.css", "hero screenshot layout");
  expectRegex(stylesCss, /\.screen-grid/, "styles.css", "screenshot grid styles");
  expectRegex(stylesCss, /@media\s*\(/, "styles.css", "responsive rules");
}

if (scriptJs) {
  expectRegex(scriptJs, /currentYear/, "script.js", "footer year handling");
}

if (readmeMd) {
  expectIncludes(readmeMd, "GitHub Pages", "README.md");
  expectIncludes(readmeMd, "Upload the project to a GitHub repository", "README.md");
  expectIncludes(readmeMd, "Enable GitHub Pages", "README.md");
  expectIncludes(readmeMd, "Visit your deployed site", "README.md");
}

if (failures.length > 0) {
  console.error("Site validation failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("Site validation passed.");
