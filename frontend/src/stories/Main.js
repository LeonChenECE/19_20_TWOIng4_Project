import React, { Component } from 'react';
import PieDemo from './Pie.js';
import LineDemo from './Line.js'
import './Main.css'


class Main extends Component {


	render(){
		return(
				<div id="mAin">
				<div id="box">
				Tracer Pick Rate
					<LineDemo/>
				</div>
					<PieDemo/>

				</div>
			);
	}
}

export default Main;