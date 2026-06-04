// SOTRICKDERESPEITO - Core Javascript Engine (Minimalist & Compact)
document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // MOBILE NAVIGATION RESPONSIVENESS
  // ==========================================
  const menuToggle = document.getElementById('menuToggle');
  const mobileNavMenu = document.getElementById('mobileNavMenu');
  if (menuToggle && mobileNavMenu) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = mobileNavMenu.classList.contains('hidden');
      if (isOpen) {
        mobileNavMenu.classList.remove('hidden');
        menuToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;
      } else {
        mobileNavMenu.classList.add('hidden');
        menuToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="18" y2="18"/></svg>`;
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', () => {
      mobileNavMenu.classList.add('hidden');
      menuToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="18" y2="18"/></svg>`;
    });
  }

  // ==========================================
  // YEAR COUNTER AUTOMATION
  // ==========================================
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear().toString();
  }

  // ==========================================
  // SCROLL-TO-TOP TRIGGER
  // ==========================================
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.remove('hidden');
      } else {
        backToTopBtn.classList.add('hidden');
      }
    });
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ==========================================
  // FAQ ACCORDION COLLAPSES (CONTATO)
  // ==========================================
  const faqAccordionItems = document.querySelectorAll('.faq-accordion-item');
  if (faqAccordionItems.length > 0) {
    faqAccordionItems.forEach(item => {
      const toggleButton = item.querySelector('.faq-accordion-header');
      const collapseContent = item.querySelector('.faq-accordion-body');
      const arrowIcon = item.querySelector('.faq-arrow-icon');

      if (toggleButton && collapseContent) {
        toggleButton.addEventListener('click', () => {
          const isOpen = !collapseContent.classList.contains('hidden');
          
          if (isOpen) {
            collapseContent.classList.add('hidden');
            if (arrowIcon) {
              arrowIcon.innerHTML = `<svg xmlns="http://www.w3.org/2020/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-neutral-500 transition-transform"><path d="m6 9 6 6 6-6"/></svg>`;
            }
          } else {
            collapseContent.classList.remove('hidden');
            if (arrowIcon) {
              arrowIcon.innerHTML = `<svg xmlns="http://www.w3.org/2020/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-white transition-transform rotate-180"><path d="m6 9 6 6 6-6"/></svg>`;
            }
          }
        });
      }
    });
  }

});
