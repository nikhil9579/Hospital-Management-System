const express = require("express");
const PatientData = require("../models/patients");
const router = new express.Router();

router.post("/api/patient", async (req, res) => {
  try {
    const patient = new PatientData(req.body);
    const sevedPatient = await patient.save();
    console.log(sevedPatient);
    res.status(201).send(sevedPatient);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/api/patient", async (req, res) => {
  try {
    const patient = await PatientData.find(req.query);

    console.log(patient);
    res.status(201).send(patient);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.patch("/api/patient", async (req, res) => {
  try {
    const _id = await req.query.id;

    const updatedPatient = await PatientData.findByIdAndUpdate(_id, req.body, {
      new: true,
    });

    console.log(updatedPatient);
    res.status(201).send(updatedPatient);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.delete("/api/patient", async (req, res) => {
  try {
    const _id = await req.query.id;
    const deletedPatient = await PatientData.findByIdAndDelete(_id);
    console.log(deletedPatient);
    res.status(201).send(deletedPatient);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

module.exports = router;
