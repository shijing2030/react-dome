import React from 'react';
import Head from './component/head/Head'
import Home from './component/home/Home'
import Foot from './component/foot/Foot'
import Detail from './component/details/Detail'
import Login from './component/login/Login'
import Single from './component/single/Single'
import {BrowserRouter as Router,NavLink,Route,Switch}from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <Head/> */}
      <Router>
          <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/detail" component={Detail}/>
          <Route path="/login" component={Login}/>
          <Route path="/single/:id" component={Single}/>
          </Switch>
      </Router>
      {/* <Home/>
      <Foot/> */}
    </div>
  );
}

export default App;
