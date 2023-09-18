//requiring necessary modules
const express = require("express");
const path = require("path");
const hbs = require("hbs");
const fs = require("fs");
const url = require("url");

//connection to database
require("../db/connection");

//express setup
const app = express();
const port = process.env.PORT || 8000;

//requiring  costum modules
const patientRoutes = require("../routers/patientRoutes");
const doctorRoutes = require("../routers/DoctorRoutes");
const receptionistRoutes = require("../routers/receptionistRutes");

//requiring USer Routes
const Admin = require("./Users/Admin");

//sign-up
const signupRoutes = require("../routers/sign-up.js");


//necessary directories path
const viewPath = path.join(__dirname, "../../templates/views");
const partialsPath = path.join(__dirname, "../../templates/partials");
//const templatePath = path.join(__dirname, "../../templates");
const publicPath = path.join(__dirname, "../../public");

//view engine setup
app.set("view engine", "hbs");
//setting up costum views directories
app.set("views", viewPath);
//setting up partials
hbs.registerPartials(partialsPath);

//setting up static file submit using public directories
app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const lbs = hbs.create({
  helpers: {
    json: function (context) {
      return JSON.stringify(context);
    },
  },
});


// user setup
app.use(Admin);

//sign-up
app.use(signupRoutes)

//router setup
app.use(patientRoutes);
app.use(doctorRoutes);
app.use(receptionistRoutes);


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/html/index.html"));
});

app.get("*/create", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/html/createDoctor.html"));
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/html/404.html"));
});





//server
app.listen(port, () =>
  console.log(`server is online at http://localhost:${port}/`)
);
