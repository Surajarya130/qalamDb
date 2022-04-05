import React, {useState} from "react";

function Sidebar () {
    const [dropdownOpen , setDropdownOpen] = useState(false)

    const toggle = () => {
      setDropdownOpen(!dropdownOpen)
      }

    return (
  
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        <a className="nav-link" href="/dashboard">
                            <div className="sb-nav-link-icon"><i className="fa fa-tachometer"></i></div>
                            Dashboard
                        </a>

                        <div className="nav-link collapsed"  onClick={() => {
                                toggle()
                            }} style={{cursor: "pointer"}}>
                            <div className="sb-nav-link-icon"><i className="fa fa-columns"></i></div>
                            Posts
                            <div className="sb-sidenav-collapse-arrow"><i className="fa fa-angle-down dark text-dark"></i></div>
                        </div>
                        {dropdownOpen ?
                            <div className="" >
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link small-btn" href="/add-new-post">Add New Post</a>
                                    <a className="nav-link small-btn" href="/my-post">My Posts</a>
                                    <a className="nav-link small-btn" href="#">All Posts</a>
                                </nav>
                            </div>
                        : ""
                        }


                        <a className="nav-link" href="/subjects">
                            <div className="sb-nav-link-icon"><i className="fa fa-hashtag"></i></div>
                            Subjects
                        </a>
                        <a className="nav-link" href="/categories">
                            <div className="sb-nav-link-icon"><i className="fa fa-sitemap"></i></div>
                            Categories
                        </a>
                        <a className="nav-link" href="/topics">
                            <div className="sb-nav-link-icon"><i className="fa fa-sitemap"></i></div>
                            Topics
                        </a>


                        <a className="nav-link" href="/authors">
                            <div className="sb-nav-link-icon"><i className="fa fa-calendar"></i></div>
                            Authors
                        </a>



                        <a className="nav-link" href="#">
                            <div className="sb-nav-link-icon"><i className="fa fa-calendar"></i></div>
                            Subscription
                        </a>
                        <a className="nav-link" href="/newsletter">
                            <div className="sb-nav-link-icon"><i className="fa fa-envelope"></i></div>
                            Newsletter
                        </a>
                        <a className="nav-link" href="/page">
                            <div className="sb-nav-link-icon"><i className="fa fa-window-restore"></i></div>
                            Pages
                        </a>

                        <a className="nav-link" href="#">
                            <div className="sb-nav-link-icon"><i className="fa fa-image"></i></div>
                            Media Library
                        </a>

                    </div>
                </div>
            </nav>
     
 
    )
}
export default Sidebar;