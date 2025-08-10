import { I18nextProvider } from "react-i18next";
import { MobileMenuProvider } from "./pages/contexts/MobileMenuContextType";
import Background from "./pages/background/Background";
import Header from "./pages/header/Header";
import Main from "./pages/main/Main";
import Footer from "./pages/footer/Footer";
import i18n from "./i18n";
import "./App.css";

function App() {
  return (
    <MobileMenuProvider>
      <I18nextProvider i18n={i18n}>
        <div className="relative h-screen">
          <Background />
          <div className="w-full relative flex flex-col md:pt-30 xl:pt-60">
            <div>
              <Header />
              <Main />
              <Footer />
            </div>
          </div>
        </div>
      </I18nextProvider>
    </MobileMenuProvider>
  );
}

export default App;
