const express = require('express');

const router = express.Router();

router.get('/users', function (req, res) {
    console.log('inside router')
    res.send('router reposne');
})