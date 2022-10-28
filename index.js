const express = require('express');
const contact = require('./routes/contact.js');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Listening on port ${port}..`));
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.use('/api/contact', contact)