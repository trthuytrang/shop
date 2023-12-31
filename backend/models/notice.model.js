const mongoose = require('mongoose');

var noticeSchema = new mongoose.Schema({
	noticeContent: String,
	isRead: String,
	noticeTime: Date,
	},
    {
		autoCreate: true,
    	versionKey: false
    }
)

var Notice = mongoose.model('Notice', noticeSchema, 'notice');

module.exports = Notice;