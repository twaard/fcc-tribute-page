const express = require('express');
const app = express()
const PORT = process.env.PORT || 5000;
const path = require('path');

app.use(express.static(__dirname + '/static'))
app.get('/', (req,res) => res.sendFile(path.join(__dirname + '/public/index.html')))
app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))