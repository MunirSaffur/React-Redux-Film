import React, { useEffect } from 'react';
import './assets/App.css';
import api from './api';
import { Switch, Route } from "react-router-dom";
import HomePage from './views/HomePage';

function App() {

  useEffect(()=>{
    api.get("/",{params:{apikey: "32e9d15",s: "pokemon"}})
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
  },[])

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
