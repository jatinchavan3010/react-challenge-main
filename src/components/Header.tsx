import React from "react";

interface HeaderProps {
  onShowAll: () => void;
}

const Header: React.FC<HeaderProps> = ({ onShowAll }) => {
  return (
    <header className="header">
      <h1>Search your next destination!</h1>
      <button className="show-all-btn" onClick={onShowAll}>
        Show All
      </button>
    </header>
  );
};

export default Header;
