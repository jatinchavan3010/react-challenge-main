import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="loading-container" role="status" aria-live="polite">
      <p className="loading-text">Loading...</p>
    </div>
  );
};

export default Loading;
