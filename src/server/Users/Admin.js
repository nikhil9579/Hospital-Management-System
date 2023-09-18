const express = require("express");

const router = new express.Router();

router.get("/admin/dashboard", (req, res) => {
  res.render("admin-dashboard", {
    user: "admin",
    url: "/admin-dashboard/create",
    title: "Recent Activity",
    getDataApi: "http://localhost:8000/api/doctor",
  });
});

router.get("/admin/doctor", (req, res) => {
  res.render("doctor-dashboard", {
    user: "admin",
    url: "/doctor-dashboard/create",
    title: "Docotrs List",
    getDataApi: "http://localhost:8000/api/doctor",
  });
});

router.get("/admin/receptionist", (req, res) => {
  res.render("receptionist-dashboard", {
    user: "admin",
    url: "/receptionist-dashboard/create",
    title: "Receptionist List",
  });
});

router.get("/admin/patient", (req, res) => {
  res.render("patient-dashboard", {
    user: "admin",
    url: "/patient-dashboard/create",
    title: "Patients List",
  });
});
router.get("/admin/apoinments", (req, res) => {
  res.render("apoinments", {
    user: "admin",
    url: "/apoinments/create",
    title: "Appoinments List",
  });
});

module.exports = router;
