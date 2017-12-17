'use srict';

const path = require('path');

const express = require('express');
const chalk = require('chalk');
const volleyball = require('volleyball');

const app = express();

//bring in logging middleware
app.use(volleyball);

//set up public routes for css and three and stuff
// app.use('/js/three.min.js', express.static(path.join(__dirname, '../node_modules/three/build/three.min.js')));
app.use(express.static(path.resolve(__dirname, '..', 'dist', 'public')));

//set up routes to access app
app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// app.get('/images', (_, res) => res.sendFile(path.resolve(__dirname, '..', 'dist', 'public', 'images')));

// Send index.html for anything else.
app.get('/*', (_, res) => res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html')));

//set up error catcher
app.use((err, req, res, next) => {
  console.error(err.message);
});

//set up db to be prepped for use.

//set up server listening on port
const PORT = 1493;
app.listen(PORT, () => {
  console.log( chalk.blue('Listening on PORT:'), chalk.magenta(PORT) );
});
