import React from 'react'
import './blogcomponents.css'
import Components from './components';

function Blogs() {
  return (
    <div className='blogs'>
        <div className="container2">
            <h3 className='blogs-head'>Blogs</h3>
            <Components/>
        </div>
    </div>
  )
}

export default Blogs