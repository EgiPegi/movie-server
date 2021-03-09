'use strict';

const fs = require('fs');

exports.getMovie = (req, res, next) => {
    fs.readFile('./src/data/movies.json', (err, data) => {
        if (err) {
            console.log(err)
        }
        let movie = JSON.parse(data);
        console.log(movie.top);
        res.send(movie.top);
    });
    console.log('This is after the read call');
}
exports.compareMovie = (req, res, next) => {
    const i1 = parseInt(req.query.movie1 - 1);
    const i2 = parseInt(req.query.movie2 - 1);

    fs.readFile('./src/data/movies.json', (err, data) => {
        if (err) {
            console.log(err)
        }
        let movie = JSON.parse(data);
        let movie1 = movie.top[i1]
        let movie2 = movie.top[i2]
        // console.log(movie.top);
        res.send({movie1, movie2});
        // res.send(movie2);
    });
    console.log('This is after the read call');
}