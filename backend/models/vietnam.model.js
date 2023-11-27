const mongoose = require('mongoose');

var vietnamSchema = new mongoose.Schema({
	tinh: Array,
	huyen: Array,
	},
    {
		autoCreate: true,
    	versionKey: false
    }
)

var Vietnam = mongoose.model('Vietnam', vietnamSchema, 'vietnam');

module.exports = Vietnam;