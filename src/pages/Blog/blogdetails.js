import React from 'react';
import './blogdetails.scss';

function blogdetails({ blog }) {
  if (!blog) return null; // Blog məlumatı yoxdursa, heç nə göstərmə

  return (
    <div className="blog-details">
        <div className="container">
        {/* <button className="close-btn" onClick={onClose}>Bağla</button> */}
        <img src={blog.img} alt={blog.head} className="blog-image"/>
        <h2 className="blog-head">{blog.head}</h2>
        <p className="blog-text">{blog.text}</p>
  
        </div>
      
    </div>
  );
}

export default blogdetails;
