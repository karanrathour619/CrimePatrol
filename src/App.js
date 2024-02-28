import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Link } from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Submit from './pages/Submit';
import User from './pages/User';
import Map from './pages/MapPage';
import { auth } from './firebase-config'
import { signOut } from 'firebase/auth'
import UserEdit from './pages/UserEdit';
import Footer from './components/Footer';
import Reports from './pages/Reports';

function App() {

  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/";
    })
  }
  
  return (
    <Router>
      <nav className="bg-slate-950 p-4 flex justify-between items-center w-full fixed z-10">
          <div className="text-white text-xl font-semibold "><Link to="/">Crime Patrol</Link></div>
          <ul className="flex space-x-4">
              <li className="text-white hover:text-gray-300 text-lg gap-2 mt-2">
                  <Link to="/">Home</Link>
              </li>
              <li className="text-white hover:text-gray-300 text-lg mt-2">
              <Link to="https://www.indiatoday.in/crime">News</Link>
              </li>
              <li className="text-white hover:text-gray-300 text-lg mt-2">
              <Link to="/map">Map</Link>
              </li>
              <li className="text-white hover:text-gray-300 text-lg mt-2">
              <Link to="/reports">Reports</Link>
              </li>
              <li className="text-white hover:text-gray-300 text-lg mt-2">
              {isAuth ? <Link Link to="/submit">SubmitReport</Link> : null}
              </li>
              <li className="text-white hover:text-gray-300 text-lg mt-2">
              {!isAuth ? <Link to="/login">Login</Link> : <button onClick={signUserOut}><span>Log Out</span></button>}
              </li>
              <li className="text-white hover:text-gray-300 text-lg">
                  { isAuth ? <Link to="/user"><img src={require('../src/components/images/userlogo.png')} className='h-10' alt="" /></Link> : null}
              </li>
          </ul>
      </nav>

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/submit" element={<Submit isAuth={isAuth}/>} />
        <Route exact path="/useredit" element={<UserEdit />} />
        <Route exact path="/reports" element={<Reports />} />
        <Route exact path="/user" element={<User />} />
        <Route exact path="/map" element={<Map />} />
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
