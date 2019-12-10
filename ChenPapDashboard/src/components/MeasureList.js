import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Measure = props => (
	<tr>
		<td>{props.measure._id}</td>
		<td>{props.measure.location}</td>
		<td>{props.measure.CreateationDate}</td>
		<td>{props.measure.value}</td>
		<td>{props.measure.userID}</td>

		<td>
			<Link to={"/EditMeasure/"+props.measure._id}>Edit </Link>
			 | 
			<a href="#" onClick={() => { props.deleteMeasure(props.measure._id) }}> Delete</a>
		</td>
	</tr>

	)

export default class MeasureList extends Component {

	constructor(props) {
		super(props);

		this.deleteMeasure = this.deleteMeasure.bind(this);

		this.state = {measures: []};
	}

	componentDidMount(){
		axios.get('http://localhost:5000/measure/')
			.then(response => {
				this.setState({ measures: response.data})
			})
			.catch((error) => {
				console.log(error);
			})
	}

	deleteMeasure(id) {
		axios.delete('http://localhost:5000/measure/'+id)
		.then(res => console.log(res.data));

		this.setState({
			measures: this.state.measures.filter(el => el._id !== id)
		})
	}

	measureList() {
		return this.state.measures.map(currentmeasure => {
			return <Measure measure={currentmeasure} deleteMeasure={this.deleteMeasure} key={currentmeasure._id}/>;
		})
	}

	render() {
		return(
			<div>
				<h3>List of all the Measures</h3>
				<Link to={"/CreateMeasure"} className="btn btn-primary">Create a New Measure</Link>
				<table className="table">
					<thead className="thead-dark">
						<tr>
							<td>ID</td>

							<td>Location</td>
							<td>Creation Date</td>
							<td>Value</td>
							<td>Owner ID</td>
							<td>Actions</td>
						</tr>
					</thead>
					<tbody>
						{this.measureList()}
					</tbody>
				</table>
			</div>
			)
	}

}