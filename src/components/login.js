import {React,useState} from "react"
import axios from "axios"
export default function Login()
{
    const [username, setusername] = useState('')
    const onChange=(e)=>{
        const uname=e.target.value;
        setusername(uname)
    }
   function onSubmit (e){
       e.preventDefault()
       console.log(username)
       axios.post("http://localhost:5000/users/add",{username:username})
       .then(res=>console.log(res.data))
       .catch(err=>console.log("error "+err))
       setusername('')
   }
    return(
        <div className="container">
            <form  onSubmit={e=>{onSubmit(e)}}>
            
                <div className="form-group" style={{margin:"2rem"}} >
                <h2>Create user</h2>
                      <input type="text" value={username} className="form-control" required onChange={e=>{onChange(e)}} />
                      <button className="btn btn-primary" style={{marginTop:"1rem"}}>Submit</button>
                </div>
            </form>
        </div>
    )
}