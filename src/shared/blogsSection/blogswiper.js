import React from 'react'
import '../blogsSection/blogcomponent.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Blogdesign from './blogdesign';
import Tomas1 from '../../assets/images/Tomas1.png'
import Tomas2 from '../../assets/images/Tomas2.png'



function blogswiper() {
   
  return (
    <div className='blogswiper'>
         <Swiper 
         breakpoints={{
            576: {
              slidesPerView: 1
            },
            768: {
              slidesPerView: 2
            },
            992: {
                slidesPerView: 3
            },
            1200:{
                slidesPerView: 3

            }
          }}
         
      spaceBetween={90}
      
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Blogdesign
         img = {Tomas1}
         head = "Thomas Anders’s Baku concert"
         text ="Show your event to the world through any platform. We are leaders in streaming and..."
        />
      </SwiperSlide>
      <SwiperSlide>
        <Blogdesign
         img = {Tomas2}
         head = "Thomas Anders’s Baku concert"
         text ="Show your event to the world through any platform. We are leaders in streaming and..."/>
       
      </SwiperSlide>
      <SwiperSlide>
        <Blogdesign
         img = {Tomas1}
         head = "Thomas Anders’s Baku concert"
         text ="Show your event to the world through any platform. We are leaders in streaming and..."
        />
      </SwiperSlide>
      <SwiperSlide>
        <Blogdesign
         img = {Tomas2}
         head = "Thomas Anders’s Baku concert"
         text ="Show your event to the world through any platform. We are leaders in streaming and..."/>
       
      </SwiperSlide>
      <SwiperSlide>
        <Blogdesign
         img = {Tomas1}
         head = "Thomas Anders’s Baku concert"
         text ="Show your event to the world through any platform. We are leaders in streaming and..."
        />
      </SwiperSlide>
      <SwiperSlide>
        <Blogdesign
         img = {Tomas2}
         head = "Thomas Anders’s Baku concert"
         text ="Show your event to the world through any platform. We are leaders in streaming and..."/>
       
      </SwiperSlide>
      <SwiperSlide>
        <Blogdesign
         img = {Tomas1}
         head = "Thomas Anders’s Baku concert"
         text ="Show your event to the world through any platform. We are leaders in streaming and..."/>
      </SwiperSlide>
      <SwiperSlide>
        <Blogdesign
         img = {Tomas2}
         head = "Thomas Anders’s Baku concert"
         text ="Show your event to the world through any platform. We are leaders in streaming and..."/>
      </SwiperSlide>
      <SwiperSlide>
        <Blogdesign
         img = {Tomas1}
         head = "Thomas Anders’s Baku concert"
         text ="Show your event to the world through any platform. We are leaders in streaming and..."/>
      </SwiperSlide>
      <SwiperSlide>
        <Blogdesign
         img = {Tomas2}
         head = "Thomas Anders’s Baku concert"
         text ="Show your event to the world through any platform. We are leaders in streaming and..."/>
      </SwiperSlide>
    </Swiper>
    {/* <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> */}
      
    </div>
  )
}

export default blogswiper
