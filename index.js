const express= require("express")
const mongoose=require("mongoose")
var methodOverride = require("method-override")
// Cài dotevn npm i dotenv
require("dotenv").config()

const route = require("./routes/client/index.route")
const routeAdmin = require("./routes/admin/index.route")
const systemConfig=require("./config/system")
const database=require("./config/database")


const app=express()
const port=process.env.PORT

app.use(methodOverride("_method"))

app.set("views","./views")
app.set("view engine","pug")

database.connect()

// Route
route(app)
routeAdmin(app)

// App locals variables
app.locals.prefixAdmin = systemConfig.prefixAdmin

// Nhúng file tĩnh
app.use(express.static("public"));

app.listen(  port, ()=>{
    console.log(`App listening at http://localhost:${port}`);
});