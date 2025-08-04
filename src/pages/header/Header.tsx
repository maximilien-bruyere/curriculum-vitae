import { useTranslation } from "react-i18next";
import Button from "./button/Button";

const Header = () => {
  const { t } = useTranslation();
  return (
    <header className="bg-background text-text p-10 shadow mb-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-2">{t("name")}</h1>
        <h2 className="text-accent text-xl mb-4">{t("student")}</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-text text-sm">
          <span>📧 {t("email")}</span>
          <span>🌍 {t("place")}</span>
        </div>
        <Button>{t("contact")}</Button>
      </div>
    </header>
  );
};

export default Header;
