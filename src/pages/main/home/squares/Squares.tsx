const Squares = () => {
  return (
    <div className="relative h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 flex-shrink-0">
      <div className="absolute w-20 h-20 top-20 right-30 rotate-30 [box-shadow:8px_8px_16px_-4px_rgba(0,0,0,0.30)] bg-petrol-blue rounded sm:w-25 sm:h-25 sm:right-70 sm:top-98 sm:rotate-35 md:-top-15 md:right-5 md:w-35 md:h-35 md:rotate-0 xl:-top-50 xl:right-0 xl:w-60 xl:h-60"></div>
      <div className="absolute w-20 h-20 top-15 right-12 rotate-45 [box-shadow:8px_8px_16px_-4px_rgba(0,0,0,0.30)] bg-rust rounded sm:w-25 sm:h-25 md:-top-5 md:right-20 md:w-35 md:h-35 md:-rotate-5 md:top-15 xl:w-60 xl:h-60 xl:-top-0 xl:right-40"></div>
      <div className="absolute w-20 h-20 top-20 -right-7 -rotate-25 [box-shadow:8px_8px_16px_-4px_rgba(0,0,0,0.30)] bg-beige rounded sm:w-25 sm:h-25 sm:left-70 sm:top-98 sm:rotate-55 md:top-45 md:left-20 md:w-35 md:h-35 md:rotate-10 xl:w-60 xl:h-60 xl:top-52 xl:left-0"></div>
    </div>
  );
};

export default Squares;
