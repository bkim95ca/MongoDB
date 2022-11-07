const JokesController = require('../controllers/jokes.controller');
 
module.exports = app => {
    //GET ALL JOKES
    app.get('/api/jokes', JokesController.findAllJokes);
    //GET ONE JOKE WITH MATCHING ID
    app.get('/api/jokes/:id', JokesController.findOneJoke);
    //RETURNS A RANDOM JOKE
    app.get('/api/jokes/random', JokesController.findRandomJoke);
    //CREATES A JOKE
    app.post('/api/jokes/new', JokesController.createNewJoke);
    //UPDATES THE JOKE WITH MATCHING ID
    app.put('/api/jokes/update/:id', JokesController.updateJoke);
    //DELETES THE JOKE WITH MATCHING ID
    app.delete('/api/jokes/delete/:id', JokesController.deleteJoke);
}