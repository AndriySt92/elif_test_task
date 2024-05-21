import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit"
import { eventApi } from "./eventApi"

export const store = configureStore({
  reducer: {
    [eventApi.reducerPath]: eventApi.reducer,
  },
  middleware: getDefaultMiddlware =>
    getDefaultMiddlware().concat(eventApi.middleware),
})

export type AppStore = typeof store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = AppStore["dispatch"]
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>