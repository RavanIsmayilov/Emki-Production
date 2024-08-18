import "./about.css";
import React from 'react';
import MainVideo from "../../assets/videos/aboutVideo.c897207ee41f2c003ee5.mp4";
import ReactPlayer from 'react-player';
import Slider from "react-slick";
import image from "../../assets/images/about slider image.jpeg";
import NextBtn from "../../assets/icons/check-right.png";
import PrevBtn from "../../assets/icons/IconButtoneproduct end lefticon.png";
import { useTranslation } from "react-i18next";

const About = () => {

    const sliderRef = React.useRef(null);
    const { t } = useTranslation();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        arrows: false
    };

    return (
        <>
            <div className="about">
                <div className="about_head">
                    <div className="about_layout">
                        <div className="about_texts">
                            <span className="about_title">{t('about.title')}</span>
                            <span className="about_subtitle">{t('about.subtitle')}</span>
                            <span className="about_paragraf">{t('about.paragraph')}</span>
                        </div>

                        <div className="about_video_frame">
                            <ReactPlayer
                                url={MainVideo}
                                width="623px"
                                controls
                                style={{ borderRadius: '16px' }}
                                className="about_video"
                                playing={true}
                            />
                        </div>
                    </div>
                </div>

                <div className="about_end">
                    <span className="about_end-title">{t('about.events_title')}</span>
                    <div className="about_slider">
                        <Slider ref={sliderRef} {...settings}>
                            <div className="about_slider-item">
                                <img className="about_slider-img" src={image} alt="Event 1" />
                            </div>
                            <div className="about_slider-item">
                                <img className="about_slider-img" src={image} alt="Event 2" />
                            </div>
                            <div className="about_slider-item">
                                <img className="about_slider-img" src={image} alt="Event 3" />
                            </div>
                        </Slider>
                        <div className="about_slider-buttons">
                            <button onClick={() => sliderRef.current.slickPrev()} className="about_slider-prev">
                                <img className="about_slider-prev-icon" src={PrevBtn} alt="Previous" />
                            </button>
                            <button onClick={() => sliderRef.current.slickNext()} className="about_slider-next">
                                <img className="about_slider-prev-icon" src={NextBtn} alt="Next" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: 'pink' }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: 'pink' }}
            onClick={onClick}
        />
    );
}

export default About;
