import React from 'react'
import HorizontalDevider from '../../components/HorizontalDevider';

function Categories() {
  return (
    // <div id='layoutSidenav_content'>
    // <h1>Categories</h1>
    // <button className="my-2">Edit</button>
    // <button className="my-2">Popular</button>
    // <button className="my-2">Opinions</button>
    // <button className="my-2">Essay Series</button>
    // <button className="my-2">Essay Of The Month</button>
    // <button className="my-2">Photo Story</button>
    // <button className="my-2">Lates</button>
    // <button className="my-2">Video/Audio Podcast</button>
    // </div>


    <div id='layoutSidenav_content'>
    <h1>Categories</h1>
    <HorizontalDevider hrName="Categories" />
    <div className="subjectNames">


      <div className="subCategoryItem">
        <span>
          <a href="#">Edit</a>
        </span>
      </div>

      <div className="subCategoryItem">
        <span>
          <a href="#">Popular</a>
        </span>
      </div>

      <div className="subCategoryItem">
        <span>
          <a href="#">Opinions</a>
        </span>
      </div>

      <div className="subCategoryItem">
        <span>
          <a href="#">Essay Series</a>
        </span>
      </div>

      <div className="subCategoryItem">
        <span>
          <a href="#">Essay of The Month</a>
        </span>
      </div>



      <div className="subCategoryItem">
        <span>
          <a href="#">Photo Series</a>
        </span>
      </div>

      <div className="subCategoryItem">
        <span>
          <a href="#">Latest</a>
        </span>
      </div>            

      <div className="subCategoryItem">
        <span>
          <a href="#">Editor's Note</a>
        </span>
      </div>            

        


    </div>
    </div>    


  )
}

export default Categories