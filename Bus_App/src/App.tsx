
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

//Pages

import Home from "./Pages/Home"
import Create from "./Pages/Create"
import Update from "./Pages/Update"

function App() {

  return (
    <>
    <BrowserRouter>
     <nav className='App_Nav'>
      <h1 className='App_Heading'>Passenger Details</h1>
      <div className='App_Link'>
        <Link to="/" className='App_Nav_Link' >Home</Link>
      <Link to="/Create" className='App_Nav_Link'>Create New Person</Link>
      </div>
      
      
     </nav>
     <Routes>
     <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create/>}/>
      <Route path="/:id" element ={<Update/>}/>
     </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
