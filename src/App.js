import React, { Component } from "react";
import './App.css';

class  App extends Component {
   state = 
     { advice: "" }

     componentDidMount() {

        this.fetchApi();   
      
     }

     fetchApi = async() => {
      const response = await fetch('https://api.adviceslip.com/advice')  
      const data = await response.json(); 
      const { advice } = data.slip ;
       this.setState({
         advice
       })
  }
 
render() {

  return (

    <div className="app">
       
       <div className="card">
          
          <h1 className="heading">{ this.state.advice }</h1> 

          <button className="button1" onClick={this.fetchApi}>Give Me Advice</button>

       </div> 

    </div>
   );
 }
}

export default App;