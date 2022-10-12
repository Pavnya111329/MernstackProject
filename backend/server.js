const app = require("./app")
const dotenv = require("dotenv")
const connectDatabase = require("./configration/database")

dotenv.config({path:"backend/configration/config.env"})

connectDatabase();

const port = 8000



app.listen(process.env.PORT||port , ()=>{
    console.log(`server is listing in http://localhost:${process.env.PORT || port}`)
})