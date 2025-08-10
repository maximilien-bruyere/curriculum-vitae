import { Trans, useTranslation } from "react-i18next";
import Arrow from "./arrow/Arrow";
import Squares from "./squares/Squares";

const Home = () => {
    const { t } = useTranslation();
    
    return (
        <>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-around gap-8 mt-10 w-full max-w-7xl mx-auto m-4">
        <h1 className="text-4xl md:text-6xl font-display text-center md:text-left max-w-lg md:max-w-2xl leading-[1.2] order-2 md:order-1">
          <Trans
            i18nKey={t("welcome_message")}
            components={{
              underline: <u className="underline underline-offset-8 decoration-petrol-blue"/>,
              rust: <span className="text-rust" />,
              blue: <span className="text-petrol-blue" />,
            }}
          />
        </h1>
        <div className="order-1 md:order-2">
          <Squares />
        </div>
      </div>
      <Arrow />
        </>
    )
}

export default Home;