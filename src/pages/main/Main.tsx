import Home from "./home/Home";
import Portfolio from "./portfolio/Portfolio";

const Main = () => {
    return (
        <main className="min-h-screen flex flex-col items-center justify-start sm:px-4 md:px-10">
            <Home />
            <Portfolio />
        </main>
    );
};

export default Main;
