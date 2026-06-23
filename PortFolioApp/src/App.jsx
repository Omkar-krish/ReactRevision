import React from "react"
import Home from "./Home"
import About from "./About"
import Project from "./Project"
import { BrowserRouter,Routes,Route,Link } from "react-router-dom"
import "./App.css"
function App(){
    return<>
           <BrowserRouter>
              <nav className="navbar">
                 <div className="logo">
                      Omkar Portfolio
                  </div>
                 <div className="nav-links">
                           <Link to="/">Home</Link>
                          <Link to="/About">About</Link>
                          <Link to="project">Project</Link>
                  </div> 
              </nav>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About/>}/>
                    <Route ath="/project" element={<Project/>}/>
                </Routes>
           </BrowserRouter>
    </>
}
export default App;