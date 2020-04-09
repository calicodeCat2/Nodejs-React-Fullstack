const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipientSchema = new Schema ({
    responded: { type: Boolean, default: false}
});

module.exports = recipientSchema;