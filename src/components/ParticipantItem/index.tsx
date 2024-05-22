import React from "react"
import "./style.css"
import { Participant } from "../../interfaces/participantInterfaces"

interface Props {
  item: Participant
}

export const ParticipantItem: React.FC<Props> = ({ item }) => {
  return (
    <div className="participant__item">
      <div className="participant__item-info">
        <h4 className="participant__item-title">{item.fullName}</h4>
        <div className="participant__item-email">{item.email}</div>
      </div>
    </div>
  )
}
