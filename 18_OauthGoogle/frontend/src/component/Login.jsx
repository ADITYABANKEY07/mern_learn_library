import glogo from "../images/gicon.png";


const Login=()=>{



    const loginwithGoogle=()=>{

        window.open("http://localhost:8000/auth/google/callback", "_self")
    }


    return(
        <>
        


        <div class="container">
         <h1> User Login </h1>
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required />

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required />
        
    <button type="submit">Login</button>
     OR
    <div class="container">
    <button type="button" class="cancelbtn" style={{width:"250px", fontSize:"15px"}}  
    onClick={loginwithGoogle} >
        <img src={glogo} className="glogo" />
        Login With Google</button>
  </div>
  </div>

  
        </>
    )
}

export default Login;