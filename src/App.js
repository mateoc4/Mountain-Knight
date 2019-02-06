import React, { Component } from 'react';
import './App.css';
import Log from "./components/Log";
import Menu from "./components/Menu"
import Footer from "./components/Footer"

class App extends Component {
  

  render() {
    return (
      <div className="App ">
        <div className="container">

          <Menu/>

          <header>
            <h1>Mountain kingdom</h1> 
          </header>

          <Log/>
          
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
