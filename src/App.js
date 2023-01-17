import React from 'react';
import './assets/App.css';
import { Switch, Route } from "react-router-dom";
import HomePage from './views/HomePage';
import FilmPage from './views/FilmPage';
import Header from './components/Header';

function App() {

  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/film/:title" component={FilmPage} />
      </Switch>
    </div>
  );
}

export default App;
