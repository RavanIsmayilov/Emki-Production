

import React, { useState } from 'react';
import Blogscomponent from './blogscomponent';
import BlogDetails from './blogdetails'; // Yeni komponent
import AlanWalker from '../../assets/images/AlanWalker.jpg';
import RafetElRoman from '../../assets/images/RafetElRoman.JPG';
import ThomasAnders from '../../assets/images/ThomasAnders.jpg'
import Ortach from '../../assets/images/Ortach.jpg'
import DJKorolova from '../../assets/images/DjKorolova.jpg'
import '../Blog/blogcomponents.scss';

function Components() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogs = [
    { id: 1, img: AlanWalker, head: "Alan Walker Set to Illuminate", text: "Get ready, Baku! The electronic music sensation, Alan Walker, is all set to ignite . . ." },
    { id: 2, img: RafetElRoman, head: "Rafet El Roman to Mesmerize ", text: "Get ready to immerse yourself in the soul-stirring melodies of the renowned Turkish..." },
    { id: 3, img: ThomasAnders, head: "Thomas Anders Concert at", text: "Baku, the vibrant capital city of Azerbaijan, was swept off its feet on the evening of October . . ." },
    { id: 4, img: Ortach, head: "A Night of Musical Brilliance", text: "On the enchanting evening of April 1, 2023, music enthusiasts in Baku were treated to..." },
    { id: 5, img: DJKorolova, head: "Unforgettable Night of Beats", text: "In the heart of Baku, Azerbaijan, music enthusiasts and partygoers experienced . . ." },
    // Daha çox blog obyekti əlavə edin
  ];

  const handleBlogClick = (id) => {
    const blog = blogs.find(blog => blog.id === id);
    setSelectedBlog(blog);
  };

  const handleCloseMenu = () => {
    setSelectedBlog(null);
  };

  return (
    <>
      {selectedBlog && (
        <BlogDetails
          blog={selectedBlog}
          onClose={handleCloseMenu}
        />
      )}
      <div className={`blogs ${selectedBlog ? 'hidden' : ''}`}>
        <div className='components'>
          {blogs.map(blog => (
            <Blogscomponent
              key={blog.id}
              img={blog.img}
              head={blog.head}
              text={blog.text}
              onClick={() => handleBlogClick(blog.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Components;


