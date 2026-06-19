import React from "react"
import  Home from "./Home"
import About from "./About"
import Service from "./Service"
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
function App(){
    return<>
       <BrowserRouter>
            <Link to="/" className="nav">Home</Link>
            <Link to="/about" className="nav">About</Link>
            <Link to="/service" className="nav">Service</Link>
             <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="About" element={<About/>}/>
                <Route path="Service" element={<Service/>}/>
             </Routes>
       </BrowserRouter>
    </>
}
export default App;