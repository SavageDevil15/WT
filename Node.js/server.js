'use strict';

const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    res.send('Sample');
});

app.listen(3000, () => {
    console.log('Server Started On Port 3000');
});

