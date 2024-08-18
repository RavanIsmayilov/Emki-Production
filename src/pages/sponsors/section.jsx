import "./section.css";
import React from 'react'
import { Col, Row } from 'antd';



const Sponsors = () => {
  return (
    <div>
      <div className="hero">
        <div className="container">
          <div className="heroAll" style={{ paddingTop: "30px" }}>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row col2" span={12} xs={24} md={12} lg={12}>
                <div className="heroText" >
                  <h1 style={{ fontSize: "50px" }}>Have a Project?</h1>
                  <p style={{  fontSize: "20px"  }}>Show your event to the world through any platform.We are br leaders in streaming and broadcast services for events, offering consulting services and development of complete systems for our clients in event broadcasting. <br />Show yor event to the world through any platform.We are leaders in streaming and broadcast services for events,offering consulting services and development of complete systems for our clients in event broadcasting. <br />Interested in learning more about our services? Our team take the time to discuss tour objectives and help you make smart decisions that bes meet your needs <br />Interested in learning more about our services?Our team take the time to discuss your objectives and help you make smart desicions that best meet your needs.</p>
                </div>
              </Col>
              <Col className="gutter-row" span={12} xs={24} md={12} lg={12}>
                <div className="heroImg">
                  <img src="https://emkistorage.blob.core.windows.net/web/Untitled%20design%20(2)20231021065135081.png" alt="" />
                </div>
              </Col>
            </Row>
          </div>

        </div>
      </div>

      <section className="sponsors">
        <div className="container">
          <div className="sponsorText">
            <h2 style={{ color: "white", paddingTop: "30px",fontSize:"40px",fontFamily:"Euclid Circular A, sans-serif" }} >Sponsors</h2>
          </div>

          <div className="sponsor">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={1} xs={24} md={12} lg={6}>
                <div className="sponsorImg">
                  <img src="https://emkistorage.blob.core.windows.net/web/Layer_120231021145414459.png" alt="" />
                </div>
              </Col>
              <Col className="gutter-row" span={1} xs={24} md={12} lg={6}>
                <div className="sponsorImg">
                  <img src="https://emkistorage.blob.core.windows.net/web/ALDE-LOGO-PNG-V1%20120231021145420501.png" alt="" />
                </div>
              </Col>
              <Col className="gutter-row" span={1} xs={24} md={12} lg={6}>
                <div className="sponsorImg">
                  <img src="https://emkistorage.blob.core.windows.net/web/Layer_120231021145414459.png" alt="" />
                </div>
              </Col>
              <Col className="gutter-row" span={1} xs={24} md={12} lg={6}>
                <div className="sponsorImg">
                  <img src="https://emkistorage.blob.core.windows.net/web/ALDE-LOGO-PNG-V1%20120231021145420501.png" alt="" />
                </div>
              </Col>
              
            </Row>

          </div>
        </div>
      </section>

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
                  <img src="https://www.emkiproduction.com/static/media/rectangle1.bfa8dab7d147fe4e9fb0aa72c4a6ca9e.svg" alt=""  />
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
                  <img src="https://www.emkiproduction.com/static/media/rectangle2.f1dcaa02e43c684875e14a0a870221f4.svg" alt="" />
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
                  <img src="https://www.emkiproduction.com/static/media/rectangle3.d4439086c2e764fe232bbfdd79ed6555.svg" alt="" />
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
                  <img src="https://www.emkiproduction.com/static/media/rectangle4.c163e44074fcf20421fcaf8a5e02283c.svg" alt=""  />
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



    </div>
  )
}

export default Sponsors