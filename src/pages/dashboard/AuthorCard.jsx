import React from 'react'



function AuthorCard() {
  return (
    <>
    <div className="section">
    <div className="container">
    <div className="columns">

        <div className="card">
        <div className="header">
        <div className="editDelIcons">
        <i className="fa fa-trash-o" style={{fontSize:"24px", color:"#fff", cursor:"pointer"}}  ></i>
        <i className="fa fa-edit" style={{fontSize:"20px", color:"#fff", cursor:"pointer"}}  ></i>
        </div>

        <div className="avatar">
            <img src={`https://nameless-peak-43027.herokuapp.com/indivisual-author/621c84e856a7fb00165e358a` } alt="" />
        </div>
        </div>
        <div className="card-body">
        <div className="user-meta has-text-centered">

            <h3 className="username">Suraj</h3>
            <h4 className='position'>Developer </h4>
            {/* <h5 className="position">{eachAuthor.phone}</h5> */}
        </div>
        <div className="user-bio has-text-centered">
            <p>India is great </p>
        </div>
        <div className="action has-text-centered">
            <a href="/" className="button is-small">View profile</a>
        </div>
        </div>
    </div>


    </div>
    </div>

    </div>    
    
    </>
  )
}

export default AuthorCard