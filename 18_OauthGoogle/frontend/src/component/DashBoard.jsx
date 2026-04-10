import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const DashBoard=()=>{
    const navigate=useNavigate();
    const getUser=async()=>{
        try {
          const response= await axios.get("http://localhost:8000/login/success", {withCredentials:true});
           console.log("response ", response);          
        } catch (error) {
           navigate("*");
        }

  }

  
  useEffect(()=>{
    getUser();
}, []);


    return(
        <>
         <h1 align="center">User DashBoard</h1>
        </>
    )
}

export default DashBoard;