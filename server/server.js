// import all dependencies
const express = require("express")
const app = express()
const cors = require('cors') // This is new
// config mongoose
require("./configs/mongoose.configs")

// express config for post
app.use(express.json(), express.urlencoded({ extended: true }));

app.use(cors()) // This is new
// get the routes
// option1 
// const Routes = require("./routes/pet.routes")
// Routes(app)
// option 2
require("./routes/product.route")(app)

// listen to the port
app.listen(8000, () => console.log("The server is all fired up on port 8000"));