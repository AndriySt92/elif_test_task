import React, { useEffect, useState } from "react"
import "./style.css"
import { useGetEventQuery } from "../../redux/eventApi"
import { useParams } from "react-router-dom"
import { Error, Loader, ParticipantList } from "../../components"
import { Filter } from "../../components/Filter"
import { Participant } from "../../interfaces/participantInterfaces"

export const Event = () => {
  const [participants, setParticipants] = useState<Participant[] | []>([])
  const [filterValue, setFilterValue] = useState<string>("")
  const { eventId } = useParams()
  const { data, isLoading, isError } = useGetEventQuery(eventId as string)

  useEffect(() => {
    if (data) {
      setParticipants(data.participants)
    }
  }, [data])

  useEffect(() => {
    if (data) {
      if (filterValue) {
        setParticipants(
          [...data.participants].filter(
            participant =>
              participant.fullName
                .toLowerCase()
                .startsWith(filterValue.toLowerCase()) ||
              participant.email
                .toLowerCase()
                .startsWith(filterValue.toLowerCase()),
          ),
        )
      } else {
        setParticipants(data?.participants as Participant[])
      }
    }
  }, [filterValue])

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="event">
      {data && data.participants.length > 0 ? (
        <>
          <h2 className="event__title">{data.title} participants</h2>
          <Filter setFilterValue={setFilterValue} />
          {!participants.length && (
            <h2
              className="event__no-participants"
              style={{ marginTop: "20px" }}
            >
              No participants with such name or email
            </h2>
          )}
          <ParticipantList title={data.title} participants={participants} />
        </>
      ) : (
        data && (
          <h2 className="event__no-participants">
            The event {data?.title} has no participants yet
          </h2>
        )
      )}

      {isError && <Error error="Occured some error with fetching event" />}
    </div>
  )
}
