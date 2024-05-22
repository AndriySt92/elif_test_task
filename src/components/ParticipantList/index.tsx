import React from "react"
import { ParticipantItem } from "../ParticipantItem"
import "./style.css"
import { Event } from "../../interfaces/eventInterfaces"
import { Participant } from "../../interfaces/participantInterfaces"

interface Props {
  participants: Participant[]
  title: string
}

export const ParticipantList: React.FC<Props> = ({ participants, title }) => {
  return (
    <div className="participant__list">
      <div className="participant__list-items">
        {participants.map(item => (
          <ParticipantItem item={item} key={item._id} />
        ))}
      </div>
    </div>
  )
}
