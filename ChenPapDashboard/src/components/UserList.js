import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const User = props => (
	<tr>
		<td>{props.user._id}</td>
		<td>{props.user.location}</td>
		<td>{props.user.personsInHouse}</td>
		<td>{props.user.houseSize}</td>

		<td>
			<Link to={"/EditUser/"+props.user._id}>Edit </Link>
			 | 
			<a href="#" onClick={() => { props.deleteUser(props.user._id) }}> Delete</a>
		</td>
	</tr>

	)

export default class UserList extends Component {

	constructor(props) {
		super(props);

		this.deleteUser = this.deleteUser.bind(this);

		this.state = {users: []};
	}

	componentDidMount(){
		axios.get('http://localhost:5000/user/')
			.then(response => {
				this.setState({ users: response.data})
			})
			.catch((error) => {
				console.log(error);
			})
	}

	deleteUser(id) {
		axios.delete('http://localhost:5000/user/'+id)
		.then(res => console.log(res.data));

		this.setState({
			users: this.state.uers.filter(el => el._id !== id)
		})
	}

	userList() {
		return this.state.users.map(currentuser => {
			return <User user={currentuser} deleteUser={this.deleteUser} key={currentuser._id}/>;
		})
	}

	render() {
		return(
			<div>
				<h3>List of all the Users</h3>
				<Link to={"/CreateUser"}><button>Create a New User</button></Link>
				<table className="table">
					<thead className="thead-light">
						<tr>
							<td>ID</td>

							<td>Location</td>
							<td>Persons in House</td>
							<td>House Size</td>
							<td>Actions</td>
						</tr>
					</thead>
					<tbody>
						{this.userList()}
					</tbody>
				</table>
			</div>
			)
	}

}