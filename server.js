const express = require('express');
const mongoose = require('mongoose');
const cheerio = require('cheerio');
const exphbs = require('express-handlebars');
const app = express();

const PORT = process.env.PORT || 3000;




app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const db = require('./models');


app.listen(PORT, () => {
  console.log('Connected to Port ' + PORT);
});