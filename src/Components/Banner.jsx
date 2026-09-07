const Banner = ({ title, paragraph, colors }) => {
  return (
    <div
      className={`p-10 text-center text-white font-bold text-2xl bg-${colors}`}
    >
      <h3 className="p-2 text-main text-3xl">{title}</h3>
      <p className="text-green-600 text-sm">{paragraph}</p>
    </div>
  );
};

export default Banner;
