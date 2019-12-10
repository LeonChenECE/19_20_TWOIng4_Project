import React, { Component } from 'react';
import axios from 'axios';

export default class CreateMeasure extends Component {
	constructor(props) {
		super(props);

		this.onChangeType = this.onChangeType.bind(this);
		this.onChangeDate = this.onChangeDate.bind(this);
		this.onChangeSensorID = this.onChangeSensorID.bind(this);
		this.onChangeValue = this.onChangeValue.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			type: '',
			creationDate: '',
			sensorID: '',
			sensors: [],
			values: 0
		}
	}

	componentDidMount() {
		axios.get('http://localhost:5000/sensor/')
			.then(response => {
				if(response.data.length > 0) {
					this.setState({
						sensors: response.data.map(sensor=> sensor._id),
						sensorID: response.data[0]._id
					})
				}
			})
	}

	onChangeType(e) {
		this.setState({
			type: e.target.value
		});
	}

	onChangeDate(e) {
		this.setState({
			creationDate: e.target.value
		});
	}

	onChangeSensorID(e) {
		this.setState({
			sensorID: e.target.value
		});
	}

	onChangeValue(e) {
		this.setState({
			values: e.target.value
		});
	}

	onSubmit(e) {
		e.preventDefault();

		const measure = {
			type: this.state.type,
			creationDate: this.state.creationDate,
			sensorID: this.state.sensorID,
			value: this.state.values,
		}

		console.log(measure);

		axios.post('http://localhost:5000/measure/add', measure)
			.then(res => console.log(res.data))
			.catch((error) => {
				console.log(error);
			})

		window.location = '/MeasureList';
	}

	render() {
		return(

			//Formulaire
			<div>
				<h3>Create a New Measure</h3>
				<form onSubmit={this.onSubmit}>

					<div className="form-group">
						<label> Sensor ID: </label>
						<select ref="sensorInput"
						required
						className="form-control"
						value={this.onChangeSensorID}>
						{
							this.state.sensors.map(function(sensor) {
								return <option
								key={sensor}
								value={sensor}>
								{sensor}
								</option>;
							})
						}
						</select>
						
					</div>

					<div className="form-group">
						<label> Type (temperature, humidity, airPollution): </label>
						<input type="text"
							required
							className="form-control"
							value={this.state.type}
							onChange={this.onChangeType}
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
						<label> Measurement Value: </label>
						<input type="number"
							required
							className="form-control"
							value={this.state.values}
							onChange={this.onChangeValue}
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