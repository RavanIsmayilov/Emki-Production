import "./resSlider.css";
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
import image9 from "../../assets/images/slider image 5.png";

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

export default function ResSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    cssEase: "linear",  
    pauseOnHover: false,  
    pauseOnFocus: false,
  };

  const chunkImages = (arr, chunkSize) => {
    let result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  };

  const imageChunks = chunkImages(images, 3);

  return (
    <div className="reslider-container">
      <Slider {...settings}>
        {imageChunks.map((chunk, index) => (
          <div className="reslider-container-images" key={index}>
            {chunk.map((image, idx) => (
              <img className="slick-slide-image" src={image} alt={`Slide ${index + 1} - Image ${idx + 1}`} key={idx} />
            ))}
          </div>
        ))}
      </Slider>
    </div>
  );
}
