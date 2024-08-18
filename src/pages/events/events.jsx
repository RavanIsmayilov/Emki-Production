import './events.css'
import React from 'react'
import EventsCart from '../../shared/eventsCart/EventsCart'

const Events = () => {
    return (
        <>
            <div className='section'>
                <div className='container'>
                    <EventsCart/>
                </div>
            </div>
        </>
    )
}

export default Events