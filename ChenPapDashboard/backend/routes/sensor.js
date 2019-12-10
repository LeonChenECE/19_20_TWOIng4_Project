var express = require('express');
var router = express.Router();
let Sensor = require('../models/sensor.model');

//show all
router.route('/').get((req,res) =>{
	Sensor.find()
		.then(sensors => res.json(sensors))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
	const location = req.body.location;
	const creationDate = req.body.creationDate;
	const userID = req.body.userID;

	const newSensor = new Sensor({
		location,
		creationDate,
		userID,
	});

	newSensor.save()
		.then(() => res.json('Sensor added'))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res) => {
	Sensor.findById(req.params.id)
		.then(sensors => res.json(sensors))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req,res) => {
	Sensor.findByIdAndDelete(req.params.id)
		.then(() => res.json('Sensor deleted.'))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req,res) => {
	Sensor.findById(req.params.id)
		.then(sensors => {
			sensors.location = req.body.location;
			sensors.creationDate = req.body.creationDate;
			sensors.userID = req.body.userID;

			sensors.save()
				.then(() => res.json('Sensor updated'))
				.catch(err => res.status(400).json('Error: ' + err));
		})
		.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;