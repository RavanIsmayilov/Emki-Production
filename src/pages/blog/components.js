import React from 'react'
import './blogcomponents.css'
import Blogscomponent from './blogscomponent'
import Tomas1 from '../../assets/images/Tomas1.png'
import Tomas2 from '../../assets/images/Tomas2.png'


function Components() {
  return (
    <div className='components'>
        <Blogscomponent
        img ={Tomas1}
        head ="Thomas Anders’s Baku concert"
        text="Show your event to the world through any platform. We are leaders in streaming and..."
        />
        <Blogscomponent
        img ={Tomas2}
        head ="Thomas Anders’s Baku concert"
        text="Show your event to the world through any platform. We are leaders in streaming and..."
        /><Blogscomponent
        img ={Tomas1}
        head ="Thomas Anders’s Baku concert"
        text="Show your event to the world through any platform. We are leaders in streaming and..."
        /><Blogscomponent
        img ={Tomas2}
        head ="Thomas Anders’s Baku concert"
        text="Show your event to the world through any platform. We are leaders in streaming and..."
        /><Blogscomponent
        img ={Tomas1}
        head ="Thomas Anders’s Baku concert"
        text="Show your event to the world through any platform. We are leaders in streaming and..."
        /><Blogscomponent
        img ={Tomas2}
        head ="Thomas Anders’s Baku concert"
        text="Show your event to the world through any platform. We are leaders in streaming and..."
        />
      
    </div>
  )
}

export default Components