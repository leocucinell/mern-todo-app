const db = require('../models');

//controller functions

//GET ROUTE: /todos/ -> a list of all todos
const index = (req, res) => {
    db.Todo.find({}, (err, foundTodos) => {
        if(err){
            console.log(`error finding todos: ${err}`);

            return res.send(`Error inside todo#index route: ${err}`);
        }
        res.status(200).json({
            todos: foundTodos,
        });
    });
}

//POST Route: /todos/ -> creates a new todo item
const create = (req, res) => {
    db.Todo.create(req.body, (err, createdTodo) => {
        if(err){
            console.log(`Error creating todo item: ${err}`);

            return res.send(`Error creating todo item: ${err}`)
        }

        res.status(201).json({
            createdTodo,
        });
    });
}

//PUT ROUTE: /todos/:id -> updates a todo item based on the id
const update = (req, res) => {
    
}

//DELETE ROUTE: /todos/:id -> deletes a todo item based on the id

//export the controller routes
module.exports = {
    index,
    create,
}