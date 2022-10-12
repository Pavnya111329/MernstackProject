// To connect with your mongoDB database
const mongoose = require("mongoose");
 connectDatabase = ()=> 
    mongoose.connect(process.env.DB_URL,  {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }).then(
        (data) => { console.log(`MonoDb connected with server ${data.connection.host}`)},
        err => { console.log(err) }
      );   

 
module.exports = connectDatabase

