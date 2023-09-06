const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();


// Define path for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsDirectoryPath = path.join(__dirname, '../templates/views');
const partialsDirectoryPath=path.join(__dirname,'../templates/partials');


//setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsDirectoryPath);
app.set('partial',partialsDirectoryPath);

//setup static directory to serve
app.use(express.static(publicDirectoryPath));



// Register the 'header' partial



app.get('', (req, res) => {
    res.render('index', {
        title: 'Atif',
        welcomeMessage: 'this is my page'

    });
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'hello i am helper'

    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        location: "Pakistan",
        forcast: 'its sunny'
    });

})

app.listen(3000, () => {
    console.log("Server is up on 3000 port");
})