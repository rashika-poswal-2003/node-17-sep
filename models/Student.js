const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    rollno:{type: Number},
    Name:{type: String},
    fatherName:{type: String},
    adharCard:{type: String},
    mobileno:{type: String}
})
module.exports = mongoose.model('Student', StudentSchema)