/**
 * Smoothly scrolls to a target DOM section by ID with fixed header offset padding.
 * Prevents URL hash (#) mutation.
 */
export function scrollToSection(sectionId) {
  if (!sectionId) return;
  const element = document.getElementById(sectionId);
  if (element) {
    const headerOffset = 0;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

/**
 * Smoothly scrolls to the top of the page.
 */
export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
