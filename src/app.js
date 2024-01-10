const express = require('express');
const hbs = require('hbs');
const path = require('path');
require("./db/conn");
const Tut = require("./models/details");
const Tool = require("./models/tools");
const routes = require('./routes/tool');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000


app.get("/", async (req, res) => {
  try {
    const tool = await Tool.find();
    console.log(tool);
    res.render("index", {
       tool: tool
    });
  } catch (error) {
    console.error("Error retrieving tool data:", error);
    res.status(500).send("Internal Server Error");
  }
});


const staticpath = path.join(__dirname, "../public");
const templatepath = path.join(__dirname, "../templates/views");
const partialpath = path.join(__dirname, "../templates/partials");

app.use(express.static(staticpath))
app.set("view engine", "hbs")
app.set("views", templatepath)
hbs.registerPartials(partialpath);

app.get("/", (req, res)=>{
    res.render("index");
})

app.get("/contact", (req, res)=>{
  res.render("contact");
})

app.get("/about-us", (req, res)=>{
  res.render("aboutus");
})

app.get("/privacy-policy", (req, res)=>{
  res.render("privacypolicy");
})

app.use("/tools", routes)

app.listen(port, () =>{
  console.log(`Listening on port ${port}`)
});

