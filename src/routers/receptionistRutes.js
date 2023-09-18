const express = require("express");
const ReceptionistData = require("../models/Receptionist");
const router = new express.Router();

router.post("/api/receptionist", async (req, res) => {
  try {
    const receptionist = new ReceptionistData(req.body);
    const sevedReceptionist = await receptionist.save();
    console.log(sevedReceptionist);
    res.status(201).send(sevedReceptionist);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/api/receptionist", async (req, res) => {
  try {
    const receptionist = await ReceptionistData.find(req.query);

    console.log(receptionist);
    res.status(201).send(receptionist);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.patch("/api/receptionist", async (req, res) => {
  try {
    const _id = await req.query.id;

    const updatedReceptionist = await ReceptionistData.findByIdAndUpdate(
      _id,
      req.body,
      {
        new: true,
      }
    );

    console.log(updatedReceptionist);
    res.status(201).send(updatedReceptionist);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.delete("/api/receptionist", async (req, res) => {
  try {
    const _id = await req.query.id;
    const deletedReceptionist = await ReceptionistData.findByIdAndDelete(_id);
    console.log(deletedReceptionist);
    res.status(201).send(deletedReceptionist);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

module.exports = router;
