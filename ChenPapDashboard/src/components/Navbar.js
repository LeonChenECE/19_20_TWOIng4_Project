import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-dark bg-dark navbar-expand-lg">
				<Link to="/" className="navbar-brand">ChePaDashboard</Link>

				<div className="collapse navbar-collapse">

					<ul className="navbar-nav mr-auto">

						<li className="navbar-items">
							<Link to="/" className="navbar-brand">Dashboard</Link>
						</li>

						<li className="navbar-items">
							<Link to="/UserList" className="navbar-brand">Users</Link>
						</li>

					</ul>

				</div>

			</nav>
			)
	}
}