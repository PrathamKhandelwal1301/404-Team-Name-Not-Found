const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { stringify } = require('querystring');
// const { appendFile } = require('fs');

const app = express();
const port = 6969;

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'));

//////////////////////////////////////////// .  MONGODB CONNECTION    ///////////////////////
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://Angad:singh121@ac-tkwxqzt-shard-00-00.cge8liy.mongodb.net:27017,ac-tkwxqzt-shard-00-01.cge8liy.mongodb.net:27017,ac-tkwxqzt-shard-00-02.cge8liy.mongodb.net:27017/?ssl=true&replicaSet=atlas-4r9oy4-shard-0&authSource=admin&retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
.then(() => {console.log("connection successful")})
.catch((err) => {console.log(err)})


//////////////////////////////////////////// .  SCHEMAS START    /////////////////////////////
const Schema = mongoose.Schema
const driverSchema = new Schema({
    diLocation: String,
    dfLocation: String,
    dNumber: Number,
    occupancy: Number
});

const studentSchema = new Schema ({
    siLocation: String,
    sfLocation: String,
    pOccupancy: Number
});

const stuListSchema = new Schema ({
    name: String,
    username: String,
    password: String
})
//////////////////////////////////////////// .   SCHEMAS END     /////////////////////////////////

//////////////////////////////////////////// .   MODEL FORMATIONS   ///////////////////////////////
const driver = mongoose.model('driver', driverSchema);
const student = mongoose.model('student', studentSchema);
const stuList = mongoose.model('stuList', stuListSchema);
/////////////////////////////////////////// .   MODEL FORMATIONS DONE    ////////////////////////////////
app.get("/", (req, res) => {
    res.render(__dirname + "/public/index.ejs");
})

app.listen(port, () => {
    console.log("Hello world");
})
