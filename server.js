const express = require('express');
const exphds = require('express-handlebars');
const path = require('path');

const app = express();

/* Load .env  */
require('dotenv').config();


/* HANDLEBARS MIDDLEWARE */
app.engine('.hbs', exphds({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');


/* Load Bootstrap */
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap


/* STATIC FOLDER */
app.use(express.static(path.join(__dirname, 'public')));



// Load Routes
let web = require('./routes/web');

// Use Routes
app.use('/', web);



const port = process.env.PORT;
app.listen(port, (req, res) => {
    console.log(`Server running at port: ${port}`)
});