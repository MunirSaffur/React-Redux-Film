import React, { useEffect } from 'react';
import './assets/App.css';
import api from './api';

function App() {

  useEffect(()=>{
    api.get("/",{params:{apikey: "32e9d15",s: "pokemon"}})
    .then(res=>res.json)
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
  },[])
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
