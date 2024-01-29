const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const controller = require('./controller')

app.get("/api/compliment", controller.getCompliment);
app.get("/api/fortune", controller.getFortune);
app.get("/api/babyname/:gender", controller.getBabyName);
app.get("/api/currentdate", controller.getCurrentDate);
app.get("/api/currenttime", controller.getCurrentTime);

app.listen(4000, () => console.log("Server running on 4000"));
