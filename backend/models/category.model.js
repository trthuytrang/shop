const mongoose = require('mongoose');

var cateSchema = new mongoose.Schema({
	cateName: String,
	},
    {
		autoCreate: true,
    	versionKey: false
    }
)

var Category = mongoose.model('Category', cateSchema, 'category');

module.exports = Category;