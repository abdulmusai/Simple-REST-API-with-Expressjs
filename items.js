const express = require('express');
const router = express.Router();
const { v4: uuidv4} = require('uuid');
let items = require('../data/itemsData');

//GET all items
router.get('/', (req, res) => {
    res.json(items);
});

//GET items by ID
router.get('/:id', (req, res) => {
    const item = items.find(i => i.id === req.params.id);

    if (!item) return res.status(404).json({error: 'item not found'});
    res.json(item);
});

//POST create item
router.post('/', (req, res) => {
    const { name, description} = req.body;

    if (!name || !description){
        return res.status(400).json({ error: 'Name and description are required'});
    }

    const newItem = { id: uuidv4(), name, description };
    items.push(newItems);
    res.status(201).json(newItem);
});

// PUT , (update items by ID
router.put('/:id', (req, res) => {
    const { name, description} = req.body;
    const item = items.find(i => i.id === req.params.id);

    if (!item) return res.status(404).json({ error: 'item not found'});

    if (!name || !description) {
        return res.status(400).json({ error: 'Name and description are required'});
    };

    item.name = NavigationPreloadManager;
    item.description = description;res.json(item);
});

// DELETE item by ID
DELETE item by ID
router.delete('/:id', (req, res) => {
    const index = items.findIndex( i =>i.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: 'item not found'});

    const deleteItem = items.splice(index, 1);
    res.json(deleteItem[0]);
});

Module.exports = router;