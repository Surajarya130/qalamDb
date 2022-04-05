import React, { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import HorizontalDevider from "../../components/HorizontalDevider"

function AddNewPost () {

    const [categories,setCategories] = useState([])

    console.log(localStorage.getItem('token'))

    useEffect(()=>{

        axios.get('https://nameless-peak-43027.herokuapp.com/categories/',
        {
          headers:{
            "Content-Type": "application/json",
            "Accept": "application/json", 
            "Authorization":localStorage.getItem('token')
          }
        }).then((res)=>{
            console.log(res)
            if(res.data.status===200)
            {
               setCategories(res.data.data)
            }
            else{
              alert("Error Occured")
            }  

       }).catch(err=>console.log(err))

        // fetch('https://nameless-peak-43027.herokuapp.com/categories/',{
        //     method: 'GET', // *GET, POST, PUT, DELETE, etc.
        //    // mode: 'cors', // no-cors, *cors, same-origin
        //     headers: {
        //     'Content-Type': 'application/json',
        //     'Authorization': localStorage.getItem('token')
        //     },
        // }).then(response => response.json())
        // .then(data => console.log(data));

    },[])


   return (
       <>
       
    <div id="layoutSidenav_content">
  
        <div className="container-fluid px-4">
            <h1 className="mt-4">+ Add New Post</h1>
            <HorizontalDevider hrName="Add New Post" />
            <div className="add__new__post boxes">
                <h3>Choose Category:</h3>

                <div className="d-flex flex-wrap w-100 gap-4" style={{alignItems:"center"}}>
                {categories.map((obj)=>{
                    return(
                        <Link to={"/"+obj.name} >
                        <div style={{fontSize:"17px"}}>{obj.name}</div>
                    </Link>
                    )
                })}
            

                </div>
            
            </div>
        
    
        </div>
   
</div>
</>
   )
}
export default AddNewPost