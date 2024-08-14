import './dropdown.css';
import React, { useState } from 'react';
import DropDownOpen from "../../assets/icons/X-icon3.svg"
import DropDownClosed from "../../assets/icons/dropdown.svg"
import { useTranslation } from 'react-i18next';

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
                <a href="#">{t('header.home')}</a>
            </li>
            <li >
                <a href="/events" >{t('header.events')}</a>
            </li>
            <li>
                <a href="#" >{t('header.blog')}</a>
            </li>
            <li>
                <a href="#" >{t('header.sponsors')}</a>
            </li>
            <li>
                <a href="#">{t('header.about_us')}</a>
            </li>
        </ul>
    </>
      )}
    </div>
  );
};

export default DropdownMenu;