const mongoose = require("mongoose");

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/MernTodo';

const configOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect(connectionString, configOptions)
    .then(()=> {console.log("MongoDB Successfully connected")})
    .catch((e) => {console.log(`error connecting to mongoDb: ${e}`)});


//export the models
module.exports = {
    Todo: require("./Todo.js"),
}