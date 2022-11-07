const Jokes = require("../models/jokes.model")

// console.log(Cartoon)

// FULL CRUD

// READ ALL
module.exports.findAllJokes = (req, res) => {
    Jokes.find()
        .then( (allJokes) => {
            res.json(allJokes)
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// FIND ONE
module.exports.findOneJoke = (req, res) => {
    Jokes.findOne({ _id: req.params.id })
        .then(oneJoke => res.json(oneJoke))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// //FIND RANDOM JOKE
module.exports.findRandomJoke = (req, res) => {
    Jokes.find()   
        .then( (randomJoke) => {

            res.json(randomJoke)
        })
        .catch(err => res.json({message: "Something went wrong", error: err}));
}

// CREATE 
module.exports.createNewJoke = (req, res) => {
    Jokes.create(req.body)
        .then(newlyCreatedJoke => res.json(newlyCreatedJoke))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
// UPDATE 
module.exports.updateJoke = (req, res) => {
    //new true will return the new updated object, runValidators must be set to true because mongoose does not run validation by default
    Jokes.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedJoke => res.json(updatedJoke))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
// DELETE
module.exports.deleteJoke = (req, res) => {
    Jokes.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}