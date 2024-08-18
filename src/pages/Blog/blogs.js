import React from 'react'
import Components from './components';
import '../Blog/blogcomponents.scss'

function blogs() {
  return (
    <div className='blogs'>
      
        <div className="container">
            <h3 className='blogs-head'>Blogs</h3>
            <Components/>
        </div>
      
    </div>
  )
}

export default blogs
