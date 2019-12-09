import React, { Component } from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import './Hero.css'

export default class Hero extends Component {
	render(){
		return(
			<div id="HeroBox">
				<Row>

		    		<Col>
						<img src="https://bnetcmsus-a.akamaihd.net/cms/content_folder_media/T5MJE691PECI1516142180791.png"/>
					</Col>

					<Col>
						<div id ="textbox">

							<h1>
								Tracer
							</h1>

							<h5>
							Offense
							</h5>

						</div>
					</Col>

					<Col>
						<div id="textbox">
						<h5>
							2.63
						</h5>
							<br/>
							ELIM RATIO
						</div>
					</Col>

					<Col>
						<div id="textbox">
							7.7%
							<br/>
							ON FIRE
						</div>
					</Col>

				</Row>
			</div>
			)
	}
}