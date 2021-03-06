const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;
var multer = require('multer');

// TODO: ta funkcja nie jest do konca dobra nie mozna jej wpiac do routera
const uploadComponent = require('./component/uploadComponent')
// import * as up from "./component/uploadComponent";

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// UPLOAD FILE
var storage = multer.diskStorage({
      destination: function (req, file, cb) {
      cb(null, 'public')
    },
    filename: function (req, file, cb) {
      // cb(null, Date.now() + '-' +file.originalname )
      cb(null, Date.now() + '-' +file.originalname )
    }
});

var upload = multer({ storage: storage }).single('file')

app.post('/upload', (req, res) => {
  // console.log(req,res)
  upload(req, res, function (err) {
         if (err instanceof multer.MulterError) {
             return res.status(500).json(err)
         } else if (err) {
             return res.status(500).json(err)
         }
      return res.status(200).send(req.file)
    });
  // res.json({ answer: 42 });
});

app.use('/static', express.static('public'))

// app.get('/bright', uploadComponent);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
