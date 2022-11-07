const mongoose = require('mongoose');
 
const JokesSchema = new mongoose.Schema({
    setUp: {
        type: String, 
        minlength: [10, "Set up must be at least 10 characters long"]
    },
    punchline: {
        type: String,
        minlength: [3, "Punchline must be at least 3 characters long"]
    },
}, {timestamps: true});
 
const Jokes = mongoose.model('Jokes', JokesSchema);
 
module.exports = Jokes;