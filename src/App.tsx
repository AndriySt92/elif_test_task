import { EventList, Header } from "./components"
import Register from "./pages/Register"

const App = () => {
  return (
    <div className="App">
      <Header />
      <EventList title='events' />
    </div>
  )
}

export default App
