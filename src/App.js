import React from "react";
import './App.css';
import { National } from './components/national'
// import { BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom'
import Statewise from './components/statewise';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


function App() {
 
  return (
    <>
  
  <Router>
       
        <Switch>
        
        
          <Route exact path="/">
            <National />
          </Route>
          <Route exact path="/statewise">
            <Statewise />
          </Route>
         
          
        </Switch>
      </Router>
   

     
      
     
    
    {/* <National/>
    <Statewise/> */}
   </>
  );
}

export default App;


