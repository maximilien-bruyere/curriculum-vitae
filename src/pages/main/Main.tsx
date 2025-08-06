import Home from "./home/Home";
import Portfolio from "./portfolio/Portfolio";

const Main = () => {
    return (
        <main className="h-200 flex flex-col items-center justify-start">
            <Home />
            <Portfolio />
        </main>
    );
};

export default Main;
