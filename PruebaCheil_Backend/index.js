const mongoose = require("mongoose");
const express = require('express');
const app = express();
const PORT = 3030;
const routes = require("./root/hoteles");
const cors = require("cors");

app.use(cors());

app.listen(PORT, ()=>{
    console.log("El puerto es:"+ PORT);
});

app.use(express.json());

app.use("/", routes);


mongoose.connect("mongodb+srv://bivianaorjuela:6Q5FXvR4U4cHccgw@hoteles.2kp1cz2.mongodb.net/").then(() => console.log("Connected Successfully")).catch((err) => console.log(err));