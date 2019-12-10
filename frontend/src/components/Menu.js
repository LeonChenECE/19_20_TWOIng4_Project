import React, { Component } from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import './Menu.css'
import "bootstrap/dist/css/bootstrap.min.css";

export default class Menu extends Component {
	render(){
		return(
  <Navbar variant="dark">
    	<div id="OverBoard">
	    	<h1>
	    	OW
	    	</h1>
    	</div>
    	<div id="MenuButton">
	    	<h1>
	    		<a href="/">Accueil</a>
	    	</h1>
    	</div>
    	<div id="MenuButton">
	    	<h1>
	    		<a href="/Admin">Admin</a>
	    	</h1>
    	</div>
  </Navbar>
			)
	}
}