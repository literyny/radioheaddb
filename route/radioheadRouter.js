const express = require('express');
const router = express.Router();
const radioheadService = require('../service/radioheadService');

router.get('/', async function(req, res, next) {
	try{
		res.json(await radioheadService.getAll());
	}catch (error) {
		console.error('Error while fetching data. ', error.message);
		next(error);
	}
});

router.post('/', async function(req, res, next) {
	try{
		res.json(await radioheadService.save(req.body));
	} catch (err) {
		console.error('Data saving error. ', err.message);
		next(err);
	}
});

module.exports = router;