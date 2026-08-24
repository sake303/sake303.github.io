const sections = Array.from(document.querySelectorAll("main section"));
const navigationLinks = Array.from(document.querySelectorAll("nav a"));
const languageButtons = Array.from(document.querySelectorAll("[data-language]"));
const languageSwitcher = document.querySelector(".language-switcher");
const defaultSection = "now";
const defaultLanguage = "ko";
const supportedLanguages = new Set(["ko", "en"]);
const languageMetadata = {
  ko: {
    title: "Seokhee Lee",
    description: "Seokhee Lee는 사람들이 더 나은 결정을 내릴 수 있도록 무언가를 만드는 사람입니다."
  },
  en: {
    title: "Seokhee Lee",
    description: "Seokhee Lee is a builder who makes things that help people make better decisions."
  }
};

function getRequestedLanguage() {
  const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
  return supportedLanguages.has(requestedLanguage) ? requestedLanguage : defaultLanguage;
}

function showLanguage(language, updateUrl = false) {
  document.documentElement.dataset.language = language;
  document.documentElement.lang = language;
  document.documentElement.classList.add("language-ready");

  languageButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === language));
  });

  document.querySelector("nav").setAttribute(
    "aria-label",
    language === "ko" ? "석희 소개" : "About Seokhee"
  );
  languageSwitcher.setAttribute("aria-label", language === "ko" ? "언어 선택" : "Language");
  document.title = languageMetadata[language].title;
  document.querySelector('meta[name="description"]').setAttribute(
    "content",
    languageMetadata[language].description
  );
  document.querySelector('meta[property="og:description"]').setAttribute(
    "content",
    languageMetadata[language].description
  );

  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", language);
    window.history.replaceState({}, "", url);
  }
}

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
showLanguage(getRequestedLanguage());

window.addEventListener("hashchange", () => {
  showSection(window.location.hash.slice(1) || defaultSection);
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showLanguage(button.dataset.language, true);
  });
});
