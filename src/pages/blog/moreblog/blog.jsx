import "./blog.css"
import Blogscomponent from '../blogscomponent'
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react"
import { fetchPageData } from "../../../api/api"
import i18n from './../../../i18n';
import { useParams } from "react-router-dom";



const Blog = () => {

  const { id } = useParams(); 
  const { t } = useTranslation();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const languageMap = {
      en: "2", 
      az: "1", 
      ru: "3"  
    };

    const getData = async () => {
      try {
        const currentLang = i18n.language;
        const languageId = languageMap[currentLang] || "2";
        const pageData = await fetchPageData(languageId);
        
        const event = pageData.find(e => 
          e.postTranslations.some(p => p.id === parseInt(id))
        );

        if (event) {
          const post = event.postTranslations.find(p => p.id === parseInt(id));
          setPost(post);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [id, i18n.language]); 

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      {post ? (
        <div className="blog">
          <div className="blog_head">
            <img className="blog_head_image" src={post.imageSrc} alt="MoreImg" />
            <div className="blog_head-texts">
              <h1 className="blog_head_title">{post.title}</h1>
              <p className="blog_head_subtitle">{post.content}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>No blog post found.</p>
      )}
    
            <div className='blogs'>
                <div className="container2">
                    <h3 className='blogs-head'>Blogs</h3>
                    <div className='home_components'>
                    <Blogscomponent/><Blogscomponent/><Blogscomponent/><Blogscomponent/><Blogscomponent/><Blogscomponent/>
                </div>
                </div>
            </div>
        </>
    )
}

export default Blog