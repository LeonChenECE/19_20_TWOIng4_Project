import React, { Component } from 'react';
import axios from 'axios';

export default class EditSensor extends Component {
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
		axios.get('http://localhost:5000/sensor/'+this.props.match.params.id)
			.then(response => {
					this.setState({
						location: response.data.location,
						creationDate: response.data.creationDate,
						userID: response.data.userID
					})
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

		axios.post('http://localhost:5000/sensor/update/'+this.props.match.params.id, sensor)
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
				<h3>Edit Sensor</h3>
				<form onSubmit={this.onSubmit}>

					<div className="form-group">
						<label> Owner's ID: </label>
						<input type="text"
							required
							className="form-control"
							value={this.state.userID}
							onChange={this.onChangeUserID}
						/>
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
						<input type="submit" value="Edit" className="btn btn-primary"/>
					</div>
				</form>
			</div>

			)
	}
}
