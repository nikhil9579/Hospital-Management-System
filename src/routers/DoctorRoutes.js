const express = require("express");
const DoctorData = require("../models/doctor");
const router = new express.Router();

//*<=======================Doctor APIs =====================>

router.post("/api/doctor", async (req, res) => {
  try {
    console.log(req.body);
    const doctor = new DoctorData(req.body);
    const sevedDoctor = await doctor.save();
    console.log(sevedDoctor);
    res.status(201).send();
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.get("/api/doctor", async (req, res) => {
  try {
    const doctor = await DoctorData.find(req.query);

    res.status(201).send(doctor);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.patch("/api/doctor", async (req, res) => {
  try {
    const _id = await req.query.id;

    const updatedDoctor = await DoctorData.findByIdAndUpdate(_id, req.body, {
      new: true,
    });

    console.log(updatedDoctor);
    res.status(201).send(updatedDoctor);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.delete("/api/doctor", async (req, res) => {
  try {
    const _id = await req.query.id;
    const deletedDoctor = await DoctorData.findByIdAndDelete(_id);
    console.log(deletedDoctor);
    res.status(201).send(deletedDoctor);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

module.exports = router;
