'use strict'
const express = require('express');
const app = express();
const path = require('path')
const morgan = require('morgan')
const PORT = process.env.PORT || 3000
if (process.env.NODE_ENV !== 'production') require('../secrets')

// logging middleware
app.use(morgan('dev'))

// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// static middleware
app.use(express.static(path.join(__dirname, '../public')))

app.use('/api', require('./api'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
}) // Send index.html for any other requests

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
})

app.listen(PORT, () => console.log(`listening on port ${PORT}!`))

module.exports = app
