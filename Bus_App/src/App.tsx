import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//Pages

import Home from "./Pages/Home";
import Create from "./Pages/Create";
import Update from "./Pages/Update";
import Homie from "./Pages/Homie"

function App() {
  return (
    <>
      <BrowserRouter>
        <nav className='App_Nav'>
          <div className='Nav_Art'>
            <img
              className='CodeLab_Logo'
              src={"../Images/Bafokeng_Codelabtrans.png"}
            ></img>
            <h1 className='App_Heading'>Passenger Details</h1>
            <img
              className='RBH_Logo'
              src={"../Images/RoyalBafokeng.png"}
            ></img>
          </div>

          <div className='App_Link'>
            <Link to='/' className='App_Nav_Link'>
              Home
            </Link>
            <Link to='/Create' className='App_Nav_Link'>
              Create New Person
            </Link>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/:id' element={<Update />} />
        </Routes>
      </BrowserRouter>
      <Homie />
    </>
   
  );
}

export default App;
