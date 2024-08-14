import "./header.css";
import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import BtnIcon from "../../assets/icons/btn icon.svg";
import HeaderLogo from "../../assets/icons/header-logo.svg";
import DropdownMenu from "../dropdown/dropdown";
import TicketImage1 from "../../assets/images/ticket image 1.png"
import TicketImage2 from "../../assets/images/ticket image 2.png"
import TicketImage3 from "../../assets/images/ticket image 3.png"
import TicketDot from "../../assets/icons/ticket dot.svg"
import TicketX from "../../assets/icons/letter-x.png"
import { Link } from "react-router-dom";


const Header = () => {
  const { t, i18n } = useTranslation();
  const [isSectionOpen, setIsSectionOpen] = useState(false)

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleSection = () => {
    setIsSectionOpen(!isSectionOpen);
  };

  const closeSection = () => {
    setIsSectionOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="header_main">
          <DropdownMenu />
          <img className="header_logo" src={HeaderLogo} alt="HeaderLogo" />
          <nav className="nav">
            <ul className="nav_lists">
              <li className="nav_lists_link">
                <Link to="/home" className="nav_lists_item">{t('header.home')}</Link>
              </li>
              <li className="nav_lists_link">
                <a href="/events" className="nav_lists_item">{t('header.events')}</a>
              </li>
              <li className="nav_lists_link">
                <a href="#" className="nav_lists_item">{t('header.blog')}</a>
              </li>
              <li className="nav_lists_link">
                <a href="#" className="nav_lists_item">{t('header.sponsors')}</a>
              </li>
              <li className="nav_lists_link">
                <Link to="/about" className="nav_lists_item">{t('header.about_us')}</Link>
              </li>
            </ul>
          </nav>
          <div className="header_action">
            <select className="header_lang" onChange={(e) => changeLanguage(e.target.value)}>
              <option className="header_lang-option" value="en">EN</option>
              <option value="az">AZ</option>
            </select>

            <div className="header_btns">
              <button onClick={toggleSection} className="header_buybtn">{t('header.buy_ticket')}</button>
              <button onClick={toggleSection} className="header_btn">
                <img className="header_btn-icon" src={BtnIcon} alt="BtnIcon" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {isSectionOpen && (
        <>
          <div className="tickets">
            <button onClick={closeSection} className="tickets_x_btn">
              <img className="tickets_x" src={TicketX} alt="TicketX" />
            </button>

            <div className="tickets_main">
              <div className="tickets_card">
                <img className="tickets_card-img" src={TicketImage3} alt="TicketImage3" />

                <div className="tickets_texts">
                  <div className="tickets_texts-head">
                    <span className="tickets_name">Kıraç</span>
                    <span className="tickets_price"> 49 - 199₼ </span>
                  </div>

                  <div className="tickets_texts-end">
                    <span className="tickets_date">20.10.2024</span>
                    <img className="tickets_dot" src={TicketDot} alt="TicketDot" />
                    <span className="tickets_place">Heydər Əliyev Sarayı</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="tickets_main">
              <div className="tickets_card">
                <img className="tickets_card-img" src={TicketImage1} alt="TicketImage1" />

                <div className="tickets_texts">
                  <div className="tickets_texts-head">
                    <span className="tickets_name">Kıraç</span>
                    <span className="tickets_price"> 49 - 199₼ </span>
                  </div>

                  <div className="tickets_texts-end">
                    <span className="tickets_date">20.10.2024</span>
                    <img className="tickets_dot" src={TicketDot} alt="TicketDot" />
                    <span className="tickets_place">Heydər Əliyev Sarayı</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="tickets_main">
              <div className="tickets_card">
                <img className="tickets_card-img" src={TicketImage2} alt="TicketImage2" />

                <div className="tickets_texts">
                  <div className="tickets_texts-head">
                    <span className="tickets_name">Kıraç</span>
                    <span className="tickets_price"> 49 - 199₼ </span>
                  </div>

                  <div className="tickets_texts-end">
                    <span className="tickets_date">20.10.2024</span>
                    <img className="tickets_dot" src={TicketDot} alt="TicketDot" />
                    <span className="tickets_place">Heydər Əliyev Sarayı</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="tickets_main">
              <div className="tickets_card">
                <img className="tickets_card-img" src={TicketImage3} alt="TicketImage3" />

                <div className="tickets_texts">
                  <div className="tickets_texts-head">
                    <span className="tickets_name">Kıraç</span>
                    <span className="tickets_price"> 49 - 199₼ </span>
                  </div>

                  <div className="tickets_texts-end">
                    <span className="tickets_date">20.10.2024</span>
                    <img className="tickets_dot" src={TicketDot} alt="TicketDot" />
                    <span className="tickets_place">Heydər Əliyev Sarayı</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="tickets_main">
              <div className="tickets_card">
                <img className="tickets_card-img" src={TicketImage3} alt="TicketImage3" />

                <div className="tickets_texts">
                  <div className="tickets_texts-head">
                    <span className="tickets_name">Kıraç</span>
                    <span className="tickets_price"> 49 - 199₼ </span>
                  </div>

                  <div className="tickets_texts-end">
                    <span className="tickets_date">20.10.2024</span>
                    <img className="tickets_dot" src={TicketDot} alt="TicketDot" />
                    <span className="tickets_place">Heydər Əliyev Sarayı</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
