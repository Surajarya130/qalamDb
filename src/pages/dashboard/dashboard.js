import React, {useEffect, useState} from "react";
import axios from "axios";
import HorizontalDevider from "../../components/HorizontalDevider";

function Dashboard() {


  const [articles,setArticles] = useState([])
  const [topics,setTopics] = useState([]);
  const [authorData, setAuthorData] = useState()
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
    
    axios.get('https://nameless-peak-43027.herokuapp.com/article/',
    {
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json", 
      }
    }).then((res)=>{
        console.log(res)
        if(res.data.status===200)
        {
           setArticles(res.data.data)
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
      }
    }).then((res)=>{
        if(res.data.status===200)
        {
           setTopics(res.data.data)
        }
        else{
          console.log("Error")
        }  
    })



      getUsers();
    }, []);  
    
    if(authorData === undefined){
      return null;
    }
  


  return (


    <div id="layoutSidenav_content">
      <div className="dashBHeading">
        <h1>
          <i className="fa fa-tachometer" aria-hidden="true"></i>&nbsp; Dashboard
        </h1>
      </div>
      <HorizontalDevider hrName="Dashboard" />
      <div className="dashboardStickers">

        <div>
          <h2>Total Posts</h2>
          <p>No of Articles: {articles.length}</p>
        </div>


        <div>
          <h2>Authors</h2>
          <p>No of Authors: {authorData.data.length}</p>
        </div>


        <div>
          <h2>Subject</h2>
          <p>No. Of Subjects: 9</p>
        </div>


        <div>
          <h2>Categories</h2>
          <p>No. Of Categories: 8</p>
        </div>

        <div>
          <h2>Topic</h2>
          <p>No. Of Topics: {topics.length}</p>
        </div>



      </div>

    </div>

  );
}
export default Dashboard;
