# Static GitHub Pages Site Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a three-page static English website for an iOS self-management app that is ready for direct deployment to GitHub Pages.

**Architecture:** Use plain HTML pages with a shared stylesheet and a lightweight JavaScript file for nav state and footer year. Keep all links relative and avoid any server-side routing or build-time dependencies. Add a small Node-based validation script to enforce required files, links, and core copy before implementation is considered complete.

**Tech Stack:** HTML, CSS, vanilla JavaScript, Node.js built-in modules

### Task 1: Create validation first

**Files:**
- Create: `scripts/validate-site.mjs`

**Step 1: Write the failing test**

Create a validation script that checks for:
- `index.html`, `privacy.html`, `support.html`, `styles.css`, `README.md`
- relative cross-page links
- required privacy-related copy in the homepage and privacy page

**Step 2: Run test to verify it fails**

Run: `node scripts/validate-site.mjs`
Expected: FAIL because the required site files do not exist yet.

**Step 3: Write minimal implementation**

Use `fs` and `path` from Node to read files, assert presence, and exit with code `1` on failures.

**Step 4: Run test to verify it passes later**

Run: `node scripts/validate-site.mjs`
Expected: PASS after all pages and shared assets are created.

### Task 2: Build the shared site shell

**Files:**
- Create: `index.html`
- Create: `privacy.html`
- Create: `support.html`
- Create: `styles.css`
- Create: `script.js`

**Step 1: Write the failing test**

Extend or use the validation script to require:
- shared navigation with `Home`, `Privacy`, `Support`
- relative links to `privacy.html` and `support.html`
- shared stylesheet and script references

**Step 2: Run test to verify it fails**

Run: `node scripts/validate-site.mjs`
Expected: FAIL until the pages and assets include the required structure.

**Step 3: Write minimal implementation**

Create the three pages with a consistent shell, responsive layout, Apple-like restrained styling, and lightweight JavaScript for active nav and footer year.

**Step 4: Run test to verify it passes**

Run: `node scripts/validate-site.mjs`
Expected: PASS for file presence and shared structure checks.

### Task 3: Implement homepage content and mockups

**Files:**
- Modify: `index.html`
- Modify: `styles.css`

**Step 1: Write the failing test**

Require homepage sections and copy for:
- hero
- how it works
- key features
- privacy and permissions
- screens preview
- FAQ

**Step 2: Run test to verify it fails**

Run: `node scripts/validate-site.mjs`
Expected: FAIL until the required sections and privacy language are present.

**Step 3: Write minimal implementation**

Add the homepage content from the spec with iPhone-style wireframe mockups and restrained English copy suitable for Apple review.

**Step 4: Run test to verify it passes**

Run: `node scripts/validate-site.mjs`
Expected: PASS for homepage content checks.

### Task 4: Implement privacy and support pages

**Files:**
- Modify: `privacy.html`
- Modify: `support.html`

**Step 1: Write the failing test**

Require:
- `Effective Date: March 2026`
- `Contact: wrq142857@gmail.com`
- support sections for general support, privacy questions, and business inquiries

**Step 2: Run test to verify it fails**

Run: `node scripts/validate-site.mjs`
Expected: FAIL until both pages contain the required content.

**Step 3: Write minimal implementation**

Write concise, formal copy for privacy and support pages consistent with the homepage tone.

**Step 4: Run test to verify it passes**

Run: `node scripts/validate-site.mjs`
Expected: PASS for privacy and support content checks.

### Task 5: Replace the repository README

**Files:**
- Modify: `README.md`

**Step 1: Write the failing test**

Require the README to be in English and to describe:
- upload to GitHub
- enabling GitHub Pages
- visiting the deployed site

**Step 2: Run test to verify it fails**

Run: `node scripts/validate-site.mjs`
Expected: FAIL until the README is replaced with deployment instructions.

**Step 3: Write minimal implementation**

Replace the spec-style README with concise English setup and deployment documentation.

**Step 4: Run test to verify it passes**

Run: `node scripts/validate-site.mjs`
Expected: PASS for README checks.

### Task 6: Final verification

**Files:**
- Verify only: `index.html`, `privacy.html`, `support.html`, `styles.css`, `script.js`, `README.md`, `scripts/validate-site.mjs`

**Step 1: Run validation**

Run: `node scripts/validate-site.mjs`
Expected: PASS

**Step 2: Run a quick manual review**

Check:
- all page links are relative
- no server routing assumptions exist
- wording stays privacy-preserving and non-marketing
- mockups look intentional rather than empty placeholders
