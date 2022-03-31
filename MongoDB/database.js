// install mongoose - npm i mongoose
const mongoose = require('mongoose');
const URL = "mongodb://localhost:27017/API";   //API is the name of database

const connectToMongo=()=>{
  mongoose.connect(URL,(err)=>{
      if(err){return console.log("Mongo not connected")}
      console.log("Connected to Mongo Successfully");
  })
}

// const connectToMongo=()=>{
//   mongoose.connect(URL)
//   .then(()=>console.log("Connected to Database Successfully"))
//   .catch((e)=>console.log("Mongo not Connected"))
// }

// const connectToMongo = async()=>{
//     try{
//         await mongoose.connect(URL)
//         console.log("Connected to Mongo Successfully"); 
//     }
//     catch(e){
//         console.log("Mongo Not Connected");
//     }
// }

module.exports = connectToMongo;