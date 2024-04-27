import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import "./Login.css";

function Login() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [role, setRole]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/",{
                email,password,role
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/home",{state:{id:email}})
                }
                else if (res.data == "encoder"){
                    history("/encoder", {state:{id:role}})
                }
                else if(res.data == "publisher"){
                    history("/publisher", {state:{id:role}})
                }
                else if(res.data=="notexist"){
                    alert("Please enter correct credentials!")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }

    return (
        <div className="Main container ">
            <div className="login">

                <h1>Login</h1>
                
                <form action="POST">
                <div className="fields">
                    <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                    <input type="text" onChange={(e) => { setRole(e.target.value) }} placeholder="Role"  />
                    <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
                    <input type="submit" onClick={submit} />
                    </div>
                </form>

                <br />
                <p>OR</p>
                <br />

                <div><Link to="/signup">Signup Page</Link></div>
            </div>

        </div>
        )
}   

export default Login