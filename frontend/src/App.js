import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

import Navbar from "./components/Navbar";
import Main from "./components/Main"

import CreateUser from "./components/CreateUser"
import UserList from "./components/UserList"
import EditUser from "./components/EditUser"

import CreateSensor from "./components/CreateSensor.js"
import SensorList from "./components/SensorList.js"
import EditSensor from "./components/EditSensor.js"

import CreateMeasure from "./components/CreateMeasure.js"
import MeasureList from "./components/MeasureList.js"
import EditMeasure from "./components/EditMeasure.js"

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

      <Route path="/SensorList" component = {SensorList}/>
      <Route path="/CreateSensor" component = {CreateSensor}/>
      <Route path="/EditSensor/:id" component = {EditSensor}/>

      <Route path="/MeasureList" component = {MeasureList}/>
      <Route path="/CreateMeasure" component = {CreateMeasure}/>
      <Route path="/EditMeasure/:id" component = {EditMeasure}/>

      </div>
    </Router>
  );
}

export default App;
