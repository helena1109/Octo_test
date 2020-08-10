import React from 'react';
import Header from "../Header/header";
import HomePage from "../MainComponents/HomePage/HomePage";

class App extends React.Component{


  render(){
    return(
        <div>
            <Header/>
            <HomePage/>
        </div>
    )
  }
}

export default App
