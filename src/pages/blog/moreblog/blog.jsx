import "./blog.css"
import Blogscomponent from '../blogscomponent'
import Tomas1 from '../../../assets/images/Tomas1.png'
import Tomas2 from '../../../assets/images/Tomas2.png'
import MoreImg from '../../../assets/icons/More Head.jpg'


const Blog = () => {

    return(

        <>
        <div className="blog">
            <div className="blog_head">
                <img className="blog_head_image" src={MoreImg} alt="MoreImg" />
            <div className="blog_head-texts">
                <h1 className="blog_head_title">Working on anything exciting them lately?</h1>
                <p className="blog_head_subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut elit mi. Sed commodo metus quis tellus maximus auctor. Pellentesque consectetur diam at turpis auctor, ac ullamcorper erat suscipit. Etiam ut tellus et diam faucibus rhoncus eu et ligula. Integer felis augue, semper et risus ac, tristique scelerisque nulla. Maecenas porttitor ligula pulvinar dolor viverra feugiat. Vestibulum sed est aliquet, ultrices diam vel, pellentesque neque. Morbi in dolor non nulla bibendum mattis eget a sem. Aliquam a posuere dolor, at bibendum sapien. Etiam magna leo, dictum quis dolor quis, placerat lobortis ante. Vivamus justo leo, ornare ac ultrices et, condimentum quis massa. Aenean blandit ligula quis sodales iaculis. Phasellus id viverra ante, vel finibus neque.</p>
            </div>
            </div>
        </div>
            <div className='blogs'>
                <div className="container2">
                    <h3 className='blogs-head'>Blogs</h3>
                    <div className='home_components'>
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
                </div>
            </div>
        </>
    )
}

export default Blog