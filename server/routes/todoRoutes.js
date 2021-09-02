const router = require("express").Router();
const todoCtrl = require("../controllers");

//routes
router.get('/', todoCtrl.todos.index);
router.post('/', todoCtrl.todos.create);
router.put('/:id', todoCtrl.todos.update);
router.delete('/:id', todoCtrl.todos.destroy)

//export
module.exports = router;