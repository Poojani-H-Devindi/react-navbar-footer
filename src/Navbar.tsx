import { useState } from 'react';

export const Navbar = () => {
  // To track if the dropdown is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <ul>
        <li className="nav-item">
          <a href="#">Dashboard</a>
        </li>
        <li className="nav-item">
          <a href="#">Services</a>
        </li>

        <li className="nav-item">
          {/* Clicking this button triggers toggleMenu */}
          <button className="apps-btn" onClick={toggleMenu}>
            Apps
          </button>

          {/* Menu only shows if isOpen is true */}
          {isOpen && (
            <ul className="sub-menu">
              <li>
                <a href="#">Calendar</a>
              </li>
              <li>
                <a href="#">Chat</a>
              </li>
              <li>
                <a href="#">Email</a>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};
