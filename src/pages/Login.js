import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Alert from '../components/Alert';
import qalamSeal from '../Images/Logo-2.png'


function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState(null)
  let history = useNavigate();

  const showAlert = (message)=>{
    setAlert({
      msg:message,
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  async function handleClick()
  {
    console.warn(email, password, "Data");
    let item = {email, password };
    let result = await fetch("https://nameless-peak-43027.herokuapp.com/login", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json", 
         
      },
      body: JSON.stringify(item) 
    });

    result = await result.json();
    localStorage.setItem('token',result.data.token);
    console.log(localStorage.getItem('token'))
    localStorage.setItem('dashboard', JSON.stringify(result));
    let localVal = localStorage.getItem("dashboard");
    let stausData = JSON.parse(localVal);

    if(stausData.status === 200){
      history("/dashboard");     
      showAlert("Logged In") 
    }
    else{
      showAlert("Email of Pass not matched")

    }
     
  }


  
  return (
    <>
    <Alert alert={alert} />
    <div className="adminLogin">
            <h1>cPanel for Qalam Dashboard</h1>
            <div className="qalamSeal">
              <img src={qalamSeal} alt="Qalam Seal" />
            </div>
            <div className="formBox">
              <label htmlFor="uname">Email</label>
              <input type="text" id="uname" placeholder='User Name...' onChange={(e) => setEmail(e.target.value)} /> 
              <label htmlFor="upass">Password</label>
              <input type="password" id="upass" placeholder='Password...' onChange={(e)=> setPassword(e.target.value)} />   
              <button type="submit" onClick={handleClick}>Login</button>
            </div>

            <p className='forgetPass'><a href="#">Forgot Password</a></p>

    </div>

    </>
  )
}

export default Login