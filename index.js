//import library
const express = require('express');
const bodyParser = require('body-parser')

// var
const PORT = 3001;
const app = express();
//body-parser
app.use(bodyParser.json());
//izin browser
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'authorization, content-type');
    next();
})

//routes
const movieRoutes = require('./src/routes/index')
//{root.api}/{ver}/{group}/{endpoint}
app.use('/v1/', movieRoutes);

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

