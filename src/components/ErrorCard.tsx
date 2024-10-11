import React from "react";

interface ErrorCardProps {
  error: string;
}

const ErrorCard: React.FC<ErrorCardProps> = ({ error }) => {
  return (
    <div className="error-container" role="alert">
      <p className="error-message">{error}</p>
    </div>
  );
};

export default ErrorCard;
