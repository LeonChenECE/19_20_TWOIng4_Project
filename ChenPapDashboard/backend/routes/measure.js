var express = require('express');
var router = express.Router();
let Measure = require('../models/measure.model');

//show all
router.route('/').get((req,res) =>{
	Measure.find()
		.then(measures => res.json(measures))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
	const type = req.body.type;
	const creationDate = req.body.creationDate;
	const sensorID = req.body.sensorID;
	const value = Number(req.body.value);

	const newMeasure = new Measure({
		type,
		creationDate,
		sensorID,
		value,
	});

	newMeasure.save()
		.then(() => res.json('Measure added'))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res) => {
	Measure.findById(req.params.id)
		.then(measures => res.json(measures))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req,res) => {
	Measure.findByIdAndDelete(req.params.id)
		.then(() => res.json('Measure deleted.'))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req,res) => {
	Measure.findById(req.params.id)
		.then(measures => {
			measures.type = req.body.type;
			measures.creationDate = req.body.creationDate;
			measures.sensorID = req.body.sensorID;
			measures.value = Number(req.body.value);

			measures.save()
				.then(() => res.json('Measure updated'))
				.catch(err => res.status(400).json('Error: ' + err));
		})
		.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;