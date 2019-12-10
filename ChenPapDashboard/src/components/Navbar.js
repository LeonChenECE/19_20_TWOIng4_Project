import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
	render() {
		return (
			<nav className="navbar sticky-top navbar-light bg-light navbar-expand-lg">
				<Link to="/" className="navbar-brand"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Overwatch_circle_logo.svg/500px-Overwatch_circle_logo.svg.png" width="30" height="30" alt=""/></Link>

				<div className="collapse navbar-collapse">

					<ul className="navbar-nav mr-auto">

						<li className="navbar-items">
							<Link to="/" className="navbar-brand">Dashboard</Link>
						</li>

						<li className="navbar-items">
							<Link to="/UserList" className="navbar-brand">Users</Link>
						</li>

						<li className="navbar-items">
							<Link to="/SensorList" className="navbar-brand">Sensors</Link>
						</li>

						<li className="navbar-items">
							<Link to="/MeasureList" className="navbar-brand">Measures</Link>
						</li>

					</ul>

				</div>

			</nav>
			)
	}
}