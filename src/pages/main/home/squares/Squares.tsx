const Squares = () => {
  return (
    <div className="relative h-56 w-56 flex-shrink-0">
      <div className="absolute -top-50 right-0 w-60 h-60 bg-petrol-blue rounded shadow-xl"></div>
      <div className="absolute -top-0 right-40 w-60 h-60 bg-rust rounded shadow-xl"></div>
      <div className="absolute top-52 right-8 w-60 h-60 bg-beige rounded shadow-xl"></div>
    </div>
  );
};

export default Squares;
