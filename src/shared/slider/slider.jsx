import "./slider.css";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../../assets/images/slider image.png";
import image2 from "../../assets/images/slider image 1.png";
import image3 from "../../assets/images/slider image 2.png";
import image4 from "../../assets/images/slider image 3.png";
import image5 from "../../assets/images/slider image 4.png";
import image6 from "../../assets/images/slider image 5.png";
import image7 from "../../assets/images/slider image 2.png";
import image8 from "../../assets/images/slider image 4.png";

const images = [image1, image2, image3, image4, image5, image6, image7, image8];

export default function HomeSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical: true,
    verticalSwiping: true,
    adaptiveHeight: true,
  };


  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
        <>
          <div className="slider-container-images" key={index}>
            <img className="slick-slide-img" src={image} alt={`Slide ${index + 1}`} />
            <img className="slick-slide-img" src={image1} alt={`Slide ${index + 2}`} />
            <img className="slick-slide-img" src={image2} alt={`Slide ${index + 3}`} />
            <img className="slick-slide-img" src={image3} alt={`Slide ${index + 4}`} />
            <img className="slick-slide-img" src={image4} alt={`Slide ${index + 5}`} />
            <img className="slick-slide-img" src={image5} alt={`Slide ${index + 6}`} />
            <img className="slick-slide-img" src={image6} alt={`Slide ${index + 7}`} />
            <img className="slick-slide-img" src={image7} alt={`Slide ${index + 8}`} />
            <img className="slick-slide-img" src={image8} alt={`Slide ${index + 9}`} />
          </div>
          </>
        ))}
      </Slider>

    </div>
  );
}
