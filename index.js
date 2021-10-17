import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose'

const app = express()

//Difference
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ extended: true }))
app.use(cors())
//import bodyParser from 'body-parser'
//app.use(bodyParser.json({ limit: "30mb", extended: true }));

const CONNECTION_URL = 'mongodb+srv://javascriptmastery:javascriptmastery123@cluster0.70hzf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;


//the details here prevent warnings in the terminal
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//callback function which is going to run after our application successfully listens
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error));
//set use find and modify to false to prevent terminal warnings
   // mongoose.set('useFindAndModify', false);