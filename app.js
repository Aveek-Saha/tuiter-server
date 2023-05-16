import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
 || 'mongodb+srv://aveek:aveekrocks123@cluster0.gbycnql.mongodb.net/?retryWrites=true&w=majority'
await mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(cors());
app.use(express.json());

HelloController(app);
UserController(app);
TuitsController(app);

app.listen(process.env.PORT || 4000);
