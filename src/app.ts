import express from "express";
import bodyParser from "body-parser";
import {NewUserRouter} from './routes/newUser';
import {GetUsersRouter} from './routes/getUser';
import {AddExerciseRouter} from './routes/addExercise';
import { LogRouter } from './routes/logUser'

require('dotenv').config()

var cors = require("cors");
const app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set('trust proxy',true); 
app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static(__dirname + '/public'));
app.use(NewUserRouter);
app.use(GetUsersRouter);
app.use(AddExerciseRouter);
app.use(LogRouter);






app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});



export { app };