import './dropdown.css';
import React, { useState } from 'react';
import DropDownOpen from "../../assets/icons/X-icon3.svg"
import DropDownClosed from "../../assets/icons/dropdown.svg"
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };


  return (
    <div className="dropdown">
      <img
        onClick={toggleDropdown}
        className="dropdown-icon"
        src={isOpen ? DropDownOpen : DropDownClosed}
        alt="Toggle Dropdown"
      />
      {isOpen && (
    <>              

    <ul className="dropdown-list">
        <div className="dropdown_action">
            <select className="dropdown_lang" onChange={(e) => changeLanguage(e.target.value)}>
              <option className="dropdown_lang-option" value="en">EN</option>
              <option value="az">AZ</option>
            </select>
        </div>

            <li>
                <Link to="/home">{t('header.home')}</Link>
            </li>
            <li >
                <Link to="/events" >{t('header.events')}</Link>
            </li>
            <li>
                <Link to="/blogs" >{t('header.blog')}</Link>
            </li>
            <li>
                <Link to="/sponsor" >{t('header.sponsors')}</Link>
            </li>
            <li>
                <Link to="/about">{t('header.about_us')}</Link>
            </li>
        </ul>
    </>
      )}
    </div>
  );
};

export default DropdownMenu;