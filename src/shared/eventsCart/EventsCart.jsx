import React, { useEffect, useState } from 'react'
import { slider } from '../../data/Events'
import icon from '../../assets/images/event/icon.svg'
import { fetchTransData } from '../../api/api.jsx';


const EventsCart = () => {
    // const events = slider || []; 

    const [transData, setTransData] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);


    useEffect(() => {

        const getData = async () => {
        try {
          const transDataResult = await fetchTransData();
          setTransData(transDataResult);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
  
      getData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
    <>
        <span className='text'>Events</span>
        <div className='eventscard'>
            {transData.length > 0 ? (
                transData.filter(item => item.id).map((item, index) => (
                <>                    
                    <div key={index} className='card'>
                        <div className='image'>
                            <img src={item.imageSrc} alt={item.imageTitle} />
                            <div><button>Read More</button></div>
                        </div>
                        <div className='events_text'>
                            <div className='events_text_name'>
                                <h2>{item.artistName}</h2>
                                <p>{item.announcementId}</p>
                            </div>
                            <div className='events_loc'>
                                <p>{item.created}</p>
                                <img src={icon} alt="" className='img' />
                                <p>{item.place}</p>
                            </div>
                        </div>
                    </div>
                </>
                ))
            ) : (
                <p>No events available.</p> 
            )}

        </div>
    </>
    )
}

export default EventsCart
