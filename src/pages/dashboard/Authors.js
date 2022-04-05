import axios from 'axios';
import React, {useState, useEffect} from 'react'
import HorizontalDevider from '../../components/HorizontalDevider';

import history from '../../routes/history'

import { Spinner } from "react-bootstrap";


function Authors() {

  const [showAddAuthorPopup, setShowAddAuthorPopup] = useState(false);
  const [showEditAuthorPopup, setShowEditAuthorPopup] = useState(false)
  const [authorData, setAuthorData] = useState()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [designation, setDesignation] = useState("")
  const [about, setAbout] = useState("")
  const [avatar, setAvatar] = useState();
  const [twitter, setTwitter] = useState("")
  const [facebook, setFacebook] = useState("")
  const [instagram, setInstagram] = useState("")
  const [linkedIN, setLinkedIN] = useState("")
  const [editAuhtor, setEditAuhtor] = useState();


  function handleAddAuthorClick(){
    setShowAddAuthorPopup(true);
  }

  function closeAuthorPopup(){
    setShowAddAuthorPopup(false);    
  }

  function closeEditPopup(){
    setShowEditAuthorPopup(false)
  }


  async function getUsers() {
    const response = await fetch('https://nameless-peak-43027.herokuapp.com/author', {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:localStorage.getItem('token')
      },
    });

    const data = await response.json();
    setAuthorData(data)
  }

  useEffect(() => {
  
      getUsers();
    }, []);  
    
    if(authorData === undefined){
      return null;
    }



  async function handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('about', about);
    formData.append('designation', designation);
    formData.append('twitter', twitter);
    formData.append('instagram', instagram);
    formData.append('linkedIN',linkedIN);
    formData.append('facebook', facebook)
    formData.append('avatar', avatar);


    await fetch("https://nameless-peak-43027.herokuapp.com/add-author", {
      method:"POST",
      headers: {
        Authorization:localStorage.getItem('token')
      },
      body: formData
    });

    setTimeout(() => {
      setAvatar("")
      setEmail("")
      setAbout("")
      setName("")
      setDesignation("")
      setTwitter("")  
      setInstagram("")
      setFacebook("")
      setLinkedIN("")
      setShowAddAuthorPopup(false);              
      getUsers();
    }, 1000);
  }



    //Handle Edit
    const handleSubmitEdit = (e) => {
      e.preventDefault();

      var formdata = new FormData();
      formdata.append("id", editAuhtor.id)
      formdata.append('name', (name) ? name : editAuhtor.name);
      formdata.append('email', (email) ? email : editAuhtor.email);
      formdata.append('about', (about) ? about : editAuhtor.about);
      formdata.append('instagram', (instagram) ? instagram : editAuhtor.instagram);
      formdata.append('facebook', (facebook) ? facebook : editAuhtor.facebook);
      formdata.append('linkedIN', (linkedIN) ? linkedIN : editAuhtor.linkedIN);
      formdata.append('designation', (designation) ? designation : editAuhtor.designation);
      formdata.append('twitter', (twitter) ? twitter : editAuhtor.twitter);
      avatar ?
      formdata.append('avatar',  avatar )
      :
      editAuhtor?.avatar?.files[0] ?
      formdata.append('avatar', editAuhtor?.avatar?.files[0]) :  formdata.append('avatar', "")



      axios.post('https://nameless-peak-43027.herokuapp.com/edit-author/',formdata,
      {
        headers:{
          "Accept": "application/json", 
          "Content-Type": `application/json; multipart/form-data; boundary=${formdata._boundary}`,
          Authorization:localStorage.getItem('token')
        }
      }).then((res)=>{
          if(res.data.status===200)
          {
            console.log("Edited")
            setTimeout(() => {
              setAvatar("")
              setEmail("")
              setAbout("")
              setName("")
              setDesignation("")
              setInstagram("")
              setFacebook("")
              setLinkedIN("")              
              setTwitter("")  
              setShowEditAuthorPopup(false);    
              window.location.reload(false);
              getUsers()          
            }, 10000);            
          }
          if(res.data.status===401)
        {
           history.push('/')
           window.location.reload()
        }
          else{
            console.log("Error")
          }  
      })      


    }
    
    const handleEdit = (id, dataObj) =>{
      setEditAuhtor(dataObj)
      setShowEditAuthorPopup(true);
    }
    
    // Delete Author
    function deleteAuthor(id){
      let data = {id};

      fetch("https://nameless-peak-43027.herokuapp.com/delete-author", {
          method:'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              Authorization:localStorage.getItem('token')
          },
          body: JSON.stringify(data)
      }).then((result)=>{
          // showAlert("Author Deleted")
          getUsers();
      })  
    }

  return (
    <>
      <Spinner animation="border" role="status" className="spinner">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    <div id='layoutSidenav_content'>

      {
        showAddAuthorPopup && 
        <>
          <div className="containerAddAuthor">
            <div className="AddAuthorBox">
              <div className="addFromText">
                <h2 style={{color:"#000"}}>Add Author below</h2>
                <button type="button" className="btn-close" aria-label="Close" onClick={closeAuthorPopup}></button>              

              </div>
              <div className="addAuthoForm">
                <form className='authorForm' onSubmit={handleSubmit}>
                <label htmlFor="authorName">Name:</label>
                <input type="text" name="name" defaultValue={(editAuhtor) ? editAuhtor.name : ''}  id="authorName" onChange={(e)=> setName(e.target.value)} required />
                <br />

                <label htmlFor="authorEmail">Email:</label>
                <input type="email" name="email" defaultValue={(editAuhtor) ? editAuhtor.email : ''}  id="authorEmail" onChange={(e)=> setEmail(e.target.value)} required />
                <br />

                <label htmlFor="authorDesignation">Designation:</label>
                <input type="text" name="designation" id="authorDesignation" defaultValue={(editAuhtor) ? editAuhtor.designation : ''} onChange= {(e)=> setDesignation(e.target.value)} required />
                <br />

                <label htmlFor="authorAbout">About:</label>
                <input type="text" name="about" id="authorAbout" defaultValue={(editAuhtor) ? editAuhtor.about : ''} onChange={(e)=> setAbout(e.target.value)} required />
                <br />


                <label htmlFor="authorTwitter">Twitter:</label>
                <input type="text" name="twitter" id="authorTwitter" defaultValue={(editAuhtor) ? editAuhtor.twitter : ''} onChange={(e)=> setTwitter(e.target.value)} />
                <br />



                <label htmlFor="aboutFacebook">Facebook:</label>
                <input type="text" name="facebook" id="aboutFacebook" defaultValue={(editAuhtor) ? editAuhtor.facebook : ''} onChange={(e)=> setFacebook(e.target.value)} />
                <br />


                <label htmlFor="aboutInstagram">Instagram:</label>
                <input type="text" name="instagram" id="aboutInstagram" defaultValue={(editAuhtor) ? editAuhtor.instagram : ''} onChange={(e)=> setInstagram(e.target.value)} />
                <br />


                <label htmlFor="aboutLinkedIn">LinkedIn:</label>
                <input type="text" name="linkedIN" id="aboutLinkedIn" defaultValue={(editAuhtor) ? editAuhtor.linkedIN : ''} onChange={(e)=> setLinkedIN(e.target.value)} />
                <br />


                <label htmlFor="authorAbout">Image:</label>
                <input type="file"  alt="Submit" onChange={(e) => setAvatar(e.target.files[0])} required />
                <br />
                <button type='submit' >Add Author</button>

                </form>
              </div>
            </div>

          </div>

        </>
      }

      {

        showEditAuthorPopup &&
        <>
          <div className="containerAddAuthor">
            <div className="AddAuthorBox">
              <div className="addFromText">
                <h2 style={{color:"#000"}}>Edit Author below</h2>
                <button type="button" className="btn-close" aria-label="Close" onClick={closeEditPopup}></button>              

              </div>

              <div className="addAuthoForm">
                <form className='authorForm' onSubmit={handleSubmitEdit}>
                <label htmlFor="authorName">Name:</label>
                <input type="text" name="name" defaultValue={(editAuhtor) ? editAuhtor.name : ''}  id="authorName" onChange={(e)=> setName(e.target.value)} required />
                <br />

                <label htmlFor="authorEmail">Email:</label>
                <input type="email" name="email" defaultValue={(editAuhtor) ? editAuhtor.email : ''}  id="authorEmail" onChange={(e)=> setEmail(e.target.value)} required />
                <br />

                <label htmlFor="authorDesignation">Designation:</label>
                <input type="text" name="designation" id="authorDesignation" defaultValue={(editAuhtor) ? editAuhtor.designation : ''} onChange= {(e)=> setDesignation(e.target.value)} required />
                <br />

                <label htmlFor="authorAbout">About:</label>
                <input type="text" name="about" id="authorAbout" defaultValue={(editAuhtor) ? editAuhtor.about : ''} onChange={(e)=> setAbout(e.target.value)} required />
                <br />


                <label htmlFor="authorTwitter">Twitter:</label>
                <input type="text" name="twitter" id="authorTwitter" defaultValue={(editAuhtor) ? editAuhtor.twitter : ''} onChange={(e)=> setTwitter(e.target.value)} />
                <br />



                <label htmlFor="aboutFacebook">Facebook:</label>
                <input type="text" name="facebook" id="aboutFacebook" defaultValue={(editAuhtor) ? editAuhtor.facebook : ''} onChange={(e)=> setFacebook(e.target.value)} />
                <br />


                <label htmlFor="aboutInstagram">Instagram:</label>
                <input type="text" name="instagram" id="aboutInstagram" defaultValue={(editAuhtor) ? editAuhtor.instagram : ''} onChange={(e)=> setInstagram(e.target.value)} />
                <br />


                <label htmlFor="aboutLinkedIn">LinkedIn:</label>
                <input type="text" name="linkedIN" id="aboutLinkedIn" defaultValue={(editAuhtor) ? editAuhtor.linkedIN : ''} onChange={(e)=> setLinkedIN(e.target.value)} />
                <br />


                <label htmlFor="authorAbout">Image:</label>
                <input type="file"  alt="Submit"  onChange={(e) => setAvatar(e.target.files[0])} />
                <br />
                <button type='submit'> Update Author</button>

                </form>
              </div>
            </div>

          </div>

        
        </>
      }



      <div className="headerAuthorSection">
        <div className="heading">
          <h1>Authors</h1>
        </div>
        <div className="addAuthorButton">
          <button onClick={handleAddAuthorClick}>Add Author +</button>
        </div>
      </div>
      <HorizontalDevider hrName="Authors" />
  

      <div className="section">
        <div className="container">
          <div className="columns">

          {
            authorData.data.map((eachAuthor, index) => {
              return(
                <div className="card">
                <div className="header">
                  <div className="editDelIcons">
                  <i onClick={()=> deleteAuthor(eachAuthor.id) } className="fa fa-trash-o" style={{fontSize:"24px", color:"#fff", cursor:"pointer"}}  ></i>
                  <i onClick={()=> handleEdit(eachAuthor.id, eachAuthor)} className="fa fa-edit" style={{fontSize:"20px", color:"#fff", cursor:"pointer"}}  ></i>
                  </div>

                  <div className="avatar">
                    <img src={`https://nameless-peak-43027.herokuapp.com/indivisual-author/${eachAuthor.id}` } alt={index} key={eachAuthor.id} />
                  </div>
                </div>
                <div className="card-body">
                  <div className="user-meta has-text-centered">

                    <h3 className="username">{eachAuthor.name}</h3>
                    <h4 className='position'>{eachAuthor.designation} </h4>
                  </div>
                  <div className="user-bio has-text-centered">
                    <p>{eachAuthor.about}</p>
                  </div>
                  
                  <div className="socialMediaBox">
                  

                  {
                    eachAuthor.twitter.length > 0 ?                   
                    <a href={eachAuthor.twitter}>
                    <i className="fa fa-twitter" style={{fontSize:"20px", color:"#000", cursor:"pointer"}}  ></i>
                    </a> : ''
                  }

                  {
                    eachAuthor.facebook.length > 0 ? 
                    <a href={eachAuthor.facebook}>
                    <i className="fa fa-facebook" style={{fontSize:"20px", color:"#000", cursor:"pointer"}}  ></i>
                    </a> : ''                    
                  }



                  {
                    eachAuthor.instagram.length > 0 ? 
                    <a href={eachAuthor.instagram}>
                    <i className="fa fa-instagram" style={{fontSize:"20px", color:"#000", cursor:"pointer"}}  ></i>
                    </a> : ''                    
                  }

                  {
                    eachAuthor.linkedIN.length > 0 ? 
                    <a href={eachAuthor.linkedIN}>
                    <i className="fa fa-linkedin" style={{fontSize:"20px", color:"#000", cursor:"pointer"}}  ></i>
                    </a> : ''                    
                  }

                  </div>
                  
                  <div className="action has-text-centered">
                    <a href="/" className="button is-small">View profile</a>
                  </div>
                </div>
              </div>

              )
            })
          }


          </div>
        </div>
      </div>

    
    </div>    
    </>
  )
}

export default Authors

