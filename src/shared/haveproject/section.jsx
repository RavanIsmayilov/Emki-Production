import React from 'react'
import Image from '../../assets/images/event/image.png'
import './section.scss'
const Section = () => {
    return (
        <>
            <div className='container'>
                <div className='box'>
                    <div className='box-body'>
                        <div className='box-title'>
                            <h1>Have A Project?</h1>
                            <span>Show your event to the world through any platform. We are leaders in streaming and broadcast services for events, offering consulting services and development of complete systems for our clients in event broadcasting.Show your event to the world through any platform. We are leaders in streaming and broadcast services for events, offering consulting services and development of complete systems for our clients in event broadcasting.</span>
                        </div>
                                <img src={Image} alt="" srcset="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section