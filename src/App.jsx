/*components */
import Header from "./components/Header"
import Cards from "./components/Cards"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

//pages--------------------------------------
import { Home } from "./pages/Home"
import { Info } from "./pages/Info"

export function App() {
  return (
    <div className="w-screen h-screen max-w-full">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </Router>
    </div>
  )
}