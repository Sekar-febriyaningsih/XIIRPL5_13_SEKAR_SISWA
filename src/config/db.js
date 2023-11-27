
const mongoose = require('mongoose');

async function mongoDB () {
    await mongoose.connect('mongodb://127.0.0.1:27017/kk4uas');
}

module.exports = { mongoDB } 