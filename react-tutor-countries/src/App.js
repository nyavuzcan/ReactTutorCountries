import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {BrowserRouter,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
    <div className="container">
        <Route component={Home} path='/' exact/>
        <Route component={About} path='/about' />
        <Route component={Contact} path='/contact' />
        </div>
     
      </BrowserRouter>

      </div>
  );
}

export default App;
