# CheckIn Duck Website

Static website for an iOS self-management app. The site is designed for Apple
review, entitlement requests, and public product documentation. It includes:

- `index.html` for the product overview
- `privacy.html` for the Privacy Policy
- `support.html` for support and contact information
- `styles.css` for shared styling
- `script.js` for lightweight navigation and footer behavior

## Local Preview

Open `index.html` directly in a browser, or serve the folder with any simple
static file server.

## Deploy to GitHub Pages

### 1. Upload the project to a GitHub repository

Create a new repository on GitHub, then push the contents of this folder to the
default branch.

### 2. Enable GitHub Pages

In the GitHub repository:

1. Open `Settings`
2. Open `Pages`
3. Under `Build and deployment`, choose `Deploy from a branch`
4. Select the default branch and the root folder (`/`)
5. Save the configuration

### 3. Visit your deployed site

After GitHub finishes publishing, open the URL shown in the Pages settings.
The homepage will be served from `index.html`, and the other pages will be:

- `privacy.html`
- `support.html`

## Notes

- All links use relative paths, so the site works on GitHub Pages without
  server-side routing.
- No backend, database, or build step is required.
- Update `wrq142857@gmail.com` if you want a different public support address.
