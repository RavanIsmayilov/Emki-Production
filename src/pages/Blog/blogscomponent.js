


import React from 'react';
import '../Blog/blogcomponents.scss';

function Blogscomponent({ img, head, text, onClick }) {
  return (
    <div className='blogscomponent'>
      <div className="blogimg">
        <img src={img} alt={head} />
        <button onClick={onClick}>
          Read More
        </button>
        <h4 className='head'>{head}</h4>
      </div>
      <div className="blogtext">
        <p className='body-text'>{text}</p>
      </div>
    </div>
  );
}

export default Blogscomponent;
