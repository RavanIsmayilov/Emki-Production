import React from 'react';
import Events from './Events';
import '../discoverEvents/DiscoverEvents.scss';
import '../discoverEvents/Events.scss'

function DiscoverEvents() {
  return (
    <div className='DiscoverEvents'>
      <div className='container'>
        <h4>Discover Events</h4>
        <Events />
      </div>
    </div>
  );
}

export default DiscoverEvents;
