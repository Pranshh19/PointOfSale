const express = require('express')
const { get } = require('mongoose')
const { getItemController , addItemController, editItemController,deleteItemController } = require('../controllers/itemController')

// import {getItemCOntroller} from './../controllers/itemController'

const router = express.Router()


//routes

// ..Method - get

router.get('/get-item', getItemController)

//Method Post
router.post('/add-item', addItemController)

//Method PUT

router.put("/edit-item", editItemController);

//method - DELETE
router.post("/delete-item", deleteItemController);

module.exports = router;