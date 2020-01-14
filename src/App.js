import React, {Component} from 'react';
import Navbar from './components/navbar/Navbar';
import './App.css';

class App extends Component{
  render(){
    const name = "Bishal Udash";
    const getAge =() => "24";
    const loading = false;

    return (
      <div className="App">
        <Navbar />

        <div>
          {loading ?  "Loading"  : "Hello "+ name.toUpperCase()}
        </div>
        <p>{getAge()}</p>
      </div>
    );
  }
}

export default App;
