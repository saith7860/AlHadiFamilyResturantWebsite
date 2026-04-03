
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import { Route,Routes } from "react-router";

const App = () => {
  return (
    <>
    <div className="">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/menupage" element={<Menu/>}/>
      </Routes>
    </div>
 
   
    </>
  )
}

export default App;