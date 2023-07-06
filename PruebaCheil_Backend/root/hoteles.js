const router = require("express").Router();
const Hoteles = require("../model/schema");

router.get("/", async(req, res)=> {//obtner los datos de los hoteles
    try {
        const allHoteles = await Hoteles.find();
        res.status(200).json(allHoteles);
    } catch (error) {
        res.json(error);
    }
}); 

router.post("/agregar", async(req, res)=>{
    try {
        const { nombreHotel, destino,estado } = req.body;
        const newHotel = await Hoteles.create({
            nombreHotel, destino,estado
        });
        res.send({data:newHotel});
    } catch (error) {
        res.json(error);
    }
});

router.put("/agregar/:id", async (req, res) => {
    try {
      const updateHotel = await Hoteles.findByIdAndUpdate(req.params.id, { $set: req.body });
      res.status(200).json("Hotel actualizado");
    } catch (error) {
      res.json(error);
    }
  });

  router.delete("/agregar/:id", async (req, res) => {
    try {
      const updateHotel = await Hoteles.findByIdAndRemove(req.params.id);
      res.status(200).json("Hotel eliminado");
    } catch (error) {
      res.json(error);
    }
  });

module.exports = router;
