import React from 'react'
import { slider } from '../../data/Events'
import icon from '../../assets/images/event/icon.svg'

const EventsCart = () => {
    const events = slider || []; 

    return (
    <>
        <span className='text'>Events</span>
        <div className='eventscard'>
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
    </>
    )
}

export default EventsCart
