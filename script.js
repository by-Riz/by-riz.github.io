const root = document.documentElement;
const switcher = document.querySelector(".language-switch");
const logo = document.querySelector(".logo");

function setLanguage(language) {
  const isEnglish = language === "en";

  root.lang = isEnglish ? "en" : "fa";
  root.dir = isEnglish ? "ltr" : "rtl";
  document.title = isEnglish ? "riz" : "ریز | riz";
  switcher.setAttribute(
    "aria-label",
    isEnglish ? "تغییر زبان به فارسی" : "Switch to English",
  );
  logo.setAttribute("aria-label", isEnglish ? "Temporary riz mark" : "نشان موقت ریز");
  localStorage.setItem("riz-language", root.lang);
}

const savedLanguage = localStorage.getItem("riz-language");
const initialLanguage =
  savedLanguage === "fa" || savedLanguage === "en"
    ? savedLanguage
    : navigator.language.toLowerCase().startsWith("fa")
      ? "fa"
      : "en";

setLanguage(initialLanguage);

switcher.addEventListener("click", () => {
  setLanguage(root.lang === "fa" ? "en" : "fa");
});
