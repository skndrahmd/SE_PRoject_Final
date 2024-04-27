// import { useEffect, useState } from "react"
// import Navbar from "../Navbar/Navbar";
// import axios from 'axios';
// import "./encoder_css.css";
// import Swal from 'sweetalert2'

// function Encoder() {

//     // const location=useLocation();
//     // {location.state.id}

//     //current state is notes == change state is after setState
//     const [notes, setNotes] = useState(null);
//     const [updateForm, setUpdateForm] = useState({

//       "first_name": "",
//       "last_name": "",
//       "dob": "",  // Stores date of birth
//       "gender": "",
//       "address": "",
//       "phone_number": "",
//       "emergency_contact": "",
//       "insurance": "",
//       "assigned_doctor": "",
//       "appointment_date": "",
//       "appointment_type": "",
//       "diagnosis_code": "",
//       "diagnosis_date": "",
//       "medication_name": "",
//       "dosage": "",
//       "start_date": "",
//       "end_date": "",
//     });
  
//     //Any function in this is executed as soon as the window is loaded..
//     useEffect(() => {
//       fetchNotes();
//     }, []);
  
    
//     const send_data = () => {
//       Swal.fire({
//         title: "Are You Sure ?",
//         text: "Data Will Be Sent to the Publisher !",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes, send it !"
//       }).then((result) => {
//         if (result.isConfirmed) {
//           Swal.fire({
//             title: "Success !",
//             text: "Your Data Has Been Sent To The Publisher !",
//             icon: "success"
//           });
//         }
//       });
//     }
  
  
//     const fetchNotes = async () => {
//       //fetch notes
//       const res = await axios.get("http://localhost:8000/patient");
//       //set to state
//       setNotes(res.data.patients);
//       console.log(res.data.patients);
//     };
  
  
//     const deleteNote = async (_id) => {
//       const confirm = window.confirm(
//         "Are you sure you want to delete this record?"
//       );
//       if (confirm) {
//         const res = await axios.delete(`http://localhost:8000/patient/${_id}`);
//         fetchNotes();
//         alert("Record successfully deleted!")
//       } else {
//         alert("Record not deleted!");
//       }
  
//       console.log(res)
//     };
  
//     const handleUpdateFieldChange = async (e) => {
//       const { value, name } = e.target;
  
//       setUpdateForm({
//         ...updateForm,
//         [name]: value,
//       });
//     };
  
//     const updateNote = async (record) => {
//       //get current note values
//       setUpdateForm({
//         first_name: record.first_name,
//         last_name: record.last_name,
//         dob: record.dob,  // Stores date of birth
//         gender: record.gender,
//         address: record.address,
//         phone_number: record.phone_number,
//         insurance: record.insurance,
//         assigned_doctor: record.assigned_doctor,
//         appointment_date: record.appointment_date,
//         appointment_type: record.appointment_type,
//         diagnosis_code: record.diagnosis_code,
//         diagnosis_date: record.diagnosis_date,
//         medication_name: record.medication_name,
//         dosage: record.dosage,
//         start_date: record.start_date,
//         end_date: record.end_date,
//         _id: record._id
        

//       });
//       console.log(record);
  
//       //set state on update form
//     };
  
//     // Update handler
//     const update = async (e) => {
//       // Prevent default form submit
//       e.preventDefault();
//       const confirm_update = window.confirm("Confirm record update?");
    
//       if (confirm_update) {
//         // Construct updated record
//         const updatedRecord = {
//           first_name: updateForm.first_name,
//           last_name: updateForm.last_name,
//           dob: updateForm.dob,  // Stores date of birth
//           gender: updateForm.gender,
//           address: updateForm.address,
//           phone_number: updateForm.phone_number,
//           insurance: updateForm.insurance,
//           assigned_doctor: updateForm.assigned_doctor,
//           appointment_date: updateForm.appointment_date,
//           appointment_type: updateForm.appointment_type,
//           diagnosis_code: updateForm.diagnosis_code,
//           diagnosis_date: updateForm.diagnosis_date,
//           medication_name: updateForm.medication_name,
//           dosage: updateForm.dosage,
//           start_date: updateForm.start_date,
//           end_date: updateForm.end_date,

//         };
  
//         // Make PUT request to update
//         const res = await axios.put(
//           `http://localhost:8000/patient/${updateForm._id}`,
//           updatedRecord
//         );
  
//         fetchNotes();
  
//         setUpdateForm({
//           "_id": null,
//           "first_name": "",
//           "last_name": "",
//           "dob": "",  // Stores date of birth
//           "gender": "",
//           "address": "",
//           "phone_number": "",
//           "emergency_contact": "",
//           "insurance": "",
//           "assigned_doctor": "",
//           "appointment_date": "",
//           "appointment_type": "",
//           "diagnosis_code": "",
//           "diagnosis_date": "",
//           "medication_name": "",
//           "dosage": "",
//           "start_date": "",
//           "end_date": "",
          
//         });
//         alert("Record successfully updated!")
//       } else {
//         alert("Record not updated!");
//       }
//     };
//     const columnNames = [
//       "First Name",
//       "last_name",
//       "dob",  // Stores date of birth
//       "gender",
//       "address",
//       "phone_number",
//       "insurance",
//       "assigned_doctor",
//       "appointment_date",
//       "appointment_type",
//       "diagnosis_code",
//       "diagnosis_date",
//       "medication_name",
//       "dosage",
//       "start_date",
//       "end_date",
//     ];
  
//     return (
//       <div className="App">
//         <Navbar/>
//         <h1>All Records</h1>

  
//         <div className="records">
  
//           <div className="excel-header">
//             {columnNames.map((columnName, index) => (
//               <div key={index} className="box" style={{ color: "white" }}>
//                 <h4 style={{ margin: "0", whiteSpace: "nowrap" }}>
//                   {columnName}
//                 </h4>
//               </div>
//             ))}
//           </div>
  
//           {notes &&
//             notes.map((record) => {
//               const headings = Object.keys(record);
//               const filteredRecord = Object.entries(record)
//                 .filter(([key]) => key !== "_id" && key !== "__v")
//                 .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
  
//               return (
//                 <div className="record-2" key={record._id}>
//                   {Object.entries(filteredRecord).map(
//                     ([heading, value], index) => (
//                       <div key={index} className="box">
//                         <h4
//                           style={{
//                             color: "white",
//                             margin: "0",
//                             whiteSpace: "nowrap",
//                           }}
//                         >
//                           {heading}
//                         </h4>
//                         <p style={{color:"black"}}>{value}</p>
//                       </div>
//                     )
//                   )}


//                   <button
//                     className="edit-button"
//                     onClick={() => updateNote(record)}
//                   >
//                     {" "}
//                     <svg className="edit-svgIcon" viewBox="0 0 512 512">
//                       <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
//                     </svg>
//                   </button>


//                   <button
//                     className="delete-btn"
//                     onClick={() => deleteNote(record._id)}
//                   >
//                     <svg className="delete-svgIcon" viewBox="0 0 448 512">
//                       <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
//                     </svg>{" "}
//                   </button>


//                 </div>
//               );
//             })}
//         </div>
  
//         {updateForm._id && (
//           <div>
//             <h2>Update Record</h2>
//             <form onSubmit={update}>
//             <input
//    onChange={handleUpdateFieldChange}
//    name="first_name"
//    placeholder="First Name"
//    value={updateForm.first_name}
//   />
//   <input
//    onChange={handleUpdateFieldChange}
//    name="last_name"
//    placeholder="Last Name"
//    value={updateForm.last_name}
//   />
//   <input
//    onChange={handleUpdateFieldChange}
//    name="dob"
//    placeholder="Date of Birth"
//    value={updateForm.dob}
//   />
//   <input
//    onChange={handleUpdateFieldChange}
//    name="gender"
//    placeholder="Gender"
//    value={updateForm.gender}
//   />
//   <input
//    onChange={handleUpdateFieldChange}
//    name="address"
//    placeholder="Address"
//    value={updateForm.address}
//   />
//   <input
//    onChange={handleUpdateFieldChange}
//    name="phone_number"
//    placeholder="Phone Number"
//    value={updateForm.phone_number}
//   />

//   <input
//    onChange={handleUpdateFieldChange}
//    name="insurance"
//    placeholder="Insurance"
//    value={updateForm.insurance}
//   />
//   <input
//    onChange={handleUpdateFieldChange}
//    name="assigned_doctor"
//    placeholder="Assigned Doctor"
//    value={updateForm.assigned_doctor}
//   />
//   <input
//    onChange={handleUpdateFieldChange}
//    name="appointment_date"
//    placeholder="Appointment Date"
//    value={updateForm.appointment_date}
//   />
//   <input
//    onChange={handleUpdateFieldChange}
//    name="appointment_type"
//    placeholder="Appointment Type"
//    value={updateForm.appointment_type}
//   />
//   <input
//    onChange={handleUpdateFieldChange}
//    name="diagnosis_code"
//    placeholder="Diagnosis Code"
//    value={updateForm.diagnosis_code}
//   />
//   <input
//    onChange={handleUpdateFieldChange}
//    name="diagnosis_date"
//    placeholder="Diagnosis Date"
//    value={updateForm.diagnosis_date}
//   />
//   <input
//    onChange={handleUpdateFieldChange}
//    name="medication_name"
//    placeholder="Medication Name"
//    value={updateForm.medication_name}
//   />
//   <input
//    onChange={handleUpdateFieldChange}
//    name="dosage"
//    placeholder="Dosage"
//    value={updateForm.dosage}
//   />
//   <input
//    onChange={handleUpdateFieldChange}
//    name="start_date"
//    placeholder="Start Date"
//    value={updateForm.start_date}
//   />
//   <input
//    onChange={handleUpdateFieldChange}
//    name="end_date"
//    placeholder="End Date"
//    value={updateForm.end_date}
//   />
//               <button className="btn" type="submit">
//                 Update Record
//               </button>
//             </form>
//           </div>
//         )}
//         <div style={{ display: "flex" }}>
//           <button className="nav-btn" onClick={send_data}>
//             Send Data
//           </button>
//         </div>
//       </div>
//     );
//   }

// export default Encoder

import { useEffect, useState } from "react"
import Navbar from "../Navbar/Navbar";
import axios from 'axios';
import "./encoder_css.css";
import Swal from 'sweetalert2'
import Modal from 'react-modal'; 

function Encoder() {

  // const location=useLocation();
  // {location.state.id}

  //current state is notes == change state is after setState
  const [notes, setNotes] = useState(null);
  const [updateForm, setUpdateForm] = useState({

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

  //Any function in this is executed as soon as the window is loaded..
  useEffect(() => {
    fetchNotes();
  }, []);


  const send_data = () => {
    Swal.fire({
      title: "Are You Sure ?",
      text: "Data Will Be Sent to the Publisher !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, send it !"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Success !",
          text: "Your Data Has Been Sent To The Publisher !",
          icon: "success"
        });
      }
    });
  }


  const fetchNotes = async () => {
    //fetch notes
    const res = await axios.get("http://localhost:8000/patient");
    //set to state
    setNotes(res.data.patients);
    console.log(res.data.patients);
  };



  const deleteNote = async (_id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this record?"
    );
    if (confirm) {
      const res = await axios.delete(`http://localhost:8000/patient/${_id}`);
      fetchNotes();
      alert("Record successfully deleted!")
    } else {
      alert("Record not deleted!");
    }

    console.log(res)
  };

  const handleUpdateFieldChange = async (e) => {
    const { value, name } = e.target;

    setUpdateForm({
      ...updateForm,
      [name]: value,
    });
  };

  const updateNote = async (record) => {
    //get current note values
    setUpdateForm({
      first_name: record.first_name,
      last_name: record.last_name,
      dob: record.dob,  // Stores date of birth
      gender: record.gender,
      address: record.address,
      phone_number: record.phone_number,
      insurance: record.insurance,
      assigned_doctor: record.assigned_doctor,
      appointment_date: record.appointment_date,
      appointment_type: record.appointment_type,
      diagnosis_code: record.diagnosis_code,
      diagnosis_date: record.diagnosis_date,
      medication_name: record.medication_name,
      dosage: record.dosage,
      start_date: record.start_date,
      end_date: record.end_date,
      _id: record._id


    });
    // console.log(record);

    //set state on update form
  };

  // Update handler
  const update = async (e) => {
    // Prevent default form submit
    e.preventDefault();
    const confirm_update = window.confirm("Confirm record update?");

    if (confirm_update) {
      // Construct updated record
      const updatedRecord = {
        first_name: updateForm.first_name,
        last_name: updateForm.last_name,
        dob: updateForm.dob,  // Stores date of birth
        gender: updateForm.gender,
        address: updateForm.address,
        phone_number: updateForm.phone_number,
        insurance: updateForm.insurance,
        assigned_doctor: updateForm.assigned_doctor,
        appointment_date: updateForm.appointment_date,
        appointment_type: updateForm.appointment_type,
        diagnosis_code: updateForm.diagnosis_code,
        diagnosis_date: updateForm.diagnosis_date,
        medication_name: updateForm.medication_name,
        dosage: updateForm.dosage,
        start_date: updateForm.start_date,
        end_date: updateForm.end_date,

      };

      // Make PUT request to update
      const res = await axios.put(
        `http://localhost:8000/patient/${updateForm._id}`,
        updatedRecord
      );

      fetchNotes();

      setUpdateForm({
        "_id": null,
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
      alert("Record successfully updated!")
    } else {
      alert("Record not updated!");
    }
  };
  const columnNames = [
    "First Name",
    "Last Name",
    "Phone Number",
    "Assigned Doctor",
  ];

  const [showExtraColumns, setShowExtraColumns] = useState(false);

  const extraColumns = [
    "Appoinment Date",
    "Appointment Type",
    "Diagnosis Code",
    "Diagnosis Date",
    "Medication Name",
    "Dosage",
    "Start Date",
    "End Date",
    "Insurance",
    "Date of Birth", 
    "Gender",
    "Address",
  ];



  const toggleExtraColumns = () => {
    setShowExtraColumns(!showExtraColumns);
  };
const [modalIsOpen, setModalIsOpen] = useState(false);

  // State to store the content of the modal
  const [modalContent, setModalContent] = useState('');

  // State to store the title of the modal
  const [modalTitle, setModalTitle] = useState('');

  // Function to handle opening the modal
  const openModal = (title) => {
    setModalTitle(title);
    setModalContent('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam leo. Cras dignissim odio sit amet justo luctus varius. Integer sit amet massa nec ex tempus suscipit vitae eu ipsum. Suspendisse aliquam, mi et euismod efficitur, magna odio luctus nunc, ut congue quam leo vel nisl. Vivamus convallis ut libero in aliquet. Donec ultrices dui nec bibendum ultricies. Duis sollicitudin vestibulum lectus, nec feugiat mi mattis vel. Etiam fermentum velit vitae turpis sodales, non convallis felis pulvinar. Vivamus suscipit dapibus nunc, nec luctus est ullamcorper ut. Integer quis velit a odio congue eleifend. Nam vitae dolor non quam dictum suscipit. Nunc in nisl consequat, bibendum lectus a, pharetra lorem. Donec sit amet justo nunc. Ut ut mi ut sem tristique mattis in eget velit.');
    setModalIsOpen(true);
  };

  // Function to handle closing the modal
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const [clickedIndex, setClickedIndex] = useState(null);

  const handleIndexClick = (index) => {
    setClickedIndex(index);
    const title = extraColumns[index]; // Get the title based on the clicked index
    openModal(title); // Open the modal with the title
  };

  const columnsExpanded = () => {
    return (
      <div>
        {extraColumns.map((columnName, index) => (
          <div
            key={index}
            className="box"
            style={{ color: "white", background: "green", cursor: "pointer" }}
            onClick={() => handleIndexClick(index)} 
          >
            <h4 style={{ margin: "0", whiteSpace: "nowrap" }}>
              {columnName}
            </h4>
          </div>
        ))}
      </div>
    );
  };


  return (
    <div className="App">
      <Navbar />
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

        <div style={{padding: "30px 0 0 0"}}>
          <button onClick={toggleExtraColumns}>View More Detail</button>
        </div>

        <Modal
        isOpen={modalIsOpen} // Boolean to control whether the modal is open or not
        onRequestClose={closeModal} // Function to call when the modal should be closed
        contentLabel="Example Modal" // Accessible label for the modal content
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)' // Gray background
          },
          content: {
            width: '400px', // Set the width of the modal
            height: '300px', // Set the height of the modal
            margin: 'auto', // Center the modal horizontally
            border: '1px solid #ccc', // Add a border
            borderRadius: '8px', // Add border radius
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Add shadow
            padding: '20px' // Add padding
          }
        }}
      >
        <h2>{modalTitle}</h2>
        {/* Set color of lorem ipsum text to black */}
        <p style={{ color: 'black' }}>{modalContent}</p>
        {/* Button to close the modal */}
        <button onClick={closeModal}>Close Modal</button>
      </Modal>

        {showExtraColumns && (
          <div style={{padding: "30px 0 30px 0"}}>
            {columnsExpanded()}
          </div>
        )}

        {notes &&
          notes.map((record) => {
            const headings = Object.keys(record);
            const filteredRecord = Object.entries(record)
              .filter(([key]) => key !== "id" && key !== "_v")
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
                      <p style={{ color: "black" }}>{value}</p>
                    </div>
                  )
                )}


                <button
                  className="edit-button"
                  onClick={() => updateNote(record)}
                >
                  {" "}
                  <svg className="edit-svgIcon" viewBox="0 0 512 512">
                    <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                  </svg>
                </button>


                <button
                  className="delete-btn"
                  onClick={() => deleteNote(record._id)}
                >
                  <svg className="delete-svgIcon" viewBox="0 0 448 512">
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                  </svg>{" "}
                </button>


              </div>
            );
          })}
      </div>

      {updateForm._id && (
        <div>
          <h2>Update Record</h2>
          <form onSubmit={update}>
            <input
              onChange={handleUpdateFieldChange}
              name="first_name"
              placeholder="First Name"
              value={updateForm.first_name}
            />
            <input
              onChange={handleUpdateFieldChange}
              name="last_name"
              placeholder="Last Name"
              value={updateForm.last_name}
            />
            <input
              onChange={handleUpdateFieldChange}
              name="dob"
              placeholder="Date of Birth"
              value={updateForm.dob}
            />
            <input
              onChange={handleUpdateFieldChange}
              name="gender"
              placeholder="Gender"
              value={updateForm.gender}
            />
            <input
              onChange={handleUpdateFieldChange}
              name="address"
              placeholder="Address"
              value={updateForm.address}
            />
            <input
              onChange={handleUpdateFieldChange}
              name="phone_number"
              placeholder="Phone Number"
              value={updateForm.phone_number}
            />

            <input
              onChange={handleUpdateFieldChange}
              name="insurance"
              placeholder="Insurance"
              value={updateForm.insurance}
            />
            <input
              onChange={handleUpdateFieldChange}
              name="assigned_doctor"
              placeholder="Assigned Doctor"
              value={updateForm.assigned_doctor}
            />
            <input
              onChange={handleUpdateFieldChange}
              name="appointment_date"
              placeholder="Appointment Date"
              value={updateForm.appointment_date}
            />
            <input
              onChange={handleUpdateFieldChange}
              name="appointment_type"
              placeholder="Appointment Type"
              value={updateForm.appointment_type}
            />
            <input
              onChange={handleUpdateFieldChange}
              name="diagnosis_code"
              placeholder="Diagnosis Code"
              value={updateForm.diagnosis_code}
            />
            <input
              onChange={handleUpdateFieldChange}
              name="diagnosis_date"
              placeholder="Diagnosis Date"
              value={updateForm.diagnosis_date}
            />
            <input
              onChange={handleUpdateFieldChange}
              name="medication_name"
              placeholder="Medication Name"
              value={updateForm.medication_name}
            />
            <input
              onChange={handleUpdateFieldChange}
              name="dosage"
              placeholder="Dosage"
              value={updateForm.dosage}
            />
            <input
              onChange={handleUpdateFieldChange}
              name="start_date"
              placeholder="Start Date"
              value={updateForm.start_date}
            />
            <input
              onChange={handleUpdateFieldChange}
              name="end_date"
              placeholder="End Date"
              value={updateForm.end_date}
            />
            <button className="btn" type="submit">
              Update Record
            </button>
          </form>
        </div>
      )}
      <div style={{ display: "flex" }}>
        <button className="nav-btn" onClick={send_data}>
          Send Data
        </button>
      </div>
    </div>
  );
}

export default Encoder