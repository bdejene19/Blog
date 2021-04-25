const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser')
const routes = require('./routes/router');
const mongo = require('mongoose')
const app = express();
const DB_CONNECTION = process.env.DB_CONNECTION


app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes); 

const PORT = process.env.PORT || 5000;

mongo.connect('mongodb+srv://Bemnet:arsenal101@blogdatabase.dgpbx.mongodb.net/BlogDatabase?retryWrites=true&w=majority', {useUnifiedTopology: true, useNewUrlParser: true}, console.log('connected to db'));
// mongo.connect('mongodb+srv://Bemnet:arsenal101@blogdb.dgpbx.mongodb.net/BlogDB?retryWrites=true&w=majority', {useUnifiedTopology: true, useNewUrlParser: true}, console.log('connected to DB'));

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));