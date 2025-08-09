import Nav from "./nav/Nav";
import { useMobileMenu } from "../contexts/MobileMenuContextType";
import { useEffect, useState } from "react";

const MENU_TRANSITION_DURATION = 0;

const Header = () => {
  const { mobileMenuOpen, setMobileMenuOpen } = useMobileMenu();
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (mobileMenuOpen) {
      timeout = setTimeout(() => setShowOverlay(true), MENU_TRANSITION_DURATION);
    } else {
      setShowOverlay(false);
    }
    return () => clearTimeout(timeout);
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Overlay sombre uniquement à droite du menu mobile */}
      {showOverlay && (
        <div
          className="fixed inset-0 bg-[rgba(0,0,0,0.45)] z-40 md:hidden transition-opacity duration-300 opacity-100"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      <header className="md:flex md:flex-col md:items-center md:justify-center md:w-full">
        <Nav />
      </header>
    </>
  );
};

export default Header;