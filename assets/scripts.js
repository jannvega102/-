'use strict';

// 1. Sidebar Toggle
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
if (sidebarBtn) {
    sidebarBtn.addEventListener("click", () => sidebar.classList.toggle("active"));
}

// 2. SPA Navigation (Tabs)
const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener('click', function () {
    // Normalize target name
    const targetPage = this.textContent.toLowerCase().trim();

    // Loop through pages
    pages.forEach(page => {
      if (targetPage === page.dataset.page) {
        page.classList.add('active');
        window.scrollTo(0, 0);
      } else {
        page.classList.remove('active');
      }
    });

    // Loop through buttons to update active state
    navigationLinks.forEach(link => {
      if (this === link) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });
}
