const express = require('express')
const router = express.Router()

// Item Model
const Item = require('../../models/Item')

//  @route GET api/items
//  @desc Get All Items 
//  @access Public
router.get('/', (req, resp) => {
    Item.find()
    .sort({date: -1})
    .then(items => resp.json(items))
})

module.exports = router;