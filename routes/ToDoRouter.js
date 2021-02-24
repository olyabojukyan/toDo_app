const express = require('express');
const router = express.Router();
const { getToDos}=require("../controllers/ToDoController.js")

/* GET home page. */
router.get('/', getToDos);

module.exports = router;