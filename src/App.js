import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
   <div className="">
   <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route> 
    </Routes>
    
   </div>
  );
}

export default App;