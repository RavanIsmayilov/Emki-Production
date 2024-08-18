import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../discoverEvents/Events.scss'
import EventsProducts from './EventsProducts';
import Serdar1 from '../../assets/images/SerdarOrtac1.png'
import Serdar2 from '../../assets/images/SerdarOrtac2.png'
import Serdar3 from '../../assets/images/SerdarOrtac3.png'
import { FaManatSign } from "react-icons/fa6";



function Events() {

  return (

    <div className='Events'>
      <Swiper 
      breakpoints={{
        576: {
          width: 576,
          slidesPerView: 1,
        },
        768: {
          width: 768,
          slidesPerView: 2,
        },
        992: {
          width: 992,
          slidesPerView: 3,
        },
        1200: {
          width: 1200,
          slidesPerView: 3,
        },
      }}
      spaceBetween={50}
      
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><EventsProducts img ={Serdar1}
      title = "Serdar Ortac"
      price={(
        <>
          49-199<FaManatSign />
        </>
      )}
      about ='16 October 2023 Heydər Əliyev Sarayı'
      /></SwiperSlide>
      <SwiperSlide><EventsProducts img ={Serdar2}
      title = "Serdar Ortac"
      price={(
        <>
          49-199<FaManatSign/>
        </>
      )}
      about ='16 October 2023 Heydər Əliyev Sarayı'


      /></SwiperSlide>
      <SwiperSlide><EventsProducts img ={Serdar3}
      title = "Serdar Ortac"
      price={(
        <>
          49-199<FaManatSign />
        </>
      )}
      about ='16 October 2023 Heydər Əliyev Sarayı'


      /></SwiperSlide>
      <SwiperSlide><EventsProducts img ={Serdar1}
      title = "Serdar Ortac"
      price={(
        <>
          49-199<FaManatSign />
        </>
      )}
      about ='16 October 2023 Heydər Əliyev Sarayı'


      /></SwiperSlide>
      <SwiperSlide><EventsProducts img ={Serdar2}
      title = "Serdar Ortac"
      price={(
        <>
          125-295<FaManatSign />
        </>
      )}
      about ='16 October 2023 Heydər Əliyev Sarayı'


      /></SwiperSlide>
      <SwiperSlide><EventsProducts img ={Serdar3}
      title = "Serdar Ortac"
      price={(
        <>
          68-260<FaManatSign />
        </>
      )}
      about ='16 October 2023 Heydər Əliyev Sarayı'


      /></SwiperSlide>
       <SwiperSlide><EventsProducts img ={Serdar1}
      title = "Serdar Ortac"
      price={(
        <>
          70-180<FaManatSign />
        </>
      )}
      about ='16 October 2023 Heydər Əliyev Sarayı'


      /></SwiperSlide>
      <SwiperSlide><EventsProducts img ={Serdar2}
      title = "Serdar Ortac"
      price={(
        <>
          49-199<FaManatSign />
        </>
      )}
      about ='16 October 2023 Heydər Əliyev Sarayı'


      /></SwiperSlide>
      <SwiperSlide><EventsProducts img ={Serdar3}
      title = "Serdar Ortac"
      price={(
        <>
          50-205<FaManatSign />
        </>
      )}
      about ='16 October 2023 Heydər Əliyev Sarayı'


      /></SwiperSlide>
       <SwiperSlide><EventsProducts img ={Serdar1}
      title = "Serdar Ortac"
      price={(
        <>
          49-199<FaManatSign />
        </>
      )}
      about ='16 October 2023 Heydər Əliyev Sarayı'


      /></SwiperSlide>
      <SwiperSlide><EventsProducts img ={Serdar2}
      title = "Serdar Ortac"
      price={(
        <>
          49-199<FaManatSign />
        </>
      )}
      about ='16 October 2023 Heydər Əliyev Sarayı'


      /></SwiperSlide>
      <SwiperSlide><EventsProducts img ={Serdar3}
      title = "Serdar Ortac"
      price={(
        <>
          50-205<FaManatSign />
        </>
      )}
      about ='16 October 2023 Heydər Əliyev Sarayı'


      /></SwiperSlide>
    </Swiper>

   
    </div>
  )
}

export default Events


// Import Swiper styles

