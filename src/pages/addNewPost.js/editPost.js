import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import JoditEditor from "jodit-react";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

import history from '../../routes/history'
import { Form } from 'react-bootstrap'

import HorizontalDevider from "../../components/HorizontalDevider";



const EditPost = (props)=>{

  const config = {
		readonly: false, // all options from https://xdsoft.net/jodit/doc/
    enableDragAndDropFileToEditor: true,
    uploader: {
      insertImageAsBase64URI: true
    },
    placeholder: '',
    controls: {
      font: {
        list: {
          'Heebo, sans-serif': 'Roboto'
        }
      },
	},
  removeButtons:['fullsize','preview'],
  hidePoweredByJodit:true,
  extraButtons:[{
    name: 'OnlyParagraph',
    icon: 'fa fa-superscript',
    isActive:true,
    exec: (editor) => {
      var selection = editor.selection;
      console.log(editor.selection.current(), "selected text")
      var string = editor.selection.current()
     var html = `<span style="color:blue;">${string}</span>`
      console.log(html);
      editor.selection.remove();
      editor.selection.insertHTML(html);
    }
  }]
}


  const editor = React.useRef(null)
	const [content, setContent] = React.useState('')

  //states to store subjects, topics, authors
  const [topics,setTopics] = useState([])
  const [authors,setAuthors] = useState([])
  const [subjects,setSubjects] = useState([])

  //states for form
  const [title,setTitle] = useState("")
  const [topic,setTopic] = useState("")
  const [category,setCategory] = useState(window.location.href.split("/")[window.location.href.split("/").length-1].replaceAll("%20"," "))
  const [date,setDate] = useState("")
  const [excerpt,setExcerpt] = useState("")
  const [author,setAuthor] = useState("")
  const [author2,setAuthor2] = useState("")
  const [subject,setSubject] = useState("")
  const [file,setFile] = useState("")
  const [loading,setLoading] = useState(false)
  const [paid, setPaid] = useState(false)
  

  useEffect(()=>{
       axios.get('https://nameless-peak-43027.herokuapp.com/subject/',
    {
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json", 
        Authorization:localStorage.getItem('token')
      }
    }).then((res)=>{
        if(res.data.status===200)
        {
           setSubjects(res.data.data)
        }
        else{
          alert("Error Occured")
        }  
    })

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
          alert("Error Occured")
        }  
    })

    axios.get('https://nameless-peak-43027.herokuapp.com/author/',
    {
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json", 
       // Authorization:localStorage.getItem('token')
      }
    }).then((res)=>{
        if(res.data.status===200)
        {
           setAuthors(res.data.data)
        }
        else{
          alert("Error Occured")
        }  
    })
  },[])

 
  


  const  submitHandler=()=>{

    setLoading(true)

    var data = new FormData();
    data.append('title', title);
    data.append('excerpt', excerpt);
    data.append('subject', subject);
    data.append('author1', author);
    //data.append('author2', author2);
    data.append('categories', category );
    data.append('status', '1');
    data.append('post', (window.location.href.split("/")[window.location.href.split("/").length-1].replaceAll("%20"," ")==="Photo Series")?"post":content);
    data.append('topic', topic);
    data.append('date', date);
    data.append('paid',paid);
    data.append('mediaData', file);


    for (var pair of data.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
    }

    axios.post('https://nameless-peak-43027.herokuapp.com/add-article/',data,
    {
      headers:{
        "Content-Type": "multipart/form-data",
        "Accept": "application/json", 
        Authorization:localStorage.getItem('token')
        //x-access-token
      }
    }).then((res)=>{
        if(res.data.status===200)
        {
           setLoading(false)
           alert(res.data.message)
           
        }
        if(res.data.status===401)
        {
           setLoading(false)
           history.push('/')
           window.location.reload()
        }
        // else{
        //   alert("Error Occured")
        //   setLoading(false)
        // }  
        setLoading(false)
    }).catch((err)=>setLoading(false))
  }



    return (
      <>
      {(loading)?(<Spinner animation="border" role="status" className="spinner" style={{zIndex:"9999"}}>
    <span className="visually-hidden">Loading...</span>
        </Spinner>):null}
      <div className="edit-post-container">
        <div className="edit-post-subcontainer">
        <div className="edit-post-back-link">
            <h3>
               <Link to="/add-new-post">
                <i
                  className="fa fa-chevron-left"
                  aria-hidden="true"
                  title="Back to Categories"
                ></i>
                Add {category}
              </Link>
              </h3>
            </div>
            <HorizontalDevider hrName={category} />

            <div className="edit-topic-form-area">
            <div className="newPost">
            <input
                  type="text"
                  name="category"
                  value={category}
                  disabled=""
                  title="Cannot be changed"
                  className="input__edit"
                  style={{fontSize:"24px"}}
                  onChange={(e)=>setCategory(e.target.value)}
                />
                 <textarea
                  name="title"
                  placeholder="Title"
                  maxlength="54"
                  title="Maximum 54 Characters"
                  required
                  style={{fontSize:"38px"}}
                  onChange={(e)=>setTitle(e.target.value)}
                ></textarea>
                 <textarea
                  name="excerpt"
                  placeholder="Excerpt"
                  // onKeyDown="autoResize(this);"
                  // onload="autoResize(this);"
                  // onkeypress="return event.charCode != 13"
                  maxlength="196"
                  title="Maximum 196 Characters"
                  style={{fontSize:"30px"}}
                  onChange={(e)=>setExcerpt(e.target.value)}
                ></textarea>
                 <div className="d-flex justify-content-center flex-wrap align-items-center" style={{fontSize:"30px"}}>
                   <span className="by_text">Select Subject</span>
                   <select name="subject" title="Click to change Subject" onChange={(e)=>setSubject(e.target.value)}>
                       {subjects.map((obj)=>{
                         return( <option value={obj.name} key={obj.id}>{obj.name}</option>)
                      })}
                  </select>
                  <br />
                  <span className="by_text">Add Topic</span>
                  <select name="author" title="Click to change Subject" onChange={(e)=>setTopic(e.target.value)}>
                    {topics.map((obj)=>{
                      return (  <option value={obj.name} key={obj.id}>{obj.name}</option>)
                    })}
                  </select>

                  <i className="dot"></i>
                  <span className="by_text">by</span>
                  <select name="author" title="Click to change Subject" onChange={(e)=>setAuthor(e.target.value)}>
                    {authors.map((obj)=>{
                      return (<option value={obj.id} key={obj.id}>{obj.name}</option> )
                    })}
                  </select>
                  {/* <i className="dot"></i>
                  <span className="by_text">by</span>
                  <select name="author" title="Click to change Subject" onChange={(e)=>setAuthor2(e.target.value)}>
                    {authors.map((obj)=>{
                      return (<option value={obj.name} key={obj.id}>{obj.name}</option> )
                    })}
                  </select> */}
                  <i className="dot"></i>
                  <input
                    type="date"
                    name="date"
                    title="Change Date"
                    onChange={(e)=>setDate(e.target.value)}
                  ></input>
                  <i className="dot"></i>
                  <span className="by_text">Type Of Article</span>
                  <select name="article_type" title="Click to change article type" onChange={(e)=>setPaid(e.target.value)}>
                    <option value={true}>Paid</option>
                    <option value={false}>Free</option>                    
                  </select>
                  <input
                    type="file"
                    name="headerImage"
                    title="Header Image"
                    onChange={(e)=>setFile((e.target.files[0]))}
                  ></input>
                  
                </div>
            </div>
            {/* <div>
            <Form>
             <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Quote</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={(e)=>setQuote(e.target.value)}/>
             </Form.Group>
            </Form>
            </div> */}
            <div className="edit-post-image">
              <img src={(file?URL.createObjectURL(file):null)}/>
              </div>
              {(window.location.href.split("/")[window.location.href.split("/").length-1].replaceAll("%20"," ")==="Photo Series")?null:(
                            <JoditEditor
                            ref={editor}
                            value={content}
                            config={config}
                            tabIndex={1} // tabIndex of textarea
                            onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                            onChange={newContent => {}}
                      />
              )}
                </div>
                <div className="btn-wrap d-flex justify-content-center align-items-baseline gap-3 my-3 edit-post-button" >
                  <button className="save" >Save as Draft</button>
                   <button id="submitButton" onClick={()=>submitHandler()}>Publish</button>
                 </div>
            </div>
           
      </div>
      
    </>
    );
  
}

export default EditPost;

