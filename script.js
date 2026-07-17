const sections = Array.from(document.querySelectorAll("main section"));
const navigationLinks = Array.from(document.querySelectorAll("nav a"));
const defaultSection = "now";

function showSection(sectionId) {
  const targetId = sections.some((section) => section.id === sectionId)
    ? sectionId
    : defaultSection;

  sections.forEach((section) => {
    section.classList.toggle("is-active", section.id === targetId);
  });

  navigationLinks.forEach((link) => {
    const isCurrent = link.hash === "#" + targetId;
    if (isCurrent) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

showSection(window.location.hash.slice(1) || defaultSection);

window.addEventListener("hashchange", () => {
  showSection(window.location.hash.slice(1) || defaultSection);
});
