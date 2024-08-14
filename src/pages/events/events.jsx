import React from 'react'
import EventsCart from '../../shared/eventsCart/EventsCart'
import './events.scss'
const events = () => {
    return (
        <>
            <div className='container'>
                <div className='text'>Events</div>
                <EventsCart/>
            </div>
        </>
    )
}

export default events