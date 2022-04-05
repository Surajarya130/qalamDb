import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Alert from '../../components/Alert'

function Authors() {
  let navigate = useNavigate
  const [authorData, setAuthorData] = useState()
  const [alert, setAlert] = useState(null)
  
  

  const showAlert = (message)=>{
      setAlert({
        msg:message,
      })
      setTimeout(() => {
        setAlert(null)
      }, 2000);
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
          showAlert("Author Deleted")
          getUsers();
      })  
    }

    function ediAuthor(id){
      console.log(id)
      navigate("/add-author", { replace: true });
      // window.location.href='/add-author';
      console.log(authorData,"Suraj")
    }

    // function openEditPopup{

    // }


  return (
    <>
    <div id='layoutSidenav_content'>
      <Alert alert={alert} />      
      <div className="headerAuthorSection">
        <div className="heading">
          <h1>Authors</h1>
        </div>
        <div className="addAuthorButton">
          <button>Add Author +</button>
        </div>
      </div>


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
              <i onClick={()=> ediAuthor(eachAuthor.id) } className="fa fa-edit" style={{fontSize:"20px", color:"#fff", cursor:"pointer"}}  ></i>
              </div>

              <div className="avatar">
                <img src={`https://nameless-peak-43027.herokuapp.com/indivisual-author/${eachAuthor.id}` } alt="" />
              </div>
            </div>
            <div className="card-body">
              <div className="user-meta has-text-centered">

                <h3 className="username">{eachAuthor.name}</h3>
                <h4 className='position'>{eachAuthor.designation} </h4>
                {/* <h5 className="position">{eachAuthor.phone}</h5> */}
              </div>
              <div className="user-bio has-text-centered">
                <p>{eachAuthor.about}</p>
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