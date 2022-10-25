import { useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../stylesheets/App.css';

import { UserContext } from '../context/user';

import Home from "./Home";
import About from "./About";
import MapContainer from "./MapContainer";
import LoginSignup from "./LoginSignup";
import Contribute from "./Contribute";


const MAPBOX_TOKEN = 'pk.eyJ1IjoidGgtdGgiLCJhIjoiY2t3N2Q1YmNxOW8wajMxczE4ZndqaDRuNCJ9.UWfb1rN9Hl6lBXJGLC6Vrw'; 

function App() {
  const { setUser } = useContext(UserContext);

  const [cameras, setCameras] = useState([]);
  const [neighborhoods, setNeighborhoods] = useState([]);
  const [socialMedia, setSocialMedia] = useState([]);

  // auto-login
  useEffect(() => {
    fetch("http://localhost:3000/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    Promise.all([
      fetch('http://localhost:3000/cameras'),
      fetch('http://localhost:3000/neighborhoods'),
      fetch('http://localhost:3000/social_media_platforms'),
      
    ]).then(function(responses){
      return Promise.all(responses.map(function (response) {
        return response.json();
      }))
    }).then(function(data){
      const cameras = data[0];
      const neighborhoods = data[1];
      const socialMedia = data[2];

      setCameras(cameras);
      setNeighborhoods(neighborhoods);
      setSocialMedia(socialMedia);
    })
  }, []);
  

  return (
    <BrowserRouter>
      <div className="app">
        <main>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route exact path="/about" element={ <About /> } />
            <Route exact path="/Map" element={ <MapContainer MAPBOX_TOKEN={MAPBOX_TOKEN}/> } />
            <Route exact path="/signin" element={ <LoginSignup neighborhoods={neighborhoods} socialMedia={socialMedia}/> } />
            <Route exact path="/contribute" element={ <Contribute /> } />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
