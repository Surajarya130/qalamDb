import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Newsletter = ()=>{

  const [newsletter,setNewsletter] = useState([]);

  useEffect(()=>{
    axios.get('https://nameless-peak-43027.herokuapp.com/newsletter',{
      headers:{
        "Content-Type": "multipart/form-data",
        "Accept": "application/json", 
      }
    }).then(res=>{
      if(res.data.status===200)
      {
        setNewsletter(res.data.data);
      }
      else{
        alert(res.data.message)
      }
    })
  },[])

    return (
        <>
        <div id="layoutSidenav_content">
         
          <h3 style={{paddingTop:'10px', fontSize:'28px'}}>
            <i class="fa fa-envelope" aria-hidden="true" ></i>&nbsp; Newsletter&nbsp;
            <span class="headInfo">
              (<span>{newsletter?newsletter.length:""}</span>)
            </span>
          </h3>
          <hr />
          <br />
          <div>
            <table width="100%" cellspacing="0" id="postsTable">
              <thead>
                <tr>
                  <td>S No.</td>
                  <td>Email</td>
                  <td>
                    Frequency
                  </td>
                  <td>Status</td>
                  <td>
                    Date
                  </td>
                </tr>
              </thead>
              <tbody id="postsData">
                {(newsletter)?newsletter.map((obj,idx)=>{
                  return(
                    <div key={obj.id}>
                    <tr>
                      <td>{idx+1}</td>
                      <td>{obj.email}</td>
                      <td>{obj.frequency}</td>
                      <td>{obj.status?"Active":"Disactive"}</td>
                      <td>{obj.date}</td>
                    </tr>
                    </div>
                  )
                }):null}
              </tbody>
            </table>
          </div>
        </div>
        </>
    )

}

export default Newsletter;
