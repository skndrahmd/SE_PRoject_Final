const mongoose = require('mongoose');


const patientSchema = new mongoose.Schema({
    "first_name": String,
    "last_name": String,
    "dob": String,  // Stores date of birth
    "gender": String,
    "address": String,
    "phone_number": String,
    "insurance": String,
    "assigned_doctor": String,
    "appointment_date": String,
    "appointment_type": String,
    "diagnosis_code": String,
    "diagnosis_date": String,
    "medication_name": String,
    "dosage": String,
    "start_date": String,
    "end_date": String,
   });

const Patient = mongoose.model('Patient', patientSchema);


module.exports = Patient;