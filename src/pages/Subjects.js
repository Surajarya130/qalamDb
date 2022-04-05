// import { set } from 'draft-js/lib/EditorState';
import React, { useEffect, useState } from 'react';
import HorizontalDevider from '../components/HorizontalDevider';
import artsLiterature from "../Images/CategoryIcons/artsLiterature.svg";
import economyBusiness from "../Images/CategoryIcons/economyBusiness.svg";
import environment from "../Images/CategoryIcons/environment.svg";
import lawJustice from "../Images/CategoryIcons/lawJustice.svg";
import mediaSocialMedia from "../Images/CategoryIcons/mediaSocialMedia.svg";
import policyPolitics from "../Images/CategoryIcons/policyPolitics.svg";
import scienceTech from "../Images/CategoryIcons/scienceTech.svg";
import scoietyCulture from "../Images/CategoryIcons/scoietyCulture.svg";
import sports from "../Images/CategoryIcons/sports.svg";

function Subjects() {

    
    const [subjectName, setSubjectName] = useState()

    // useEffect(() => {
    //     async function getUsers() {
    //       const response = await fetch('https://nameless-peak-43027.herokuapp.com/subject', {
    //         method: 'GET',
    //         headers: {
    //           accept: 'application/json',
    //         },
    //       });
    
    //       const data = await response.json();
    //       setSubjectName(data)
    //     }
    
    //     getUsers();
    //   }, []);  
      
      // if(subjectName === undefined){
      //   return null;
      // }


    
      const catDatas = [
        {
          title: "Arts & Literature",
          catImg: artsLiterature,
          catId: 1,
          link: "arts-and-literature",
        },
        {
          title: "Economy & Business",
          catImg: economyBusiness,
          catId: 2,
          link: "economy-and-business",
        },
        {
          title: "Environment",
          catImg: environment,
          catId: 3,
          link: "environment",
        },
        {
          title: "Law & Justice",
          catImg: lawJustice,
          catId: 4,
          link: "law-and-justice",
        },
        {
          title: "Media & Social Media",
          catImg: mediaSocialMedia,
          catId: 5,
          link: "media-and-socialmedia",
        },
        {
          title: "Policy & Politics",
          catImg: policyPolitics,
          catId: 6,
          link: "policy-and-politics",
        },
        {
          title: "Science & Tech",
          catImg: scienceTech,
          catId: 7,
          link: "science-and-tech",
        },
        {
          title: "Society & Culture",
          catImg: scoietyCulture,
          catId: 8,
          link: "society-and-culture",
        },
        {
          title: "Sports",
          catImg: sports,
          catId: 9,
          link: "sports",
        },
      ];



  return (
    <>

    <div id='layoutSidenav_content'>
    <h1>Subjects</h1>
    <HorizontalDevider hrName="Subjects" />
    <div className="subjectNames">

    {catDatas.map((individaulCat, catIndex) => {
      return (
        <div className="categoryItem" key={catIndex}>
          <img src={individaulCat.catImg} alt={individaulCat.catImg} />
          <span>
            <a href={individaulCat.link}>{individaulCat.title}</a>
          </span>
        </div>
      );
    })}

        {/* {
          subjectName.data.map((eachSub, index) => {
              return(
                <>
                  <img src = {img0} alt={eachSub.id} />
                  <button className='my-1'>{eachSub.name}</button>
                </>
                
              )
          })
        } */}
    </div>

    

    </div>
    </>
  )
}

export default Subjects