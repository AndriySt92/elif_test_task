import { Participant } from "./participantInterfaces"

export interface Event {
  _id: string
  title: string
  description: string
  organizer: string
  event_date: string
  participants: Participant[]
}

