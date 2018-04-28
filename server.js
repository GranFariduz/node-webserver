const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

let app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

//didn't call next(), the code won't move another inch from this function
//keep this commented out until you want to enter maintenance mode
// app.use((req, res, next) => {
//     res.render('maintenance.hbs', {
//         main_message: 'Under maintenance, come back later.'
//     });
//     next();
// })

//called after the maintenance.hbs file, be careful for the order.
app.use(express.static(__dirname + '/public')); //works without engine, used to set a directory with pages to display

hbs.registerHelper('getCurrentYear', () => new Date().getFullYear() );

app.get('/', (req, res) => {
    res.render('home.hbs', {
        title: 'Home Page',
        currentYear: new Date().getFullYear(),
        welcomeMessage: 'Hello little bitch!'
    })
})

app.get('/power', (req, res) => {
    res.send('The power is Governing blood');
})

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        title: 'About Page',
        currentYear: new Date().getFullYear()
    });
})

app.listen(port, () => {
    console.log('Server is up and running on port ' + port);
});