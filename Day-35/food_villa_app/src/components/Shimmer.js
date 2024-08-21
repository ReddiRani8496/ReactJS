const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(10)
        .fill("")
        .map((_, index) => (
          <div key={index} className="shimmer-card">
            <div className="shimmer-img"></div>
            <div className="shimmer-text shimmer-text-short"></div>
            <div className="shimmer-text shimmer-text-long"></div>
            <div className="shimmer-text shimmer-text-medium"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
