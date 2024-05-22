import React, { useEffect, useState } from "react"
import "./style.css"
import { useInView } from "react-intersection-observer"
import { useGetEventsQuery } from "../../redux/eventApi"
import { Error, EventList, Loader, Sort } from "../../components"
import { Event } from "../../interfaces/eventInterfaces"

export const Home = () => {
  const [events, setEvents] = useState<Event[] | []>([])
  const [sortValue, setSortValue] = useState<string>("")
  const [page, setPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [limit, setLimit] = useState<number>(12)

  const { data, isLoading, isError } = useGetEventsQuery({
    page,
    limit,
  })

  const { ref, inView } = useInView({
    threshold: 0,
  })

  useEffect(() => {
    if (data) {
      setEvents([...events, ...data.events] as Event[])
      setTotalPages(data.totalCount / limit)
    }
  }, [data])

  useEffect(() => {
    if (inView) {
      setPage(prev => prev + 1)
    }
  }, [inView])

  const handleSort = (sortBy: string) => {
    const sortedEvents = [...events].sort((a: any, b: any) => {
      switch (sortBy) {
        case "date":
          return +new Date(a.event_date) - +new Date(b.event_date)
        case "title":
          return a.title.localeCompare(b.title)
        case "organizer":
          return a.organizer.localeCompare(b.organizer)
        default:
          return events
      }
    })

    setSortValue(sortBy)
    setEvents(sortedEvents)
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="home">
      <h2 className="home__title">Upcoming Events</h2>
      <div className="home__sort">
        <Sort handleSort={handleSort} sortValue={sortValue} />
      </div>
      {isError && <Error error="Occured some error with fetching events" />}
      {events && <EventList events={events} />}
      {events && page < totalPages && <div ref={ref}></div>}
    </div>
  )
}
