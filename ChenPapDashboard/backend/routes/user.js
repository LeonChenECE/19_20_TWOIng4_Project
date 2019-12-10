var express = require('express');
var router = express.Router();
let User = require('../models/user.model');

//show all
router.route('/').get((req,res) =>{
	User.find()
		.then(users => res.json(users))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
	const location = req.body.location;
	const personsInHouse = Number(req.body.personsInHouse);
	const houseSize = req.body.houseSize;

	const newUser = new User({
		location,
		personsInHouse,
		houseSize,
	});

	newUser.save()
		.then(() => res.json('User added'))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res) => {
	User.findById(req.params.id)
		.then(users => res.json(users))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req,res) => {
	User.findByIdAndDelete(req.params.id)
		.then(() => res.json('User deleted.'))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req,res) => {
	User.findById(req.params.id)
		.then(users => {
			users.location = req.body.location;
			users.personsInHouse = Number(req.body.personsInHouse);
			users.houseSize = req.body.houseSize;

			users.save()
				.then(() => res.json('User updated'))
				.catch(err => res.status(400).json('Error: ' + err));
		})
		.catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;