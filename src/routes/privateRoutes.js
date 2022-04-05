import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AddAuthor from "../pages/AddAuthor";
import AddNewPost from "../pages/addNewPost.js/addNewPost";
import  EditPost  from "../pages/addNewPost.js/editPost";
import Authors from "../pages/dashboard/Authors";
import Categories from "../pages/dashboard/Categories";
// import EditPost from "../pages/addNewPost.js/editPost";
import Dashboard from "../pages/dashboard/dashboard";
import Topics from "../pages/dashboard/Topics";
import Login from "../pages/Login";
import MyPost from "../pages/myPost";
import Subjects from "../pages/Subjects";
import EditPage from '../pages/addNewPost.js/editPage'
import Newsletter from "../pages/newsletter";
import PageManage from "../pages/pageManage";
import history from './history';


export default function PrivateRoutes() {

  

    return (
        // <Router>
          <Routes history={history}>
            
            <Route exact path="/" element={<Login />}/>
            <Route  path="/dashboard" element={<Dashboard/>}/>
            <Route  path="/authors" element={<Authors />}/>
            <Route  path="/add-author" element={<AddAuthor />}/>
            <Route  path="/categories" element={<Categories />}/>
            <Route  path="/topics" element={<Topics />}/>
            <Route  path="/add-new-post" element ={<AddNewPost/>}/>
            {/* <Route exact path="/Edit" element={<EditPost/>}/> */}
            <Route  path="/:category" element={<EditPost/>}/>
            {/* <Route exact path="/Essay" element={<Reportage/>}/> */}
            <Route  path="/my-post" element={<MyPost/>}/>
            <Route  path="/subjects" element={<Subjects/>}/>
            <Route  path='/newsletter' element={<Newsletter/>}/>
            <Route  path="/editPage/:id" element={ <EditPage/>} />
            <Route  path="/page" element={ <PageManage/>} />
            {/* <Route exact path="/topics" element={<Subjects/>}/>
             */}
            
          </Routes>
      // </Router>

    )
}