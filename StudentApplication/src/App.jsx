import { BrowserRouter,Routes,Route } from "react-router-dom"
import AddStduent from "./AddStduents"
export default function App(){
    return<>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<AddStduent/>}></Route>
                  
              </Routes>
          </BrowserRouter>
    </>
}