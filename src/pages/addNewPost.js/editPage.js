import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import JoditEditor from "jodit-react";
import { useEffect, useState } from "react";
import { useHistory, useParams } from 'react-router-dom'
import history from '../../routes/history'
import { Form } from 'react-bootstrap'



const EditPage = (props)=>{

    const { id } = useParams()

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
  hidePoweredByJodit:true
	}


  //states to store subjects, topics, authors
  const [topics,setTopics] = useState([])
  const [authors,setAuthors] = useState([])
  const [subjects,setSubjects] = useState([])


  //states for form
  const [title,setTitle] = useState("")
  const [topic,setTopic] = useState("")
  const [category,setCategory] = useState("Edit")
  const [date,setDate] = useState("")
  const [excerpt,setExcerpt] = useState("")
  const [author,setAuthor] = useState("")
  const [author2,setAuthor2] = useState("")
  const [subject,setSubject] = useState("")
  const [file,setFile] = useState()
  const [article,setArticle] = useState()
  const [src,setSrc] = useState();
  const [paid,setPaid] = useState(false);

  useEffect(()=>{
      if(!file)
      {
        if(article)
        {
          setSrc(`https://nameless-peak-43027.herokuapp.com/indivisual-article/${article[0].id}`)
        }
      }
      else{
        setSrc(URL.createObjectURL(file))
      }
  },[file,article])
  
  const editor = React.useRef(null)
  const [content, setContent] = React.useState("")


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
        Authorization:localStorage.getItem('token')
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

    axios.get('https://nameless-peak-43027.herokuapp.com/article/',
    {
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json", 
        Authorization:localStorage.getItem('token')
      }
    }).then((res)=>{
        if(res.data.status===200)
        {
           var art = res.data.data.filter((obj)=>obj.id===window.location.href.split("/")[window.location.href.split("/").length-1]);
           setArticle(art);
           console.log(art)
           editor.current.innerHTML = art[0].post;
        }
        else{
          alert("Error Occured")
        }  
    })
  
  },[])

  useEffect(()=>{
    setAuthor(article?article[0].author1.id:"")
    setTitle(article?article[0].title:"")
    setContent(article?article[0].post:"")
    setTopic(article?article[0].topic:"")
    setDate(article?article[0].date:"")
    setExcerpt(article?article[0].excerpt:"")
    setSubject(article?article[0].subject:"")
    setPaid(article?article[0].paid:"")
  },[article])
  

  const  submitHandler=()=>{

    var data = new FormData();
    data.append('title', title);
    data.append('excerpt', excerpt);
    data.append('subject', subject);
    data.append('author1',author);
    //data.append('author2', author2);
    data.append('categories', category );
    data.append('status', '1');
    data.append('post', content);
    data.append('topic', topic);
    data.append('date', date);
    data.append('id', (article)?article[0].id:"");
    data.append('paid',paid)
    data.append('mediaData', file);

    // Display the key/value pairs
for (var pair of data.entries()) {
  console.log(pair[0]+ ', ' + pair[1]); 
}

console.log(file)

    axios.post('https://nameless-peak-43027.herokuapp.com/edit-article/',data,
    {
      headers:{
        "Content-Type": "multipart/form-data",
        "Accept": "application/json", 
        Authorization:localStorage.getItem('token')
      }
    }).then((res)=>{
        if(res.data.status===200)
        {
           alert(res.data.message)
        }
        if(res.data.status===401)
        {
           history.push('/')
           window.location.reload()
        }
        // else{
        //   alert("Error Occured")
        // }  
    })
  }

  console.log((article)?article[0]:"")

    return (
      <>
      <div className="edit-post-container">
        <div className="edit-post-subcontainer">
        <div className="edit-post-back-link">
            <h3>
               <Link to="/my-post">
                <i
                  className="fa fa-chevron-left"
                  aria-hidden="true"
                  title="Back to Categories"
                ></i>
              </Link>
              </h3>
              <div style={{fontSize:"20px", fontWeight:"600"}}>
              &nbsp; Edit Article
              </div>
            </div>
            <hr/>
            <div className="edit-topic-form-area">
            <div className="newPost">
            <input
                  type="text"
                  name="category"
                  disabled=""
                  defaultValue={article?article[0].categories:""}
                  title="Cannot be changed"
                  className="input__edit"
                  style={{fontSize:"24px"}}
                />
                 <textarea
                  name="title"
                  placeholder="Title"
                  maxlength="54"
                  title="Maximum 54 Characters"
                  required
                  style={{fontSize:"38px"}}
                  defaultValue={(article)?article[0].title:""}
                  onChange={(e)=>setTitle(e.target.value)}
                ></textarea>
                 <textarea
                  name="excerpt"
                  placeholder="Excerpt"
                  // onKeyDown="autoResize(this);"
                  // onload="autoResize(this);"
                  // onkeypress="return event.charCode != 13"
                  maxlength="196"
                  defaultValue={(article)?article[0].excerpt:""}
                  title="Maximum 196 Characters"
                  style={{fontSize:"30px"}}
                  onChange={(e)=>setExcerpt(e.target.value)}
                ></textarea>
                 <div className="d-flex justify-content-center flex-wrap align-items-center" >
                   <span className="by_text">Select Subject</span>
                   <select name="subject" title="Click to change Subject"  onChange={(e)=>setSubject(e.target.value)}>
                       {subjects.map((obj)=>{
                         return( <option value={obj.name} key={obj.id} selected={article?(obj.name===article[0].subject):false}>{obj.name}</option>)
                      })}
                  </select>
                  <br />
                  <span className="by_text">Add Topic</span>
                  <select name="author" title="Click to change Subject"  onChange={(e)=>setTopic(e.target.value)}>
                    {topics.map((obj)=>{
                      return (  <option value={obj.name} key={obj.id} selected={(article)?(article[0].topic===obj.name):false}>{obj.name}</option>)
                    })}
                  </select>

                  <i className="dot"></i>
                  <span className="by_text">by</span>
                  <select name="author" title="Click to change Subject"  onChange={(e)=>setAuthor(e.target.value)}>
                    {authors.map((obj)=>{
                      return (<option value={obj.id} key={obj.id} selected={(article)?(article[0].author1.name===obj.name):false}>{obj.name}</option> )
                    })}
                  </select>
                  {/* <i className="dot"></i>
                  <span className="by_text">by</span>
                  <select name="author2" title="Click to change Subject" defaultValue={(article)?article[0].author2:""} onChange={(e)=>setAuthor2(e.target.value)}>
                    {authors.map((obj)=>{
                      return (<option value={obj.name} key={obj.id}>{obj.name}</option> )
                    })}
                  </select> */}
                  <i className="dot"></i>
                  <input
                    type="date"
                    name="date"
                    title="Change Date"
                    defaultValue={(article)?article[0].date:""}
                    onChange={(e)=>setDate(e.target.value)}
                  ></input>
                  <i className="dot"></i>
                  <span className="by_text">Type Of Article</span>
                  <select name="article_type" title="Click to change article type"
                  onChange={(e)=>setPaid(e.target.value)}>
                    <option value={true} selected={(article)?(article[0].paid===true):false}>Paid</option>
                    <option value={false} selected={(article)?(article[0].paid===false):false}>Free</option>                    
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
              <Form.Control as="textarea" rows={3} defaultValue={(quote)?quote:""} onChange={(e)=>setQuote(e.target.value)}/>
             </Form.Group>
            </Form>
              </div> */}
            <div className="edit-post-image">
              <img src={src}
              />
              </div>
              {(article)?
              (article[0].categories==="Photo Series"?null:(
                <JoditEditor
                ref={editor}
                value={content}
                config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => {}}
              />
              )):null
            }   
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

export default EditPage;

