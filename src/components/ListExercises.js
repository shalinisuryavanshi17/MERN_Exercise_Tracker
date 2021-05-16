import {React,useState} from "react"
import axios from "axios"
export default function ListExcercises()
{
    const [exercises,setexercises]=useState([])
    axios.get("http://localhost:5000/exercises/")
    .then(res=>setexercises(res.data))
    .catch(err=>console.log("error is "+err))

    return(
        <div className="container" ><h3>{exercises.map(ex=>{
            return<ul key={ex.id}><li>{ex.username}</li><p>{ex.description}</p><p>{ex.duration}</p><p>{ex.date}</p></ul>
        })}</h3></div>
    )
}