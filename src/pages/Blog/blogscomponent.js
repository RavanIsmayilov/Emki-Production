import '../Blog/blogcomponents.scss'

function blogscomponent(props) {
  return (
    <div className='blogscomponent'>
      <div className="blogimg">
        <img src={props.img} />
        <button>
          Read More
        </button>
        <h4 className='head'>{props.head}</h4>
      </div>
      <div className="blogtext">
        <p className='body-text'>{props.text}</p>
      </div>
    </div>
    

    
  )
}

export default blogscomponent
