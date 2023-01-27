import axios from 'axios'
import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

function Voiture() {
    const params = useParams()
    const[loading,setLoading]=useState(true)
    const[error,setError]=useState("")
    const[cars,setCar]=useState({})
   
    useEffect(() => {
        console.log(params.id);
        axios.get("http://localhost:5000/onecar/" + params.id)
        // axios.get(`http://localhost:5000/onecar/${params.id}`)
        .then(response => {
            setLoading(false)
            setError("")
            setCar(response.data.data)
        })
        .catch(error => {
            setLoading(false)
            setCar({})
            setError(error)
        })
    })
  return (
    <div>Voiture {params.id}
    {
        loading ? "Loading." :
        cars.marque
        
    } 
    { 
        loading ? "Loading." :
        cars.immatriculation
    } 
    { 
        loading ? "Loading." :
        cars.mise_en_service
    } 
    {
        error ? "error" : null 
    }
    
    
    
    
    
    </div>
  )
}

export default Voiture