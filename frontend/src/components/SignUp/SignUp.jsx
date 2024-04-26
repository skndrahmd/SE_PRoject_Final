import { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function Login() {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [first_name, setFirstName]=useState('')
    const [last_name, setLastName] = useState('')
    const [role, setRole] = useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/signup",{
                email,password,first_name,last_name,role
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("User already exists")
                }
                else if(res.data=="encoder"){
                    history("/encoder",{state:{id:email}})
                }
                else if(res.data == "publisher"){
                    history("/publisher", {state:{id:email}})
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
        <div className="login">

            <h1>Signup</h1>

            <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                <input type="text" onChange={(e) => { setFirstName(e.target.value) }} placeholder="First Name" />
                <input type="text" onChange={(e) => { setLastName(e.target.value) }} placeholder="Last Name" />
                <input type="text" onChange={(e) => { setRole(e.target.value) }} placeholder="Role" />
                <input type="submit" onClick={submit} />

            </form>

            <br />
            <p>OR</p>
            <br />

            <Link to="/">Login Page</Link>

        </div>
    )
}

export default Login