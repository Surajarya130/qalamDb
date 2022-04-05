import React, { useState,useEffect } from "react";
import axios from 'axios'
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom"
import HorizontalDevider from "../components/HorizontalDevider";



function MyPost() {

  const [articles,setArticles] = useState([])
  const [loading,setLoading] = useState(false)
 
  useEffect(()=>{

    setLoading(true)
    axios.get('https://nameless-peak-43027.herokuapp.com/article/',
    {
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json", 
        Authorization:localStorage.getItem('token')
      }
    }).then((res)=>{
        console.log(res)
        setLoading(false)
        if(res.data.status===200)
        {
           setArticles(res.data.data)
        }
        else{
          alert("Error Occured")
        }  
    })

  },[])


  return (
    <>
    {(loading)?(<Spinner animation="border" role="status" className="spinner">
    <span className="visually-hidden">Loading...</span>
        </Spinner>):null}
    <div id="layoutSidenav_content">
     
      <h1 style={{paddingTop:'10px'}}>
        <i class="fa fa-id-badge" aria-hidden="true" ></i>&nbsp; My Posts &nbsp;
        <span class="headInfo">
          (<span>{articles.length}</span>)
        </span>
      </h1>
      <HorizontalDevider hrName="My Posts" />
      <br />
      <div>
        <table width="100%" cellspacing="0" id="postsTable">
          <thead>
            <tr>
              <td>S No.</td>
              <td>Title</td>
              <td>
                <select value="kk">
                    <option value="aadhaar">Categories</option>                    
                    <option value="aadhaar">Climate Change</option>
                    <option value="aadhaar">Architecture</option>
                    <option value="aadhaar">Business</option>
                    <option value="aadhaar">Conflict</option>
                    <option value="aadhaar">America</option>
                    <option value="aadhaar">Censorship</option>
                    <option value="aadhaar">Climate Change</option>
                </select>
              </td>
              <td>Author</td>
              <td>Status</td>
              <td>
                <select onchange="selectDate(this)">
                  <option value="all">All Dates</option>
                  <option value="2020-04">Apr - 2020</option>
                  <option value="2020-03">Mar - 2020</option>
                  <option value="2020-02">Feb - 2020</option>
                  <option value="2020-01">Jan - 2020</option>
                  <option value="2019-12">Dec - 2019</option>
                  <option value="2019-11">Nov - 2019</option>
                  <option value="2019-10">Oct - 2019</option>
                  <option value="2019-09">Sep - 2019</option>
                  <option value="2019-08">Aug - 2019</option>
                  <option value="2019-07">Jul - 2019</option>
                </select>
              </td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody id="postsData">
            {articles.map((obj,idx)=>{
              return(
                <tr key={obj.createdAt} className="mypost-posts-body">
                <td>{idx+1}</td>
                <td >
                  <a
                    target="_blank"
                    href="/my-post"
                  >
                    {obj.title}
                  </a>
                </td>
                <td>
                  <a href="../../reportage" target="_blank">
                    {obj.categories}
                  </a>
                </td>
                <td>
                  <a href="../../author/20" target="_blank">
                   {obj.author1.name}
                  </a>
                  <br />
                  <a href="../../author/0" target="_blank"></a>
                </td>
                <td>
                  <p class="pNotify">
                    <small >Published</small>
                  </p>
                  <span >by You</span>
                </td>
                <td>
                  <small>{obj.date}</small>
                </td>
                <td> 
                    <button title="Edit">
                    <Link to={"/editPage/"+obj.id}>
                    <i class="fa fa-pencil" aria-hidden="true"></i>
                     </Link>  
                    </button>
                </td>
              </tr>
              )
            })}
           
            {/* <tr>
              <td>2</td>
              <td>
                <a
                  target="_blank"
                  href="https://fountainink.in/reportage/born-to-play-the-64"
                >
                  The undefeated
                </a>
              </td>
              <td>
                <a href="../../reportage" target="_blank">
                  Reportage
                </a>
              </td>
              <td>
                <a href="../../author/20" target="_blank">
                  Suresh P. Thomas
                </a>
                <br />
                <a href="../../author/0" target="_blank"></a>
              </td>
              <td>
                <p class="pNotify">
                  <small>Published</small>
                </p>
                <span>by You</span>
              </td>
              <td>
                <small>Sep 12, 2018</small>
              </td>
              <td>
                <a
                  target="_blank"
                  href="./post.php?category=reportage&amp;name=reportage&amp;edit=952"
                >
                  <button title="Edit">
                    <i class="fa fa-pencil" aria-hidden="true"></i>
                  </button>
                </a>
              </td>
            </tr>

            <tr>
              <td>3</td>
              <td>
                <a
                  target="_blank"
                  href="https://fountainink.in/reportage/born-to-play-the-64"
                >
                  Live Long Mr. Stark
                </a>
              </td>
              <td>
                <a href="../../reportage" target="_blank">
                    Arts & Literature
                </a>
              </td>
              <td>
                <a href="../../author/20" target="_blank">
                  Monica Jha
                </a>
                <br />
                <a href="../../author/0" target="_blank"></a>
              </td>
              <td>
                <p class="pNotify">
                  <small>Published</small>
                </p>
                <span>by You</span>
              </td>
              <td>
                <small>Feb 22, 2022</small>
              </td>
              <td>
                <a
                  target="_blank"
                  href="./post.php?category=reportage&amp;name=reportage&amp;edit=952"
                >
                  <button title="Edit">
                    <i class="fa fa-pencil" aria-hidden="true"></i>
                  </button>
                </a>
              </td>

            </tr>

            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}
export default MyPost;
