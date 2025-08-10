import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useMobileMenu } from "../../contexts/MobileMenuContextType";
import MobileForm from "./forms/MobileForm";
import DesktopForm from "./forms/DesktopForm";

const Nav = () => {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState("home");
  const [lang, setLang] = useState(
    i18n.language.toUpperCase().slice(0, 2) || "FR"
  );
  const { mobileMenuOpen, setMobileMenuOpen } = useMobileMenu(); // Utilise le contexte

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      setLang(lng.toUpperCase().slice(0, 2));
    };

    i18n.on("languageChanged", handleLanguageChange);
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);

  const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    setLang(newLang);
    i18n.changeLanguage(newLang.toLowerCase());
    e.target.blur();
  };

  return (
    <>
      <nav
        className={`fixed top-0 right-0 z-20 py-2 w-full flex justify-between items-center bg-white shadow-sm px-10`}
      >
        <button
          className="flex flex-col justify-center items-center w-8 h-8 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          <span
            className={`block h-0.5 w-6 bg-gray-700 rounded transition-all duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-gray-700 rounded transition-all duration-300 my-1 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-gray-700 rounded transition-all duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        <ul className="hidden md:flex space-x-6 flex-1 justify-center">
          <li>
            <a
              href="#home"
              onClick={() => setActive("home")}
              className={`text-[15px] transition-all duration-200 text-gray-700 underline-offset-10 active:text-rust hover:underline hover:decoration-2 ${
                active === "home"
                  ? "underline decoration-rust decoration-2 text-rust"
                  : ""
              }`}
            >
              {t("home")}
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => setActive("about")}
              className={`text-[15px] transition-all duration-200 text-gray-700 underline-offset-10 active:text-rust hover:underline hover:decoration-2 ${
                active === "about"
                  ? "underline decoration-rust decoration-2 text-rust"
                  : ""
              }`}
            >
              {t("about")}
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              onClick={() => setActive("portfolio")}
              className={`text-[15px] transition-all duration-200 text-gray-700 underline-offset-10 active:text-rust hover:underline hover:decoration-2 ${
                active === "portfolio"
                  ? "underline decoration-rust decoration-2 text-rust"
                  : ""
              }`}
            >
              {t("portfolio")}
            </a>
          </li>
          <li>
            <a
              href="#cv"
              onClick={() => setActive("cv")}
              className={`text-[15px] transition-all duration-200 text-gray-700 underline-offset-10 active:text-rust hover:underline hover:decoration-2${
                active === "cv"
                  ? "underline decoration-rust decoration-2 text-rust"
                  : ""
              }`}
            >
              {t("cv")}
            </a>
          </li>
        </ul>

        <DesktopForm lang={lang} handleLangChange={handleLangChange} t={t} />
      </nav>

      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col p-8 pt-20 space-y-8">
          <div className="absolute top-4 right-4">
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Fermer le menu"
              className="text-4xl text-gray-700 active:text-rust transition-colors duration-200"
            >
              &times;
            </button>
          </div>
          <a
            href="#home"
            onClick={() => {
              setActive("home");
              setMobileMenuOpen(false);
            }}
            className={`text-lg transition-all duration-200 text-gray-700 underline-offset-10 ${
              active === "home"
                ? "underline decoration-rust decoration-2 text-rust"
                : ""
            }`}
          >
            {t("home")}
          </a>
          <a
            href="#about"
            onClick={() => {
              setActive("about");
              setMobileMenuOpen(false);
            }}
            className={`text-lg transition-all duration-200 text-gray-700 underline-offset-10 ${
              active === "about"
                ? "underline decoration-rust decoration-2 text-rust"
                : ""
            }`}
          >
            {t("about")}
          </a>
          <a
            href="#portfolio"
            onClick={() => {
              setActive("portfolio");
              setMobileMenuOpen(false);
            }}
            className={`text-lg transition-all duration-200 text-gray-700 underline-offset-10 ${
              active === "portfolio"
                ? "underline decoration-rust decoration-2 text-rust"
                : ""
            }`}
          >
            {t("portfolio")}
          </a>
          <a
            href="#cv"
            onClick={() => {
              setActive("cv");
              setMobileMenuOpen(false);
            }}
            className={`text-lg transition-all duration-200 text-gray-700 underline-offset-10 ${
              active === "cv"
                ? "underline decoration-rust decoration-2 text-rust"
                : ""
            }`}
          >
            {t("cv")}
          </a>

          <div className="mt-8">
            <MobileForm lang={lang} handleLangChange={handleLangChange} t={t} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
