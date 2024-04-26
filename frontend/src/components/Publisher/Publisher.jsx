import {useLocation} from 'react-router-dom';
import Publisher_Navbar from '../Publisher_Navbar/Publisher_Navbar';
import { useEffect, useState } from "react"
import axios from 'axios';
import "./encoder_css.css";


function Publisher (){
    //current state is notes == change state is after setState
    const [notes, setNotes] = useState(null);


    const fetchNotes = async () => {
        //fetch notes
        const res = await axios.get("http://localhost:8000/patient");
        //set to state
        setNotes(res.data.patients);
        console.log(res.data.data);
      };
    

    //Any function in this is executed as soon as the window is loaded..
    useEffect(() => {
      fetchNotes();
    }, []);
  


    const columnNames = [
      "first_name",
      "last_name",
      "dob",  // Stores date of birth
      "gender",
      "address",
      "phone_number",
      "insurance",
      "assigned_doctor",
      "appointment_date",
      "appointment_type",
      "diagnosis_code",
      "diagnosis_date",
      "medication_name",
      "dosage",
      "start_date",
      "end_date",
    ];
  
    return (
      <div className="App">
        <Publisher_Navbar/>
        <h1>All Records</h1>
    
  
        <div className="records">
  
          <div className="excel-header">
            {columnNames.map((columnName, index) => (
              <div key={index} className="box" style={{ color: "white" }}>
                <h4 style={{ margin: "0", whiteSpace: "nowrap" }}>
                  {columnName}
                </h4>
              </div>
            ))}
          </div>
  
          {notes &&
            notes.map((record) => {
              const heading = Object.keys(record);
              const filteredRecord = Object.entries(record)
                .filter(([key]) => key !== "_id" && key !== "__v")
                .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
  
              return (
                <div className="record-2" key={record._id}>
                  {Object.entries(filteredRecord).map(
                    ([heading, value], index) => (
                      <div key={index} className="box">
                        <h4
                          style={{
                            color: "white",
                            margin: "0",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {heading}
                        </h4>
                        <p style={{color:"black"}}>{value}</p>
                      </div>
                    )
                  )}

                </div>
              );
            })}
        </div>
      </div>
    );
}

export default Publisher