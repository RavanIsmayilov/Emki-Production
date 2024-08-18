import './home.css';
import React from 'react';
import { useTranslation } from 'react-i18next';
import BtnIcon from '../../assets/icons/svgexport-6.svg';
import HomeSlider from '../../shared/slider/slider';
import ResSlider from '../../shared/resSlider/resSlider';
import Section from '../../shared/haveproject/section';
import DiscoverEvents from '../../shared/discoverEvents/DiscoverEvents'
import BlogsComponent from '../../shared/blogsSection/blogComponent'


const Home = () => {
  const { t } = useTranslation();

  return (
    <>
    
      <section className="home">
        <div className="home_section">
          <div className="home_info">
            <h1 className="home_info-title">{t('home.title')}</h1>
            <p className="home_info-subtitle">{t('home.subtitle')}</p>
            <button className="home_info-btn">
              {t('home.event_button')}
              <img className="home_info-btn-icon" src={BtnIcon} alt="BtnIcon" />
            </button>
          </div>
          <div className="home_swiper">
            <HomeSlider />
            <ResSlider/>
          </div>
        </div>
        <div>
        <DiscoverEvents/>
        <BlogsComponent/>
          <Section/>
        </div>
      </section>
    </>
  );
};

export default Home;
