import React from "react";

interface ErrorCardProps {
  error: string;
}

const ErrorCard: React.FC<ErrorCardProps> = ({ error }) => {
  return (
    <section className="error-container" role="alert">
      <p className="error-message">{error}</p>
    </section>
  );
};

export default ErrorCard;
