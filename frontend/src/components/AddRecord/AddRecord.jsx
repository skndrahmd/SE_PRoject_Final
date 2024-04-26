import { useState } from "react"
import Navbar from "../Navbar/Navbar";
import axios from 'axios';
import "./encoder_css.css";



function AddRecord () {

    // const location=useLocation();
    // {location.state.id}

    const [createForm, setCreateForm] = useState({
        "first_name": "",
        "last_name": "",
        "dob": "",  // Stores date of birth
        "gender": "",
        "address": "",
        "phone_number": "",
        "emergency_contact": "",
        "insurance": "",
        "assigned_doctor": "",
        "appointment_date": "",
        "appointment_type": "",
        "diagnosis_code": "",
        "diagnosis_date": "",
        "medication_name": "",
        "dosage": "",
        "start_date": "",
        "end_date": "",
    });


    const updateCreateForm = (e) => {
        const { name, value } = e.target;
    
        setCreateForm({
          //this duplicates the object in the usestate
          ...createForm,
          [name]: value,
        });
      };
    


    const createNote = async (e) => {
        e.preventDefault();
        //create the note
        const res = await axios.post("http://localhost:8000/patient", createForm);
    
        //clear form state
        setCreateForm({
          "first_name": "",
          "last_name": "",
          "dob": "",  // Stores date of birth
          "gender": "",
          "address": "",
          "phone_number": "",
          "emergency_contact": "",
          "insurance": "",
          "assigned_doctor": "",
          "appointment_date": "",
          "appointment_type": "",
          "diagnosis_code": "",
          "diagnosis_date": "",
          "medication_name": "",
          "dosage": "",
          "start_date": "",
          "end_date": "",
        });
        // console.log(res)
        alert("Record successfully added!")
      };
    return (
<>


<Navbar/>

<h1>Add Record</h1>


<form onSubmit={createNote}>

<input
 onChange={updateCreateForm}
 name="first_name"
 placeholder="First Name"
 value={createForm.first_name}
/>
<input
 onChange={updateCreateForm}
 name="last_name"
 placeholder="Last Name"
 value={createForm.last_name}
/>
<input
 onChange={updateCreateForm}
 name="dob"
 placeholder="Date of Birth"
 value={createForm.dob}
/>
<input
 onChange={updateCreateForm}
 name="gender"
 placeholder="Gender"
 value={createForm.gender}
/>
<input
 onChange={updateCreateForm}
 name="address"
 placeholder="Address"
 value={createForm.address}
/>
<input
 onChange={updateCreateForm}
 name="phone_number"
 placeholder="Phone Number"
 value={createForm.phone_number}
/>
<input
 onChange={updateCreateForm}
 name="insurance"
 placeholder="Insurance"
 value={createForm.insurance}
/>
<input
 onChange={updateCreateForm}
 name="assigned_doctor"
 placeholder="Assigned Doctor"
 value={createForm.assigned_doctor}
/>
<input
 onChange={updateCreateForm}
 name="appointment_date"
 placeholder="Appointment Date"
 value={createForm.appointment_date}
/>
<input
 onChange={updateCreateForm}
 name="appointment_type"
 placeholder="Appointment Type"
 value={createForm.appointment_type}
/>
<input
 onChange={updateCreateForm}
 name="diagnosis_code"
 placeholder="Diagnosis Code"
 value={createForm.diagnosis_code}
/>
<input
 onChange={updateCreateForm}
 name="diagnosis_date"
 placeholder="Diagnosis Date"
 value={createForm.diagnosis_date}
/>
<input
 onChange={updateCreateForm}
 name="medication_name"
 placeholder="Medication Name"
 value={createForm.medication_name}
/>
<input
 onChange={updateCreateForm}
 name="dosage"
 placeholder="Dosage"
 value={createForm.dosage}
/>
<input
 onChange={updateCreateForm}
 name="start_date"
 placeholder="Start Date"
 value={createForm.start_date}
/>
<input
 onChange={updateCreateForm}
 name="end_date"
 placeholder="End Date"
 value={createForm.end_date}
/>

          <button className="btn" type="submit" onClick={null}>
            Create New Record
          </button>
        </form>
</>
    );
}

export default AddRecord;