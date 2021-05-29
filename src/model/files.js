const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fileShema = new Schema({
    fileId: {
        type: Schema.Types.ObjectId,
    },
    userName: {
        type: String,
        required: true
    },
    fileName: {
        type: String,
        required: true
    },
    filePath: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true
    },
    year:{
        type: String,
        required: true
    },
    test: {
        type: String,
        required:true
    },
    type: {
        type: String,
        required: true
    }
})

const Book = mongoose.model('Books', fileShema);
module.exports=Book