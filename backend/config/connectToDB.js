const mongoose=require("mongoose")


const connectToDB = () => {

    mongoose.connect("mongodb://localhost:27017/se_proj_final")
    .then(()=>{
        console.log("mongodb connected");
    })
    .catch(()=>{
        console.log('failed');
    })
    

}


module.exports = connectToDB;
