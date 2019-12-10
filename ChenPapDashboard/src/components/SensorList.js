import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Sensor = props => (
	<tr>
		<td>{props.sensor._id}</td>
		<td>{props.sensor.location}</td>
		<td>{props.sensor.CreateationDate}</td>
		<td>{props.sensor.userID}</td>

		<td>
			<Link to={"/EditSensor/"+props.sensor._id}>Edit </Link>
			 | 
			<a href="#" onClick={() => { props.deleteSensor(props.sensor._id) }}> Delete</a>
		</td>
	</tr>

	)

export default class SensorList extends Component {

	constructor(props) {
		super(props);

		this.deleteSensor = this.deleteSensor.bind(this);

		this.state = {sensors: []};
	}

	componentDidMount(){
		axios.get('http://localhost:5000/sensor/')
			.then(response => {
				this.setState({ sensors: response.data})
			})
			.catch((error) => {
				console.log(error);
			})
	}

	deleteSensor(id) {
		axios.delete('http://localhost:5000/sensor/'+id)
		.then(res => console.log(res.data));

		this.setState({
			sensors: this.state.sensors.filter(el => el._id !== id)
		})
	}

	sensorList() {
		return this.state.sensors.map(currentsensor => {
			return <Sensor sensor={currentsensor} deleteSensor={this.deleteSensor} key={currentsensor._id}/>;
		})
	}

	render() {
		return(
			<div>
				<h3>List of all the Sensors</h3>
				<Link to={"/CreateSensor"} className="btn btn-primary">Create a New Sensor</Link>
				<table className="table">
					<thead className="thead-dark">
						<tr>
							<td>ID</td>

							<td>Location</td>
							<td>Creation Date</td>
							<td>Owner ID</td>
							<td>Actions</td>
						</tr>
					</thead>
					<tbody>
						{this.sensorList()}
					</tbody>
				</table>
			</div>
			)
	}

}