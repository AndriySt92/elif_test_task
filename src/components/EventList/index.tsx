import React from "react"
import "./style.css"
import { EventItem } from "../EventItem"
import { Event } from "../../interfaces/eventInterfaces"

interface Props {
  events: Event[]
}

export const EventList: React.FC<Props> = ({ events }) => {
  return (
    <div className="event__list">
      <div className="event__list-items">
        {events.map(item => (
          <EventItem item={item} key={item._id} />
        ))}
      </div>
    </div>
  )
}
