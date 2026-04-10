import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./component/Home";
import Login from "./component/Login";
import DashBoard from "./component/DashBoard";
import Error from "./component/Error";
const App=()=>{
  return(
    <>
      <BrowserRouter>
         <Routes>
           <Route path="/" element={<Layout/>} >
            <Route index element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="dashboard" element={<DashBoard/>}/>
            <Route path="*" element={ <Error /> } />
           </Route>
         </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App;