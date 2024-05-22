import React from "react"
import "./style.css"
import { Event } from "../../interfaces/eventInterfaces"
import { Button } from "../Button"

interface Props {
  item: Event
}

export const EventItem: React.FC<Props> = ({ item }) => {
  return (
    <div className="event__item">
      <div className="event__item-info">
        <h4 className="event__item-title">{item.title}</h4>
        <div className="event__item-organizer">{item.organizer}</div>
        <div className="event__item-description">{item.description}</div>
        <div className="event__item-date">{item.event_date}</div>
      </div>
      <div className="event__item-buttons">
        <Button linkTo={`/event/${item._id}/register`} withBackground>Register</Button>
        <Button linkTo={`/event/${item._id}`}>View</Button>
      </div>
    </div>
  )
}
