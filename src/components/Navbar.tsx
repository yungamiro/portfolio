import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import icons from react-icons
import "./Navbar.css"; // Import CSS file for Navbar styling

interface NavbarProps {
  setColorBlindMode: (mode: boolean | ((prevMode: boolean) => boolean)) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setColorBlindMode }) => {
  const { i18n } = useTranslation();
  const [colorBlindMode, setColorBlindModeState] = useState(false); // State to manage color blind mode

  const toggleColorBlindMode = () => {
    const newMode = !colorBlindMode; // Toggle mode
    setColorBlindModeState(newMode); // Update local state
    setColorBlindMode(newMode); // Trigger parent function to set global color blind mode
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav>
      <div className="icons-container">
        <FaEye className="eye-icon left-eye" />
        <button
          className={`switch ${colorBlindMode ? "switch-on" : "switch-off"}`}
          onClick={toggleColorBlindMode}
        >
          <span
            className={`knob ${colorBlindMode ? "knob-on" : "knob-off"}`}
          ></span>
        </button>
        <FaEyeSlash className="eye-icon right-eye" />
      </div>
      <div className="language-selector">
        <select onChange={(e) => changeLanguage(e.target.value)}>
          <option value="fr">Français</option>
          <option value="en">English</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
