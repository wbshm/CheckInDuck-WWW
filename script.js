const currentYear = new Date().getFullYear();

for (const yearNode of document.querySelectorAll("[data-current-year]")) {
  yearNode.textContent = String(currentYear);
}

const page = document.body.dataset.page;

for (const link of document.querySelectorAll("[data-nav]")) {
  if (link.dataset.nav === page) {
    link.classList.add("is-active");
    link.setAttribute("aria-current", "page");
  }
}
