import React from 'react'
import '../discoverEvents/Events.scss'
function EventsProducts(props) {

  return (
    <div className='EventsProducts'>
       <div className='eventsimgs'>
          <img src={props.img} alt="" />
          <button>Read More</button>
       </div>
       <div className='eventstitles'>
          <div className='title-price'>
            <h3>{props.title}</h3>
            <p className='price'>{props.price} </p>
          </div>
            <p className='about'>{props.about}</p>
       </div>
    </div>
  )
}

export default EventsProducts
