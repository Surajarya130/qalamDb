import React, { useState } from 'react'
import Alert from '../components/Alert'
import axios from 'axios'

function AddAuthor() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    // const [phone, setPhone] = useState("")
    const [designation, setDesignation] = useState("")
    const [about, setAbout] = useState("")
    const [avatar, setAvatar] = useState(null);
    const [alert, setAlert] = useState(null)
      

    const showAlert = (message)=>{
        setAlert({
          msg:message,
        })
        setTimeout(() => {
          setAlert(null)
        }, 2000);
    }

    function handleSubmit(e){
      e.preventDefault();
      let formData = new FormData();
      formData.append('name', name)
      formData.append('email', email)
      // formData.append('phone', phone)
      formData.append('designation', designation)
      formData.append('about', about)
      formData.append('avatar', avatar)
      try{
        axios({
          method: "POST",
          url: "https://nameless-peak-43027.herokuapp.com/add-author",
          data: formData,
          headers: {"Content-Type": "multipart/form-data",Authorization:localStorage.getItem('token')},     
        })
        clearInputForm()
  
      } catch(error){
        console.log(error)
      }

    }


    let clearInputForm = () => {
      setName("")
      setEmail("")
      setAbout("")
      setDesignation("")
      setAvatar(null)
      showAlert("Author has been added")
      showAlert('Added') 
      // setTimeout(() => {
      //   window.location.href = "/authors"        
      // }, 1500);


    }


  return (
    <div id='layoutSidenav_content'>
        <Alert alert={alert} />
        <h1 style={{position:"relative", left:"50px"}}>Add author below</h1>

        <form className='authorForm' action='/authors' onSubmit={handleSubmit}>
        <label htmlFor="authorName">Name:</label>
        <input type="text" name="name" value={name} id="authorName" onChange={(e)=> setName(e.target.value)} required />
        <br />

        <label htmlFor="authorEmail">Email:</label>
        <input type="email" name="email" value={email} id="authorEmail" onChange={(e)=> setEmail(e.target.value)} required />
        <br />

        {/* <label htmlFor="authorPhone">Phone:</label>
        <input type="number" name="phone" value={phone} id="authorPhone" onChange = {(e)=> setPhone(e.target.value)} required />
        <br /> */}

        <label htmlFor="authorDesignation">Designation:</label>
        <input type="text" name="" id="authorDesignation" value={designation} onChange= {(e)=> setDesignation(e.target.value)} required />
        <br />

        <label htmlFor="authorAbout">About:</label>
        <input type="text" name="about" id="authorAbout" value={about} onChange={(e)=> setAbout(e.target.value)} required />
        <br />


        <label htmlFor="authorAbout">Image:</label>
        <input type="file"  alt="Submit" onChange={(e) => setAvatar(e.target.files[0])} required />
        <br />
        <button type='submit' >Add Author</button>

        </form>



    </div>
  )
}

export default AddAuthor