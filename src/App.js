import React from 'react';
import './App.css';
import Rimage from './Components/Rimage/Rimage'
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'

function App() {
  return (
    <div>
        <Router>
      <Route path="/" exact component={Rimage}/>
</Router>

    </div>
  );
}

export default App;
