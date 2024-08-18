import './home.css';
import React from 'react';
import { useTranslation } from 'react-i18next';
import BtnIcon from '../../assets/icons/svgexport-6.svg';
import HomeSlider from '../../shared/slider/slider';
import ResSlider from '../../shared/resSlider/resSlider';
import { slider } from '../../data/Events'
import icon from '../../assets/images/event/icon.svg'
import Image from '../../assets/images/event/image.png'
import { Col, Row } from 'antd';
import Blogscomponent from '../blog/blogscomponent'
import Tomas1 from '../../assets/images/Tomas1.png'
import Tomas2 from '../../assets/images/Tomas2.png'



const Home = () => {
  const { t } = useTranslation();
  const events = slider || []; 


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

          <div className='esection'>
                <div className='container'>
                <span className='container_title'>Discover Events</span>
                <div className='container_events'>
                    {events.length > 0 ? (
                        events.map((item, index) => (
                        <>                    
                            <div key={index} className='card'>
                                <div className='image'>
                                    <img src={item.image} alt={item.name} />
                                    <div><button>Read More</button></div>
                                </div>
                                <div className='events_text'>
                                    <div className='events_text_name'>
                                        <h2>{item.name}</h2>
                                        <p>{item.price}</p>
                                    </div>
                                    <div className='events_loc'>
                                        <p>{item.date}</p>
                                        <img src={icon} alt="" className='img' />
                                        <p>{item.location}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                        ))
                    ) : (
                        <p>No events available.</p> 
                    )}

                </div>
                </div>
          </div>

          <section className='ourValues'>
            <div className='container'>
              <div className="values">
                <h3>Our Values</h3>
              </div>

              <div className="categories">
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  
                  <Col className="gutter-row" span={12} xs={24} md={24} lg={12}>
                    <div className="trust">
                      <div>
                        <img src="https://www.emkiproduction.com/static/media/rectangle1.bfa8dab7d147fe4e9fb0aa72c4a6ca9e.svg" alt="" />
                      </div>
                      <div>
                        <h2>Trust</h2>
                        <p>We always give frank feedback and actionable advice to  help you see the big picture  </p>

                      </div>
                    </div>
                  </Col>
                  <Col className="gutter-row" span={12} xs={24} md={24} lg={12}>
                    <div className="trancparency">
                      <div>
                        <img src="https://www.emkiproduction.com/static/media/rectangle2.f1dcaa02e43c684875e14a0a870221f4.svg" alt=""  />
                      </div>
                      <div>
                        <h2>Trancparency</h2>
                        <p>We help you understand things clearly by removing  all the confusing information </p>

                      </div>
                    </div>
                  </Col>
                  <Col className="gutter-row" span={12} xs={24} md={24} lg={12}>
                    <div className="innovation">
                      <div>
                        <img src="https://www.emkiproduction.com/static/media/rectangle3.d4439086c2e764fe232bbfdd79ed6555.svg" alt=""  />
                      </div>
                      <div>
                        <h2>Innovation</h2>
                        <p>Our events  have been  meticulously built and match  the ambition of  modern buissness </p>

                      </div>
                    </div>
                  </Col>
                  <Col className="gutter-row" span={12} xs={24} md={24} lg={12}>
                    <div className="collaboration">
                      <div>
                        <img src="https://www.emkiproduction.com/static/media/rectangle4.c163e44074fcf20421fcaf8a5e02283c.svg" alt="" />
                      </div>
                      <div>
                        <h2>Collaboration</h2>
                        <p>We approach  every engagement  with confidence in our ability  to forge a  long -term relationships. </p>

                      </div>
                    </div>
                  </Col>
                </Row>
              </div>

            </div>
          </section>
                    
          <div className='blogs'>
            <div className="container2">
                <h3 className='blogs-head'>Blogs</h3>
                <div className='home_components'>
                  <Blogscomponent
                  img ={Tomas1}
                  head ="Thomas Anders’s Baku concert"
                  text="Show your event to the world through any platform. We are leaders in streaming and..."
                  />
                  <Blogscomponent
                  img ={Tomas2}
                  head ="Thomas Anders’s Baku concert"
                  text="Show your event to the world through any platform. We are leaders in streaming and..."
                  /><Blogscomponent
                  img ={Tomas1}
                  head ="Thomas Anders’s Baku concert"
                  text="Show your event to the world through any platform. We are leaders in streaming and..."
                  /><Blogscomponent
                  img ={Tomas2}
                  head ="Thomas Anders’s Baku concert"
                  text="Show your event to the world through any platform. We are leaders in streaming and..."
                  /><Blogscomponent
                  img ={Tomas1}
                  head ="Thomas Anders’s Baku concert"
                  text="Show your event to the world through any platform. We are leaders in streaming and..."
                  /><Blogscomponent
                  img ={Tomas2}
                  head ="Thomas Anders’s Baku concert"
                  text="Show your event to the world through any platform. We are leaders in streaming and..."
                  />
            </div>
            </div>
          </div>

          <div className='home_sponsor'>
            <div className='home_container'>
                <div className='box'>
                    <div className='box-body'>
                        <div className='box-title'>
                            <h1>Have A Project?</h1>
                            <span>Show your event to the world through any platform. We are leaders in streaming and broadcast services for events, offering consulting services and development of complete systems for our clients in event broadcasting.Show your event to the world through any platform. We are leaders in streaming and broadcast services for events, offering consulting services and development of complete systems for our clients in event broadcasting. Show your event to the world through any platform. We are leaders in streaming and broadcast services for events, offering consulting services and development of complete systems for our clients in event broadcasting.Show your event to the world through any platform. We are leaders in streaming and broadcast services for events, offering consulting services and development of complete systems for our clients in event broadcasting.</span>
                        </div>
                            <img src={Image} alt="" srcset="" />
                    </div>
                </div>
            </div>
          </div>
      </section>
    </>
  );
};

export default Home;
