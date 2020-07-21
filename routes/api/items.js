const express = require('express')

const router = express.Router()

// Item Model
const Item = require('../../models/Item')
//  @route GET api/items
//  @desc Get All Items 
//  @access Public
router.get('/', async (req, res) => {
    try {
        const items = await Item.find();
        if (!items) throw Error('No items');
  
        res.status(200).json(items);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
  });

router.post('/', (req, resp) => {
    const newItem = new Item({
        name: req.body.name
    })
    newItem.save().then(item => resp.json(item))
})

module.exports = router;