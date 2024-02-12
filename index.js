const express= require("express")
// Cài dotevn npm i dotenv
require("dotenv").config()

const route = require("./routes/client/index.route")

const app=express()
const port=process.env.PORT

app.set("views","./views")
app.set("view engine","pug")

route(app)

app.listen(  port, ()=>{
    console.log(`App listening at http://localhost:${port}`);
});