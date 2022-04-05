import React, { useState,useEffect } from 'react'
import { Button, Modal, Form} from 'react-bootstrap'
import axios from 'axios'
import Alert from '../../components/Alert'
import HorizontalDevider from '../../components/HorizontalDevider'
import history from '../../routes/history'


function Topics() {


  const [alert, setAlert] = useState(null)

  const showAlert = (message)=>{
    setAlert({
      msg:message,
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }



  //state to store topics
  const [topics,setTopics] = useState([]);

  //state to store topic
  const [topic,setTopic] = useState("");
  const [editTopic,setEditTopic] = useState();

  //state to store display/hide variable
  const [show, setShow] = useState(false);
  const [showEdit,setShowEdit] = useState(false)


  //functions to change display/hide state
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseEdit = () =>setShowEdit(false);
  const handleShowEdit = () =>setShowEdit(true);

  useEffect(()=>{
    axios.get('https://nameless-peak-43027.herokuapp.com/topic/',
    {
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json", 
        Authorization:localStorage.getItem('token')
      }
    }).then((res)=>{
        if(res.data.status===200)
        {
           setTopics(res.data.data)
        }
        else{
          showAlert("Error Occured")
        }  
    })
  },[])

  //revalidate function
  const revalidate = ()=>{
    axios.get('https://nameless-peak-43027.herokuapp.com/topic/',
    {
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json", 
        Authorization:localStorage.getItem('token')
      }
    }).then((res)=>{
        if(res.data.status===200)
        {
           setTopics(res.data.data)
        }
        else{
          showAlert("Error Occured")
        }  
    })
  }



  //add topic form submit handling
  const submitHandler = ()=>{

    const Data = {
      name:topic
    }

    axios.post('https://nameless-peak-43027.herokuapp.com/add-topic/',Data,
    {
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json", 
        Authorization:localStorage.getItem('token')
      }
    }).then((res)=>{
        if(res.data.status===200)
        {
           showAlert(res.data.message)
           revalidate()
           handleClose()
        }
        if(res.data.status===401)
        {
           history.push('/')
           window.location.reload()
        }
        else{
          showAlert(res.data.message)
        }  
    })
  }


  //function to send edit calls to backend and updating the list
  const submitEditHandler = ()=>{

    const Data = {
      id:editTopic.id,
      name:(topic)?topic:editTopic.name
    }

    axios.post('https://nameless-peak-43027.herokuapp.com/edit-topic/',Data,
    {
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json", 
        Authorization:localStorage.getItem('token')
      }
    }).then((res)=>{
        if(res.data.status===200)
        {
           showAlert(res.data.message)
           revalidate()
           handleCloseEdit()
        }
        else{
          showAlert(res.data.message)
        }  
    })
  }

  //function to delete a topic
  const deleteHandler = ()=>{
    const Data = {
      id:editTopic.id,
    }

    axios.post('https://nameless-peak-43027.herokuapp.com/delete-topic/',Data,
    {
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json", 
        Authorization:localStorage.getItem('token')
      }
    }).then((res)=>{
        if(res.data.status===200)
        {
           showAlert(res.data.message)
           revalidate()
           handleCloseEdit()
        }
        else{
          showAlert(res.data.message)
        }  
    })
  }


  //function to provide default value to edit modal and display the edit modal
  const editHandler = (obj)=>{
    setEditTopic(obj)
    handleShowEdit()
  }

  return (
    <>
    <Alert alert={alert} />
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Topic</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="Topic">
          <Form.Label>Topic</Form.Label>
          <Form.Control type="text" placeholder="Crime/News..." 
            onChange={(e)=>setTopic(e.target.value)}
          />
          </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={submitHandler} style={{width:'25%'}}
          >Save</Button>
        </Modal.Footer>

        {/* Modal for editing and deleting */}

      </Modal>
      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Topic</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="Topic">
          <Form.Label>Topic</Form.Label>
          <Form.Control type="text" 
            defaultValue={(editTopic)?editTopic.name:""}
            onChange={(e)=>setTopic(e.target.value)}
          />
          </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={submitEditHandler} style={{width:'25%'}}
          >Update</Button>
          <Button variant="outline-danger" onClick={deleteHandler} style={{width:'25%'}}
          >Delete</Button>
        </Modal.Footer>
      </Modal>

      {/* Markup syntax for topics section body */}

    {/* <div id='topicBoxArea'>
    <h1>Topics</h1>
    <HorizontalDevider hrName="Topics" />
    <div className='topic-add-topic'><Button variant="outline-dark" onClick={handleShow}>+ Add Topic</Button></div>
        <div class="add__new__post boxes" style={{marginTop:'10%'}}>
                <div class="topicsLists">
                    {topics.map((obj)=>{
                      return(
                        <div onClick={()=>editHandler(obj)} className='topic-list' key={obj.createdAt}><div>{obj.name}</div></div>
                      )
                    })}
                </div>
        </div>    
        
    </div> */}



<div id="layoutSidenav_content">
  <div className="headerAuthorSection">
    <div className="heading">
      <h1>Topics</h1>      
    </div>    
    <div className="addAuthorButton">
      <Button variant="outline-dark" onClick={handleShow}>+ Add Topic</Button>
    </div>    
  </div>
  <HorizontalDevider hrName="Topics" />  

  <div className="section">
    <div className="contaier">
        <div class="add__new__post boxes" style={{marginTop:'10%'}}>
            <div class="topicsLists">
                {topics.map((obj)=>{
                  return(
                    <div onClick={()=>editHandler(obj)} className='topic-list' key={obj.createdAt}><div>{obj.name}</div></div>
                  )
                })}
            </div>
        </div>    
    </div>
  </div>  
</div>

    </>
  )
}

export default Topics