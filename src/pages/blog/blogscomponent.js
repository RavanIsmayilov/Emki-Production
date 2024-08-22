import './blogcomponents.css';
import { fetchPageData } from '../../api/api';
import i18n from '../../i18n';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Blogscomponent = () => {
  const { t } = useTranslation();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const languageMap = {
    en: "2", // English
    az: "1", // Azerbaijani
    ru: "3"  // Russian
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const currentLang = i18n.language;
        const languageId = languageMap[currentLang] || "2";
        const pageData = await fetchPageData(languageId);

        setEvents(pageData || []);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [i18n.language]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const targetEvent = events.find(
    (event) => event.id.toString() === languageMap[i18n.language]
  );

  return (
    <>
      {targetEvent?.postTranslations.length > 0 ? (
        targetEvent.postTranslations.map((item, index) => (
          <div key={index} className='blogscomponent'>
            <div className="blogimg">
              <img src={item.imageSrc} alt="MoreImg" />
              <button>
                <Link className='blogimg_link' to={`/blog/${item.id}`}>Read More</Link>
              </button>
              <h4 className='head'>{item.title}</h4>
            </div>
            <div className="blogtext">
              <p className='body-text'>{item.content}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No events available.</p>
      )}
    </>
  );
};

export default Blogscomponent;
