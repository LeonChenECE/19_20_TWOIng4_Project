import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PieDemo from './Pie.js';
import LineDemo from './Line.js'
import BarDemo from './Bar.js'
import './Main.css'


class Main extends Component {


	render(){
		return(
				<div id="mAin">
					<div id="container">
									<div id="box">
										<div id="box-head">
											Pick Rate du héro Tracer
										</div>
										<LineDemo/>
									</div>
									<div id="box">
										<div id="box-head">
											Pick Rate du héro Tracer
										</div>
										<BarDemo/>
									</div>
									<div id="box">
										<div id="box-head">
											Pick Rate du héro Tracer
										</div>
										<BarDemo/>
									</div>
									<div id="box">
										<div id="box-head">
											Pick Rate du héro Tracer
										</div>
										<PieDemo/>
									</div>
					</div>

				</div>
			);
	}
}

export default Main;