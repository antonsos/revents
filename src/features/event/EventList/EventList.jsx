import React, { Component } from 'react';
import EventListItem from './EventListItem';

class EventList extends Component {
  render() {

    const {events, onOpenEvent, deleteEvent} = this.props;

    return (
      <div>
        <h1>Event list</h1>

        { events.map( item =>  (
          <EventListItem 
            deleteEvent={deleteEvent}
            onOpenEvent={onOpenEvent}
            event={item} 
            key={item.id} />
        ))}
      </div>
    )
  }
}

export default EventList;