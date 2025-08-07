import Background from "./pages/background/Background";
import Header from "./pages/header/Header";
import Main from "./pages/main/Main";
import Footer from "./pages/footer/Footer";
import "./App.css";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="relative h-screen">
        <Background />
        <div className="relative flex flex-col pt-80 px-10">
          <div>
            <Header />
            <Main />
            <Footer />
          </div>
        </div>
      </div>
    </I18nextProvider>
  );
}

export default App;
