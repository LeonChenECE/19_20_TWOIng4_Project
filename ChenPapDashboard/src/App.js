import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/Navbar";
import Main from "./components/Main"
import CreateUser from "./components/CreateUser"
import UserList from "./components/UserList"
import EditUser from "./components/EditUser"

function App() {
  return (
    <Router>
    <div className="container">
    <Navbar />

    <br/>

    <Route path="/" exact component = {Main}/>
    <Route path="/UserList" component = {UserList}/>
    <Route path="/CreateUser" component = {CreateUser}/>
    <Route path="/EditUser/:id" component = {EditUser}/>

    </div>
    </Router>
  );
}

export default App;
