import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Event } from "../interfaces/eventInterfaces"
import { RegisterData } from "../interfaces/participantInterfaces"

export const eventApi = createApi({
  reducerPath: "event",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://eliftechbackend-andriysts-projects.vercel.app/api/event",
  }),

  endpoints: builder => ({
    getEvents: builder.query<
      { events: Array<Event>; totalCount: number },
      { page: number; limit: number }
    >({
      query: ({ page = 1, limit = 12 }) => ({
        url: `/?limit=${limit}&page=${page}`,
      }),
    }),
    getEvent: builder.query<Event, string>({
      query: eventId => ({
        url: `/${eventId}/participants`,
      }),
    }),
    register: builder.mutation<
      { message: string },
      { body: RegisterData; eventId: string }
    >({
      query: ({ body, eventId }) => ({
        url: `/${eventId}/register`,
        method: "POST",
        body,
      }),
    }),
  }),
})

export const {
  useGetEventsQuery,
  useRegisterMutation,
  useGetEventQuery,
} = eventApi
