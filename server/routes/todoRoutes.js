const router = require("express").Router();
const todoCtrl = require("../controllers");

//routes
router.get('/', todoCtrl.todos.index);
router.post('/', todoCtrl.todos.create);

//export
module.exports = router;