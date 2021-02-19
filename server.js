const express = require('express');
const app = express();
const path = require('path');
const faker = require('faker');


app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, 'index.html')));

const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`listening on port ${port}`));

//console.log(faker.helpers.userCard().name);
console.log(faker.random.number(2));
