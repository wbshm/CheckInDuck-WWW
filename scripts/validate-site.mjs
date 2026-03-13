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
  expectIncludes(indexHtml, 'src="script.js"', "index.html");
  expectIncludes(indexHtml, "Never forget your daily app check-in.", "index.html");
  expectIncludes(indexHtml, "How It Works", "index.html");
  expectIncludes(indexHtml, "Built with privacy in mind", "index.html");
  expectIncludes(indexHtml, "The app uses Apple's Screen Time APIs.", "index.html");
  expectIncludes(indexHtml, "The app does not access content inside other apps.", "index.html");
  expectIncludes(indexHtml, "Preview mockup", "index.html");
  expectIncludes(indexHtml, "Final app screens coming soon", "index.html");
  expectIncludes(indexHtml, "Does the app read content inside other apps?", "index.html");
  expectIncludes(indexHtml, "Built for self-management and privacy-first daily reminders.", "index.html");
}

if (privacyHtml) {
  expectIncludes(privacyHtml, 'href="index.html"', "privacy.html");
  expectIncludes(privacyHtml, 'href="support.html"', "privacy.html");
  expectIncludes(privacyHtml, "Privacy Policy", "privacy.html");
  expectIncludes(privacyHtml, "Apple Screen Time APIs", "privacy.html");
  expectIncludes(privacyHtml, "wrq142857@gmail.com", "privacy.html");
  expectIncludes(privacyHtml, "Effective Date: March 2026", "privacy.html");
  expectIncludes(privacyHtml, "Contact: wrq142857@gmail.com", "privacy.html");
}

if (supportHtml) {
  expectIncludes(supportHtml, 'href="index.html"', "support.html");
  expectIncludes(supportHtml, 'href="privacy.html"', "support.html");
  expectIncludes(supportHtml, "Support", "support.html");
  expectIncludes(supportHtml, "General support", "support.html");
  expectIncludes(supportHtml, "Privacy questions", "support.html");
  expectIncludes(supportHtml, "Business inquiries", "support.html");
  expectIncludes(supportHtml, "wrq142857@gmail.com", "support.html");
  expectIncludes(supportHtml, "We aim to respond within a reasonable time.", "support.html");
}

if (stylesCss) {
  expectRegex(stylesCss, /:root\s*{/, "styles.css", "root variables");
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
