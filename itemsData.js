const { v4: uuidv4} = require('uuid');

let items = [
    {id: uuidv4(), name: 'Items One', description: 'First items description'},

    {id: uuidv4(), name: 'Items Two', description: 'Second item dw3scription'},
],

module.exports = items;