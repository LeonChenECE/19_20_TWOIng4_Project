import React, { Component } from 'react';
import axios from 'axios';

export default class EditUser extends Component {
	constructor(props) {
		super(props);

		this.onChangeLocation = this.onChangeLocation.bind(this);
		this.onChangeHouseSize = this.onChangeHouseSize.bind(this);
		this.onChangePersonsInHouse = this.onChangePersonsInHouse.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			location: '',
			personsInHouse: 0,
			houseSize: '',
		}
	}

	componentDidMount() {
		console.log(this.props.match.params.id);
		axios.get('http://localhost:5000/user/'+this.props.match.params.id)
			.then(response => {
				this.setState({
					location: response.data.location,
					personsInHouse: response.data.personsInHouse,
					houseSize: response.data.houseSize
				})
			})
			.catch(function (error) {
        console.log(error);
      })
	}

	onChangeLocation(e) {
		this.setState({
			location: e.target.value
		});
	}

	onChangePersonsInHouse(e) {
		this.setState({
			personsInHouse: e.target.value
		});
	}

	onChangeHouseSize(e) {
		this.setState({
			houseSize: e.target.value
		});
	}

	onSubmit(e) {
		e.preventDefault();

		const user = {
			location: this.state.location,
			personsInHouse: this.state.personsInHouse,
			houseSize: this.state.houseSize,
		}

		console.log(user);

		axios.post('http://localhost:5000/user/update/'+this.props.match.params.id, user)
			.then(res => console.log(res.data))
			.catch((error) => {
				console.log(error);
			})

		window.location = '/UserList';
	}

	render() {
		return(

			//Formulaire
			<div>
				<h3>Edit a User</h3>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label> Location: </label>
						<input type="text"
							required
							className="form-control"
							value={this.state.location}
							onChange={this.onChangeLocation}
						/>
					</div>
					<div className="form-group">
						<label> Person(s) living in the House: </label>
						<input type="text"
							required
							className="form-control"
							value={this.state.personsInHouse}
							onChange={this.onChangePersonsInHouse}
						/>
					</div>
					<div className="form-group">
						<label> House Size: </label>
						<input type="text"
							required
							className="form-control"
							value={this.state.houseSize}
							onChange={this.onChangeHouseSize}
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