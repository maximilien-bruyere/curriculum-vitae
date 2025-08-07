import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Nav = () => {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState("home");
  const [lang, setLang] = useState(i18n.language.toUpperCase().slice(0,2) || "FR");

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      setLang(lng.toUpperCase().slice(0,2));
    };
    
    i18n.on('languageChanged', handleLanguageChange);
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    setLang(newLang);
    i18n.changeLanguage(newLang.toLowerCase());
    e.target.blur();
  };

  return (
    <nav className="fixed top-0 right-0 z-20 p-4 w-full flex justify-around items-center bg-white shadow-sm">
      <ul className="flex space-x-6">
        <li>
          <a
            href="#home"
            onClick={() => setActive("home")}
            className={`text-[15px] transition-all duration-200 text-gray-700 underline-offset-10 active:text-rust ${
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
            className={`text-[15px] transition-all duration-200 text-gray-700 underline-offset-10 active:text-rust ${
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
            className={`text-[15px] transition-all duration-200 text-gray-700 underline-offset-10 active:text-rust ${
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
            className={`text-[15px] transition-all duration-200 text-gray-700 underline-offset-10 active:text-rust ${
              active === "cv"
                ? "underline decoration-rust decoration-2 text-rust"
                : ""
            }`}
          >
            {t("cv")}
          </a>
        </li>
      </ul>
      <form className="">
        <label htmlFor="under line_select" className="sr-only">
          Underline select
        </label>
        <select
          id="underline_select"
          value={lang}
          onChange={handleLangChange}
          className="hover:cursor-pointer text-[15px] block pt-2 pb-1 px-2 w-full text-gray-700 bg-transparent border-0 border-b-1 border-rust appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
        >
          <option value="FR">{t("french")}</option>
          <option value="EN">{t("english")}</option>
        </select>
      </form>
    </nav>
  );
};

export default Nav;
