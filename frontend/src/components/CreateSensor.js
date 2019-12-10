import React, { Component } from 'react';
import axios from 'axios';

export default class CreateSensor extends Component {
	constructor(props) {
		super(props);

		this.onChangeLocation = this.onChangeLocation.bind(this);
		this.onChangeDate = this.onChangeDate.bind(this);
		this.onChangeUserID = this.onChangeUserID.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			location: '',
			creationDate: '',
			userID: '',
			users: [],
		}
	}

	componentDidMount() {
		axios.get('http://localhost:5000/user/')
			.then(response => {
				if(response.data.length > 0) {
					this.setState({
						users: response.data.map(user=> user._id),
						userID: response.data[0]._id
					})
				}
			})
	}

	onChangeLocation(e) {
		this.setState({
			location: e.target.value
		});
	}

	onChangeDate(e) {
		this.setState({
			creationDate: e.target.value
		});
	}

	onChangeUserID(e) {
		this.setState({
			userID: e.target.value
		});
	}

	onSubmit(e) {
		e.preventDefault();

		const sensor = {
			location: this.state.location,
			creationDate: this.state.creationDate,
			userID: this.state.userID,
		}

		console.log(sensor);

		axios.post('http://localhost:5000/sensor/add', sensor)
			.then(res => console.log(res.data))
			.catch((error) => {
				console.log(error);
			})

		window.location = '/SensorList';
	}

	render() {
		return(

			//Formulaire
			<div>
				<h3>Create a New Sensor</h3>
				<form onSubmit={this.onSubmit}>

					<div className="form-group">
						<label> User ID: </label>
						<select ref="userInput"
						required
						className="form-control"
						value={this.onChangeUserID}>
						{
							this.state.users.map(function(user) {
								return <option
								key={user}
								value={user}>
								{user}
								</option>;
							})
						}
						</select>
						
					</div>

					<div className="form-group">
						<label> Location (Room): </label>
						<input type="text"
							required
							className="form-control"
							value={this.state.location}
							onChange={this.onChangeLocation}
						/>
					</div>

					<div className="form-group">
						<label> Creation Date (MM/DD/YYYY): </label>
						<input type="text"
							required
							className="form-control"
							value={this.state.creationDate}
							onChange={this.onChangeDate}
						/>
					</div>

					<div className="form-group">
						<input type="submit" value="Create" className="btn btn-primary"/>
					</div>
				</form>
			</div>

			)
	}
}