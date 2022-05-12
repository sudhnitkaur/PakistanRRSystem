import axios from 'axios';
import React, { useState } from 'react'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, 
  Route, Redirect,} from "react-router-dom";
import { useHistory } from 'react-router-dom';
import Error from './Error';
import TrainList from './TrainList'
import AdminService from '../Services/AdminService';



function Login() {
  const[redirect,setRedirect] = useState(false);
  let history = useHistory();
  // const [token , setToken] = useState("");

  // const data={
  //   userName:username,
  //   passWord:password,
  //   logIn:login,
  //   token:token
  // }

  const[data,setData]=useState({
    username:"",
    password:""
})

function handle(e){
  const newdata={...data}
  newdata[e.target.id]=e.target.value
  setData(newdata)
 
}
  

  const signin = (username,password)=>{
    console.log(username +" and " + password );
     (axios.post("http://localhost:8081/admin/Access/auth?password="+password+"&username="+username,{username,password}
    ).then(res=>{
      console.log(res.data);
      console.log(res.status.type);
      console.log(res.data.jwt);
      // setToken(res.data)
      localStorage.setItem("token", res.data.jwt);
      if(res.data !== "wrong username and password" ){
        toast.success("Logged in successfully" , {position:"top-center"})
        history.push("/adminTrainList")
        
      }else{
        toast.error("you are not logged in" , {position:"top-center"})
        history.push("/error")
        
      }
      // setRedirect(true)
      // <Redirect to="/adminTrainList"></Redirect>
      
      
      

    }).catch(err=>{
      console.log(err);
      // return <Redirect to="/"></Redirect>
    }));

    // if(redirect){
    //   <Redirect to='/adminTrainList'></Redirect>
    // }
   

    // if(token !== "wrong username and password" ||  token !==""){
    //   console.log("inside token")
    // }else if(token ==="wrong username and password" ){
    //   console.log("inside token")
    // }
    


   
  }


  
//   const logout=()=>{
//     // localStorage.removeItem("SavedToken");
//     console.log(token);
//   }

//   const getCurrentUser=()=>{
//     console.log( localStorage.getItem("SavedToken"))
// }

  // if(redirect){
  //   <Redirect to='/adminTrainList' ></Redirect>
  // }


  return (
    // <div>
    // <br></br>
    // <br></br>
    // <input type="text" placeholder='username' value={data.username} id='username' onChange={handle} />
    // <br></br>
    // <br></br>
    // <input type="text" placeholder='password' value={data.password} id='password' onChange={handle} />
    // <br></br>
    // <br></br>
    // <button onClick={()=>{signin(data.username,data.password)}}>Login</button>


    // </div>
    <section className='showcase login'>
         <div className="container" >
          <div className='showcase-overlay'>
            <h1 className="booking">ADMIN LOGIN</h1>
            <hr></hr>
            <div className="inner">
              <label><b>User Name</b></label>
              <br></br>
              <input type="text" placeholder='username' value={data.username} id='username' onChange={handle} />
              <br></br><br></br>
              <label><b>Password</b></label>
              <br></br>
              <input type="text" placeholder='password' value={data.password} id='password' onChange={handle} />
              <br></br><br></br>
              <button
                className="btn btn-success"
                type="submit"
                onClick={() => { signin(data.username,data.password)}}
              >
          LogIn
              </button>
            </div>
          </div></div>
        
        </section>
      )}
  

  

export default Login