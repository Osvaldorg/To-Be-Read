import React from "react";
import "./SkeletonLoader.css";

const SkeletonLoader = ({ count = 8 }) => {
  return (
    <div className="skeleton-grid container">
      {Array.from({ length: count }).map((_, index) => (
        <div className="skeleton-card" key={index}>
          <div className="skeleton-cover skeleton-box"></div>
          <div className="skeleton-content">
            <div className="skeleton-title skeleton-box"></div>
            <div className="skeleton-text skeleton-box"></div>
            <div className="skeleton-text-short skeleton-box"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
