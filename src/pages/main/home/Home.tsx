import { Trans, useTranslation } from "react-i18next";
import Arrow from "./arrow/Arrow";
import Squares from "./squares/Squares";

const Home = () => {
    const { t } = useTranslation();
    
    return (
        <>
        <div className="flex flex-row items-center justify-around gap-8 mt-10 w-full">
        <h1 className="text-6xl font-display text-left w-180 leading-[1.2]">
          <Trans
            i18nKey={t("welcome_message")}
            components={{
              underline: <u className="underline-offset-8"/>,
              rust: <span className="text-rust" />,
              blue: <span className="text-petrol-blue" />,
            }}
          />
        </h1>
        <Squares />
      </div>
      <Arrow />
        </>
    )
}

export default Home;