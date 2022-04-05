import React, { useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav } from "reactstrap";
import { useNavigate } from "react-router-dom";
import qSmImg from '../Qalam.svg'
import history from '../../../src/routes/history'


function Header () {
  let navigate = useNavigate();

    const [dropdownOpen , setDropdownOpen] = useState(false)
    const toggle = () => {
      setDropdownOpen(!dropdownOpen)
      }
      const toggleSidebar = () => {
        document.body.classList.toggle('showSidebar');
      }

      function logout() {
        localStorage.clear();
        history.push('/')
        window.location.reload();
    }
          
return(

    <Nav className="sb-topnav navbar navbar-expand navbar-dark bg-light">
        <a className="navbar-brand ps-3" href="/dashboard">
          <img src={qSmImg} alt="" style={{marginRight:"10px"}} />
          Qalam
          </a>
        <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0 sidebarToggle" id="sidebarToggle"  onClick={() =>{
              toggleSidebar()
            }}><i
            className="fa fa-bars"></i></button>
            <div className="ms-auto me-3 me-lg-4 header__user">
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle>
          <span>Saif :</span>  <i className="fa fa-user fa-fw"></i>
        </DropdownToggle>
        <DropdownMenu className="user__menu">
          <DropdownItem>  
      
                        <i className="fa fa-user"></i>
                         <span style={{paddingLeft: 10}}>Account</span></DropdownItem>
            <DropdownItem ><i className="fa fa-sign-out"></i><div onClick={() => logout()} style={{paddingLeft: 10}}>Logout</div></DropdownItem>

  
        </DropdownMenu>
      </Dropdown>
      </div>
        </Nav>
)
}
export default Header