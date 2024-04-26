// import './App.css'
import Login from "./components/Login/Login"
import Signup from "./components/SignUp/SignUp"
import Encoder from "./components/Encoder/Encoder";
import Publisher from "./components/Publisher/Publisher";
import AddRecord from "./components/AddRecord/AddRecord";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/encoder" element={<Encoder/>}/>
          <Route path="/publisher" element={<Publisher/>}/>
          <Route path="/addRecord" element={<AddRecord/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;