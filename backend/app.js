const express = require("express")
const connectToDB = require("./config/connectToDB")
const user = require("./models/userModel");
const cors = require("cors")
const app = express()
const patientController = require('./controllers/patientController')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


connectToDB();

app.get("/",cors(),(req,res)=>{

})


app.post("/",async(req,res)=>{

    const{email,password,role}=req.body

    try{
        const check_email = await user.findOne({email:email})
        const check_role = await user.findOne({role:role})

        if(check_email && check_role && role == "encoder"){
            res.json("encoder")
        }
        else if (check_email && check_role && role == "publisher"){
            res.json("publisher")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.post("/signup",async(req,res)=>{
    const{email,password,first_name,last_name,role}=req.body

    const data={
        email:email,
        password:password,
        first_name:first_name,
        last_name:last_name,
        role:role
    }

    try{
        const check=await user.findOne({email:email})
        const check_role = await user.findOne({role:role})

        if(check && check_role && role == "encoder"){
            res.json("encoder")
        }
        else if(check && check_role && role == "publisher"){
            res.json("publisher")
        }
        else{
            res.json("notexist")
            await user.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})


//getting all data
app.get('/patient', patientController.fetchAllPatients)

//getting one specific data
app.get('/patient/:id', patientController.fetchPatientById)

//creating a data record
app.post('/patient', patientController.createPatient)

//update a specific data record
app.put("/patient/:id", patientController.updatePatient)

//delete a specific data record
app.delete('/patient/:id', patientController.deletePatient)


app.listen(8000,()=>{
    console.log("port connected");
})
