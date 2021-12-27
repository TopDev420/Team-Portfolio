import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { Navigation } from "./components/navigation"
import { Header } from "./components/header"
import { Features } from "./components/features"
import { About } from "./components/about"
import { Services } from "./components/services"
import { Gallery } from "./components/gallery"
import { Testimonials } from "./components/testimonials"
import { Team } from "./components/Team"
import { Contact } from "./components/contact"
import { Jhon } from "./components/members/Jhon"
import JsonData from "./data/data.json"
import SmoothScroll from "smooth-scroll"
import "./App.css"

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navigation />
              <Header data={landingPageData.Header} />
              <Features data={landingPageData.Features} />
              <About data={landingPageData.About} />
              <Services data={landingPageData.Services} />
              <Gallery data={landingPageData.Gallery} />
              <Testimonials data={landingPageData.Testimonials} />
              <Team data={landingPageData.Team} />
              <Contact data={landingPageData.Contact} />
            </div>
          }
        ></Route>
        <Route path="/members/Jhon" element={<div>sfdsdf</div>}></Route>
      </Routes>
    </Router>
  )
}

export default App
