
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotEnv = require('dotenv');
const multer = require('multer');
const path = require('path');
const Book = require('./model/files')
//importing Routes
//const authRoute = require('./Routes/Auth');
//const projectRoute = require('./Routes/Project')
//constants
console.log(__dirname)
require('./db/mongoose') 
const PORT = process.env.PORT || 8000;
const app = express();
const Storage = multer.diskStorage({
    destination:'./files',
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
})
const fileFilter = (req, file, cb) => {
    cb(null, true);
  
};
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

dotEnv.config();
//middlewares
app.use(bodyParser.json());
const upload = multer({
    storage: Storage,
    fileFilter: fileFilter
})
app.get('/books/:year/:type/:subject',async (req, res) => {
    const year = req.params.year
    const subject = req.params.subject
    const type = req.params.type
    console.log(year+" "+type+' '+subject)
    await Book.find({
            subject: subject,
            year: year,
            type : type 
         }).then(result => {
             console.log(result)
             res.status(201).json({
                 message: "User registered successfully!",
                 books:result
             })
         }).catch(err => {
             console.log("khyati"+" ff"),
                 res.status(500).json({
                     error: err
                 });
         })
})
app.post('/files', upload.single('file'), (req, res, next) => {
     console.log(req.file.path+" "+req.body.year)
    const book = new Book({
        fileId: new mongoose.Types.ObjectId(),
        userName: req.body.uploader_name,
        fileName: req.body.file_name,
        filePath: req.file.path,
        subject: req.body.subject,
        year: req.body.year,
        type: req.body.type,
        test:req.body.test
    });
    book.save().then(result => {
        console.log(result)
        res.status(201).json({
            message: "User registered successfully!",
          
        })
    }).catch(err => {
        console.log("khyati"),
            res.status(500).json({
                error: err
            });
    })
})
app.get('/download/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        res.sendFile(path.join(__dirname, '..', book.filePath));
    } catch (error) {
        res.status(400).send('Error while downloading file. Try again later.');
    }
});


//app.use('/projects', projectRoute)
//app.use('/auth', authRoute)

app.listen(PORT, () => {
    console.log(`SERVER STARTED @ HTTP://127.0.0.1:${PORT}/`);
});