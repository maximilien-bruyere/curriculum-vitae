import Background from "./pages/background/Background";
import Header from "./pages/header/Header";
import Main from "./pages/main/Main";
import Footer from "./pages/footer/Footer";
import "./App.css";

function App() {
  return (
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
  );
}

export default App;
