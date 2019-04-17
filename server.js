const express = require('express');
const app = express();
const ehb = require('express-handlebars');
const axios = require('axios');

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI);
