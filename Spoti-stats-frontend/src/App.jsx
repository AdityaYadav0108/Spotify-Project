import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex w-full h-screen bg-[#2b9348] items-center justify-center">
        <Routes>
          <Route path='/' element ={<Home/>} />
          <Route path='/contact' element={<Contact/>} /> 
        </Routes>
      </div>
    </>
  );
}

async function getToken() {}

export default App;
