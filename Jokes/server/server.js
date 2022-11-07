const express = require("express");
const app = express();
const PORT = 8000;
const DB = "jokes"

// --- MIDDLEWARE ---
app.use(express.json(), express.urlencoded({extended:true}));
// ------------------

// app.get("/api/demo", (req, res)=> {
//     res.json({status: "all good 👍"})
// })

// CONNECT to the DB using mongoose
require("./config/mongoose.config")(DB)

// modularize routes
require("./routes/jokes.routes")(app)

// START THE SERVER
app.listen(PORT, () => console.log(`>> server up on ${PORT} <<`))