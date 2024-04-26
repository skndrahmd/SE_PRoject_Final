const Patient = require("../models/patientModel.js");

//fetch all notes
const fetchAllPatients = async (req, res) => {
  //Find the notes
  const patients = await Patient.find();

  //respond with the notes
  res.json({ patients: patients });
};

//fetch a specific note
const fetchPatientById = async (req, res) => {
  //get id from url
  const patient_id = req.params.id;
  //find note using that id
  const patient = await Patient.findById(patient_id);
  //respond with the note
  res.json({ patient: patient });
};

//create a note
const createPatient = async (req, res) => {
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const dob = req.body.dob; // ISODate
  const gender = req.body.gender;
  const address = req.body.address;
  const phone_number = req.body.phone_number;
  const insurance = req.body.insurance;
  const assigned_doctor = req.body.assigned_doctor;
  const appointment_date = req.body.appointment_date; // ISODate
  const appointment_type = req.body.appointment_type;
  const diagnosis_code = req.body.diagnosis_code;
  const diagnosis_date = req.body.diagnosis_date; // ISODate
  const medication_name = req.body.medication_name;
  const dosage = req.body.dosage;
  const start_date = req.body.start_date; // ISODate
  const end_date = req.body.end_date; // ISODate (optional)

  //create a note with it
  const patient = await Patient.create({
    first_name: first_name,
    last_name: last_name,
    dob: dob, // ISODate
    gender: gender,
    address: address,
    phone_number: phone_number,
    insurance: insurance,
    assigned_doctor: assigned_doctor,
    appointment_date: appointment_date, // ISODate
    appointment_type: appointment_type,
    diagnosis_code: diagnosis_code,
    diagnosis_date: diagnosis_date, // ISODate
    medication_name: medication_name,
    dosage: dosage,
    start_date: start_date, // ISODate
    end_date: end_date // ISODate (optional)
  });

  //respond with the new note
  res.json({ patient: patient });
};

//update note
const updatePatient = async (req, res) => {
  const patient_id = req.params.id;
  const new_first_name = req.body.first_name;
  const new_last_name = req.body.last_name;
  const new_dob = req.body.dob; // ISODate
  const new_gender = req.body.gender;
  const new_address = req.body.address;
  const new_phone_number = req.body.phone_number;
  const new_insurance = req.body.insurance;
  const new_assigned_doctor = req.body.assigned_doctor;
  const new_appointment_date = req.body.appointment_date; // ISODate
  const new_appointment_type = req.body.appointment_type;
  const new_diagnosis_code = req.body.diagnosis_code;
  const new_diagnosis_date = req.body.diagnosis_date; // ISODate
  const new_medication_name = req.body.medication_name;
  const new_dosage = req.body.dosage;
  const new_start_date = req.body.start_date; // ISODate
  const new_end_date = req.body.end_date; // ISODate (optional)


  const new_patient = await Patient.findByIdAndUpdate(patient_id, {
    first_name: new_first_name,
    last_name: new_last_name,
    dob: new_dob, // ISODate
    gender: new_gender,
    address: new_address,
    phone_number: new_phone_number,
    insurance: new_insurance,
    assigned_doctor: new_assigned_doctor,
    appointment_date: new_appointment_date, // ISODate
    appointment_type: new_appointment_type,
    diagnosis_code: new_diagnosis_code,
    diagnosis_date: new_diagnosis_date, // ISODate
    medication_name: new_medication_name,
    dosage: new_dosage,
    start_date: new_start_date, // ISODate
    end_date: new_end_date // ISODate (optional)
  });

  const updated_patient = await Patient.findById(patient_id);

  res.json({ patient: updated_patient });
};

//delete a note
const deletePatient = async (req, res) => {
  const id = req.params.id;

  const deleted_patient = await Patient.findByIdAndDelete(id);

  res.json({ patient: deleted_patient });
};

module.exports = {
  fetchAllPatients,
  fetchPatientById,
  createPatient,
  updatePatient,
  deletePatient,
};
