import { Navigate, Route, Routes } from "react-router-dom"
import { Layout } from "./components"
import { Home, Event, Register } from "./pages"

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="event/:eventId" element={<Event />} />
          <Route path="event/:eventId/register" element={<Register />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App
