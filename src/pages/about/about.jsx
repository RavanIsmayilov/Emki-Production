import "./about.css"
import React from 'react';
import Header from "../../shared/header/header"
import MainVideo from "../../assets/videos/aboutVideo.c897207ee41f2c003ee5.mp4"
import ReactPlayer from 'react-player';
import Slider from "react-slick";
import image from "../../assets/images/about slider image.jpeg"
import NextBtn from "../../assets/icons/check-right.png"
import PrevBtn from "../../assets/icons/IconButtoneproduct end lefticon.png"


const About = () => {

    const sliderRef = React.useRef(null); // Create a ref to control the slider

    
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    arrows:false
  };



    return(

        <>
        <Header/>

        <div className="about">
            <div className="about_head">
            <div className="about_layout">
                <div className="about_texts">
                    <span className="about_title">Unleash Your Event's Potential: </span>
                    <span className="about_subtitle">Elevate Your Streaming with Our Expertise!</span>
                    <span className="about_paragraf">Show your event to the world through any platform. We are leaders in streaming and broadcast services for events, offering consulting services and development of complete systems for our clients in event broadcasting.</span>
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

                <span className="about_end-title">Our Events</span>
                <div className="about_slider">
                    <Slider ref={sliderRef}  {...settings}>
                        <div className="about_slider-item">
                            <img className="about_slider-img" src={image} alt="Event 1" />
                        </div>
                        <div className="about_slider-item">
                            <img className="about_slider-img" src={image} alt="Event 1" />
                        </div>
                        <div className="about_slider-item">
                            <img className="about_slider-img" src={image} alt="Event 1" />
                        </div>
           
            
                    </Slider>
                    <div className="about_slider-buttons">
                        <button onClick={() => sliderRef.current.slickPrev()} className="about_slider-prev">
                        <img className="about_slider-prev-icon" src={PrevBtn} alt="" />
                        </button>
                        <button onClick={() => sliderRef.current.slickNext()} className="about_slider-next">
                        <img className="about_slider-prev-icon" src={NextBtn} alt="" />
                        </button>
                    </div>
                </div>

            </div>
        </div>

        </>
    )
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


export default About