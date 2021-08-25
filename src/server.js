const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes');



mongoose.conect('mongodb+srv://vivianebatista92:24julho56@starttech.glqz0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useCreateIndex: true
});

