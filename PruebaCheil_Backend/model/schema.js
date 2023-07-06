const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
    nombreHotel:{type:String},
    destino:{type:String},
    estado:{type:String}
});

module.exports = mongoose.model("Hoteles", hotelSchema);