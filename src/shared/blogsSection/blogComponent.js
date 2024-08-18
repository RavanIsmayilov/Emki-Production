import React from 'react'
import Blogswiper from './blogswiper'
import '../blogsSection/blogcomponent.scss'


function blogComponent() {
  return (
    <div className='blogcomponent'>
        <div className="container">
            <h3 className='blogs'>Blogs</h3>
            <Blogswiper/>
        </div>
      
    </div>
  )
}

export default blogComponent
