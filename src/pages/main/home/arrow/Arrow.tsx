import { useEffect, useState, useRef } from "react";

const Arrow = () => {
  const [visible, setVisible] = useState(true);
  const [fade, setFade] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY !== 0 && visible) {
        setFade(true);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setVisible(false), 400);
      } else if (window.scrollY === 0 && !visible) {
        setVisible(true);
        setFade(false);
      } else if (window.scrollY === 0 && fade) {
        setFade(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line
  }, [visible, fade]);

  if (!visible && !fade) return null;

  return (
    <div className={`relative w-10 h-10 transition-opacity duration-400 ${fade ? "opacity-0" : "opacity-100"}`}>
      <svg
        className="absolute top-40 inset-0 w-full h-full text-gray-500 animate-bounce-down hover:cursor-pointer"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fillRule="evenodd" d="M12 19l-6-6h12l-6 6z" clipRule="evenodd" />
      </svg>
    </div>
  );
};

export default Arrow;
