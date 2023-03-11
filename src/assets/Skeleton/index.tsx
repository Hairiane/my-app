import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={300}
      height={470}
      viewBox="0 0 300 470"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="119" cy="120" r="120" />
      <rect x="0" y="252" rx="7" ry="7" width="260" height="27" />
      <rect x="0" y="291" rx="6" ry="6" width="260" height="73" />
      <rect x="0" y="385" rx="11" ry="11" width="92" height="28" />
      <rect x="109" y="380" rx="21" ry="21" width="153" height="46" />
    </ContentLoader>
  );
};

export default Skeleton;
