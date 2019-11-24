import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PieDemo from './Pie.js';
import LineDemo from './Line.js'
import './Main.css'


class Main extends Component {


	render(){
		return(
				<div id="mAin">

					<Row>

						<Col></Col>

						<Col>

							<Row>
								<Col>
									<div id="box">
										<div id="box-head">
											Pick Rate du héro Tracer
										</div>
										<LineDemo/>
									</div>
								</Col>
								<Col>
								</Col>
								<Col>
									<div id="box">
										<div id="box-head">
											Popularité des Rôles
										</div>
										<PieDemo/>
									</div>
								</Col>
							</Row>

							<Row>
								<Col></Col>
								<Col></Col>
								<Col></Col>
							</Row>
						</Col>

					</Row>

				</div>
			);
	}
}

export default Main;