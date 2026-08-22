(() => {
  const root = document.documentElement;
  const buttons = [...document.querySelectorAll(".language-switcher [data-language]")];
  const panels = [...document.querySelectorAll(".language-content")];
  const descriptions = {
    en: "I'm using Oura and WHOOP with the same sleep and recovery agent, then writing down which one is less of a hassle.",
    ko: "Oura와 WHOOP을 같은 수면·회복 에이전트에 연결해 보고, 무엇이 덜 번거로운지 기록합니다.",
  };
  const titles = {
    en: "SG — Seokhee Lee",
    ko: "시그널 가이드 — Seokhee Lee",
  };

  function setLanguage(language, replaceUrl) {
    root.dataset.language = language;
    root.lang = language;
    document.title = titles[language];
    document.querySelector('meta[name="description"]').setAttribute("content", descriptions[language]);

    buttons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.language === language));
    });
    panels.forEach((panel) => {
      panel.hidden = panel.lang !== language;
    });

    if (replaceUrl) {
      const url = new URL(window.location.href);
      if (language === "ko") {
        url.searchParams.set("lang", "ko");
      } else {
        url.searchParams.delete("lang");
      }
      window.history.replaceState(null, "", url);
    }
  }

  const language = root.dataset.language === "ko" ? "ko" : "en";
  setLanguage(language, false);

  buttons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.language, true));
  });
})();
