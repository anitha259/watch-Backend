const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const router = require('./Router/index');

const app = express();

const port = 2598;
const hostname = 'localhost';

const locID = 'mongodb://127.0.0.1:27017/watch_db';
const serverDB = 'mongodb+srv://watch_db:anitha2591998@cluster0.oijcg.mongodb.net/watch?retryWrites=true&w=majority';


// const localDB = 'mongodb://127.0.0.1:27017/zomato_27';
// const serverDB = 'mongodb+srv://z_db_27:GWSqi0X6EviTzxM0@cluster0.zcikl.mongodb.net/TestDB?retryWrites=true&w=majority';

app.use(cors());
app.use(express.json());
app.use('/', router);

mongoose.connect(serverDB,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => {
        app.listen(port, hostname, () => {
            console.log(`Server is running at ${hostname}:${port}`);
        })
    })
    .catch(err => console.log(err));

