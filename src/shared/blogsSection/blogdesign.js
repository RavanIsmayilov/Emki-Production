import React from 'react'
import '../blogsSection/blogcomponent.scss'

function blogdesign(props) {
  return (
    <div className='blogdesign'>
        <div className="blogimg">
            <img src={props.img} />
            <button>Read More</button>
            <h4 className='head'>{props.head}</h4>
        </div>
        <div className="blogtext">
            <p>{props.text}</p>
        </div>

      
    </div>
  )
}

export default blogdesign
