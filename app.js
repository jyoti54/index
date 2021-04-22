const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

//EXPRESS STUFF
app.use('/static', express.static('static')) //for serving static files
app.use(express.urlencoded())

//PUG SPECIFIC STUFF
app.set('view engine', 'pug')  //set te template engine as pug
app.set('views', path.join(__dirname, 'views'))  //set te views directory

// ENDPOINTS
app.get('/', (req, res) => {
    const params = { }
    res.status(200).render('index.pug',params);
})




app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});




