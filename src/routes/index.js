const express = require('express');
// const { body } = require('express-validator');
const movieController = require('../controllers/index');

const router = express.Router();

//[GET]://localhost:3001/v1/movie
router.get('/movie', movieController.getMovie);  

//[GET]://localhost:3001/v1/compare?movie1={id1}&movie2={id2}
router.get('/compare', movieController.compareMovie);

module.exports = router;