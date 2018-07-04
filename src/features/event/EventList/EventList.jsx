import React, { Component } from 'react';
import EventListItem from './EventListItem';

class EventList extends Component {
  render() {

    const {events} = this.props;

    return (
      <div>
        <h1>Event list</h1>

        {events.map( item =>  <EventListItem event={item} key={item.id} /> )}
      </div>
    )
  }
}

export default EventList;