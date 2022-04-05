import React, { useEffect, useState } from 'react'
import { Button, Modal, Form, Badge} from 'react-bootstrap'
import axios from 'axios'


const PageManage = ()=>{

    const [pageData,setPageData] = useState()
    const [quoteData,setQuoteData] = useState()
    const [quoteData2,setQuoteData2] = useState()
    const [graphData,setGraphData] = useState()
    const [contributorData, setContributorData] = useState();

    useEffect(()=>{

      axios.post('https://nameless-peak-43027.herokuapp.com/page-data/',{
        id:"622f0171e929d22150d9dbcc"
      },
        {
        headers:{
          "Content-Type": "application/json",
          "Accept": "application/json",
        }
      }).then((res)=>{
        console.log(res)
        if(res.status===200)
        {
            setPageData(res.data.data)
        }
        else{
          alert("Error")
        }
      })
      .catch((err)=>console.log(err))

      axios.post('https://nameless-peak-43027.herokuapp.com/get-quote',{
        id:"622f0171e929d22150d9dbcc"
      },
        {
        headers:{
          "Content-Type": "application/json",
          "Accept": "application/json",
           Authorization:localStorage.getItem('token')
        }
      }).then((res)=>{
        if(res.status===200)
        {
            setQuoteData(res.data.data)
        }
        else{
          alert("Error")
        }
      })
      .catch((err)=>console.log(err))
      
      axios.post('https://nameless-peak-43027.herokuapp.com/get-qna-quote',{
        id:"622f0171e929d22150d9dbcc"
      },
        {
        headers:{
          "Content-Type": "application/json",
          "Accept": "application/json",
           Authorization:localStorage.getItem('token')
        }
      }).then((res)=>{
        if(res.status===200)
        {
            setQuoteData2(res.data.data)
        }
        else{
          alert("Error")
        }
      })
      .catch((err)=>console.log(err))

      axios.post('https://nameless-peak-43027.herokuapp.com/get-contributor/',{
        id:"622f0171e929d22150d9dbcc"
      },
        {
        headers:{
          "Content-Type": "application/json",
          "Accept": "application/json",
        }
      }).then((res)=>{
        console.log(res)
        if(res.status===200)
        {
            setContributorData(res.data.data)
        }
        else{
          alert("Error")
        }
      })
      .catch((err)=>console.log(err))

      axios.post('https://nameless-peak-43027.herokuapp.com/get-graph-data/',{
        id:"622f0171e929d22150d9dbcc"
      },
        {
        headers:{
          "Content-Type": "application/json",
          "Accept": "application/json",
        }
      }).then((res)=>{
        console.log(res)
        if(res.status===200)
        {
            setGraphData(res.data.data)
        }
        else{
          alert("Error")
        }
      })
      .catch((err)=>console.log(err))


    },[])

    const revalidateQuote = ()=>{

      axios.post('https://nameless-peak-43027.herokuapp.com/get-quote',{
        id:"622f0171e929d22150d9dbcc"
      },
        {
        headers:{
          "Content-Type": "application/json",
          "Accept": "application/json",
           Authorization:localStorage.getItem('token')
        }
      }).then((res)=>{
        if(res.status===200)
        {
            setQuoteData(res.data.data)
        }
        else{
          alert("Error")
        }
      })
      .catch((err)=>console.log(err))
      
      axios.post('https://nameless-peak-43027.herokuapp.com/get-qna-quote',{
        id:"622f0171e929d22150d9dbcc"
      },
        {
        headers:{
          "Content-Type": "application/json",
          "Accept": "application/json",
           Authorization:localStorage.getItem('token')
        }
      }).then((res)=>{
        if(res.status===200)
        {
            setQuoteData2(res.data.data)
        }
        else{
          alert("Error")
        }
      })
      .catch((err)=>console.log(err))
      
    }

    const revalidate = ()=>{
      axios.post('https://nameless-peak-43027.herokuapp.com/page-data/',{
        id:"622f0171e929d22150d9dbcc"
      },{
        headers:{
          "Content-Type": "application/json",
            "Accept": "application/json",
          //  Authorization:localStorage.getItem('token')
        }
      }).then((res)=>{
        if(res.status===200)
        {
            setPageData(res.data.data)
            localStorage.setItem('id',res.data.data.id)
        }
        else{
          alert("Error")
        }
      })
      .catch((err)=>console.log(err))

      axios.post('https://nameless-peak-43027.herokuapp.com/get-contributor/',{
        id:"622f0171e929d22150d9dbcc"
      },
        {
        headers:{
          "Content-Type": "application/json",
          "Accept": "application/json",
        }
      }).then((res)=>{
        if(res.status===200)
        {
            setContributorData(res.data.data)
        }
        else{
          alert("Error")
        }
      })
      .catch((err)=>console.log(err))

    }

    const [articles,setArticles] = useState([])
    const [contributors,setContributors] = useState([1,2,3]);
    const [authors, setAuthors] = useState([])
    const [popular,setPopular] = useState([1,2,3,4,5,6])
    const [series,setSeries] = useState([8,9,10,11,12])
    const [latest,setLatest] = useState([13,14,15]);
    const [cover,setCover] = useState();
    const [coverId,setCoverId] = useState();
    const [popularId,setPopularId] = useState()
    const [opinionId,setOpinionId] = useState()
    const [seriesId,setSeriesId] = useState()
    const [latestId, setLatestId] = useState()
    const [contributorId,setContributorId] = useState()
    const [EOMId,setEOMId] = useState()
    const [graphId,setGraphId] = useState()
    const [photoId,setPhotoId] = useState()
    const [loading,setLoading] = useState(false)
    const [articleNo,setArticleNo] = useState()
    const [quote,setQuote] = useState()
    const [qnaId,setQnaId] = useState()
    const [stats,setStats] = useState([1,2,3,4])

    

//hiding/display cover modal
 const [showCover, setShowCover] = useState(false);

//hiding/display cover modal
const [showEssay, setShowEssay] = useState(false);

//hiding/display popular modal
const [showPopular, setShowPopular] = useState(false);

//hiding/display popular modal
const [showGraph, setShowGraph] = useState(false);

//hiding/display Opinion modal
const [showOpinion, setShowOpinion] = useState(false);

//hiding/display Opinion modal
const [showLatest, setShowLatest] = useState(false);

//hiding/display EOM modal
const [showEOM, setShowEOM] = useState(false);

//hiding/display Photo Story modal
const [showPhoto, setShowPhoto] = useState(false);

//hiding/display Contributors modal
const [showContributor,setShowContributor] = useState(false);


//functions to hide/display cover modal
  const handleCloseCover = () => setShowCover(false);
  const handleShowCover = () => setShowCover(true);

//functions to hide/display photo modal
const handleClosePhoto = () => setShowPhoto(false);
const handleShowPhoto = () => setShowPhoto(true);

 //functions to hide/display cover modal
 const handleCloseLatest = () => {
   setShowLatest(false);
   setArticleNo(null)
 }
 const handleShowLatest = (obj) => {
 setArticleNo(obj)
 setShowLatest(true); 
 setLatestId(articles.length?articles[0].id:null)
 }

  //functions to hide/display contributor modal
  const handleCloseContributor = () => {
    setShowContributor(false);
    setArticleNo(null)
  }
  const handleShowContributor = (obj) => {
  setArticleNo(obj)
  setShowContributor(true); 
  setContributorId(authors.length?authors[0].id:null)
  }

  //functions to hide/display EOM modal
  const handleCloseEOM = () => {
    setShowEOM(false);
    setArticleNo(null)
  }
  const handleShowEOM = (obj) => {
  setShowEOM(true); 
  setEOMId(articles.length?articles[0].id:null)
  }

//functions to hide/display Opinion modal
const handleCloseOpinion = () => {
  setShowOpinion(false); 
}
const handleShowOpinion = () => setShowOpinion(true);


//functions to hide/display popular modal
const handleClosePopular = () => {
  setShowPopular(false);
  setArticleNo(null)
}
const handleShowPopular = (obj) => {
  setArticleNo(obj)
  setShowPopular(true);
  setPopularId(articles.length?articles[0].id:null)
}

 //functions to hide/display cover modal
 const handleCloseGraph = () => {
  setShowGraph(false);
  setArticleNo(null)
}
const handleShowGraph = (obj) => {
setArticleNo(obj)
setShowGraph(true); 
setGraphId(articles.length?articles[0].id:null)
}

 //functions to hide/display latest modal
 const handleCloseEssay = () => {
  setShowEssay(false);
  setArticleNo(null)
}
const handleShowEssay = (obj) => {
setArticleNo(obj)
setShowEssay(true); 
setSeriesId(articles.length?articles[0].id:null)
}

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
            setLoading(false)
            if(res.data.status===200)
            {
               setArticles(res.data.data)
               setCover(res.data.data[0])
               setPopularId(res.data.data[0].id)
               setOpinionId(res.data.data[0].id)
               setSeriesId(res.data.data[0].id);
               setQnaId(res.data.data[0].id);
            }
            else{
              alert("Error Occured")
            }
        })

        axios.get('https://nameless-peak-43027.herokuapp.com/author/',
        {
          headers:{
            "Content-Type": "application/json",
            "Accept": "application/json", 
          }
        }).then((res)=>{
            if(res.data.status===200)
            {
               setAuthors(res.data.data)
            }
            else{
              alert("Error Occured")
            }  
        })

    },[])

    const handleSubmitCover = (e)=>{

      let data = {
        article:coverId,
        id:pageData.id,
        articleNo:0
      }

      axios.post('https://nameless-peak-43027.herokuapp.com/update-page-article',data,{
        headers:{
          "Content-Type": "application/json",
          "Accept": "application/json",
          Authorization:localStorage.getItem('token')
        }
      }).then((res)=>{
        if(res.data.status===200)
        {
          handleCloseCover()
          revalidate()
        }
        else{
          alert("Error")
        }
      }).catch((err)=>console.log(err))

    }

    const handleSubmitPopular = (e) => {

      let data = {
        article:popularId,
        id:pageData.id,
        articleNo:articleNo
      }

      axios.post('https://nameless-peak-43027.herokuapp.com/update-page-article',data,{
        headers:{
          "Content-Type": "application/json",
          "Accept": "application/json",
          Authorization:localStorage.getItem('token')
        }
      }).then((res)=>{
        if(res.data.status===200)
        {
          setPopularId(null)
          handleClosePopular()
          revalidate()
        }
        else{
          alert("Error")
        }
      }).catch((err)=>console.log(err))

    }

    const handleSubmitOpinion = () => {

      let data = {
        quote_article:opinionId,
        id:pageData.id,
        quote:quote
      }

      axios.post('https://nameless-peak-43027.herokuapp.com/update-quote ',data,{
        headers:{
          "Content-Type": "application/json",
          "Accept": "application/json",
          Authorization:localStorage.getItem('token')
        }
      }).then((res)=>{
        if(res.data.status===200)
        {
          setOpinionId(null)
          handleCloseOpinion()
          revalidateQuote()
        }
        else{
          alert("Error")
        }
      }).catch((err)=>console.log(err))


    }

    const handleSubmitEssay = (e) => {

      let data = {
        article:seriesId,
        id:pageData.id,
        articleNo:articleNo
      }


      axios.post('https://nameless-peak-43027.herokuapp.com/update-page-article',data,{
        headers:{
          "Content-Type": "application/json",
          "Accept": "application/json",
          Authorization:localStorage.getItem('token')
        }
      }).then((res)=>{
        if(res.data.status===200)
        {
          setSeriesId(null)
          handleCloseEssay()
          revalidate()
        }
        else{
          alert("Error")
        }
      }).catch((err)=>console.log(err))


    }

    const handleSubmitLatest = ()=>{

      let data = {
        article:latestId,
        id:pageData.id,
        articleNo:articleNo
      }


      axios.post('https://nameless-peak-43027.herokuapp.com/update-page-article',data,{
        headers:{
          "Content-Type": "application/json",
          "Accept": "application/json",
          Authorization:localStorage.getItem('token')
        }
      }).then((res)=>{
        if(res.data.status===200)
        {
          setLatestId(null)
          handleCloseLatest()
          revalidate()
        }
        else{
          alert("Error")
        }
      }).catch((err)=>console.log(err))

    }

    const handleSubmitQna = ()=>{

      let data = {
        qna_quote_article:qnaId,
        id:pageData.id,
        qnaQuote:quote
      }

      axios.post('https://nameless-peak-43027.herokuapp.com/update-qna-quote ',data,{
        headers:{
          "Content-Type": "application/json",
          "Accept": "application/json",
          Authorization:localStorage.getItem('token')
        }
      }).then((res)=>{
        if(res.data.status===200)
        {
          alert(res.data.message)
          setQnaId(null)
          revalidateQuote()
        }
        else{
          alert("Error")
        }
      }).catch((err)=>console.log(err))

    }

    const handleSubmitEOM = (EOMId)=>{

      let data = {
        article_of_the_month:EOMId,
        id:pageData.id,
        articleNo:16
      }

      axios.post('https://nameless-peak-43027.herokuapp.com/update-page-article',data,{
        headers:{
          "Content-Type": "application/json",
          "Accept": "application/json",
          Authorization:localStorage.getItem('token')
        }
      }).then((res)=>{
        if(res.data.status===200)
        {
          alert(res.data.message)
          handleCloseEOM()
          revalidate()
        }
        else{
          alert("Error")
        }
      }).catch((err)=>console.log(err))

    }

    const handleSubmitPhoto = (photoId)=>{

      let data = {
        photo_story:photoId,
        id:pageData.id,
        articleNo:17
      }

      axios.post('https://nameless-peak-43027.herokuapp.com/update-page-article',data,{
        headers:{
          "Content-Type": "application/json",
          "Accept": "application/json",
          Authorization:localStorage.getItem('token')
        }
      }).then((res)=>{
        if(res.data.status===200)
        {
          handleClosePhoto()
          setPhotoId(null)
          alert(res.data.message)
          revalidate()
        }
        else{
          alert("Error")
        }
      }).catch((err)=>console.log(err))


    }
    
    const handleSubmitContributor = ()=>{

      let data = {
        contributor:contributorId,
        id:pageData.id,
        contributorNo:parseInt(articleNo)
      }

      console.log(data)

      axios.post('https://nameless-peak-43027.herokuapp.com/update-contributor',data,{
        headers:{
          "Content-Type": "application/json",
          "Accept": "application/json",
          Authorization:localStorage.getItem('token')
        }
      }).then((res)=>{
        console.log(res)
        if(res.data.status===200)
        {
          handleCloseContributor()
          setContributorId(null)
          alert(res.data.message)
          revalidate()
        }
        else{
          alert("Error")
        }
      }).catch((err)=>console.log(err))


    }

    const handleSubmitGraph = ()=>{

      let data = {
        contributor:graphId,
        id:pageData.id,
        contributorNo:parseInt(articleNo)
      }

      axios.post('https://nameless-peak-43027.herokuapp.com/update-graph',data,{
        headers:{
          "Content-Type": "application/json",
          "Accept": "application/json",
          Authorization:localStorage.getItem('token')
        }
      }).then((res)=>{
        console.log(res)
        if(res.data.status===200)
        {
          handleCloseGraph()
          setGraphId(null)
          alert(res.data.message)
          revalidate()
        }
        else{
          alert("Error")
        }
      }).catch((err)=>console.log(err))

    }

    return(
        <>
        {/* -------- Cover Modal ------- */}
        <Modal show={showCover} onHide={handleCloseCover}>
        <Modal.Header closeButton>
          <Modal.Title>Select Cover Story</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="Topic">
          <Form.Select aria-label="Default select example"
          onChange={(e)=>setCoverId(e.target.value)}
          >
            {(articles)?articles.map(obj=>{
               return(
                   <option key={obj.id} value={obj.id} selected={(pageData)?(pageData.cover)?pageData.cover.id===obj.id:null:null}>{obj.title}</option>
               )
            }):null}
            </Form.Select>
          </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark"  style={{width:'25%'}} onClick={(e)=>handleSubmitCover(coverId)}
          >Save</Button>
        </Modal.Footer>
      </Modal>

            {/*------ Popular Section Modal ------ */}
            <Modal show={showPopular} onHide={handleClosePopular}>
        <Modal.Header closeButton>
          <Modal.Title>Select Popular Story</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="Topic">
          <Form.Select aria-label="Default select example"
          onChange={(e)=>setPopularId(e.target.value)}
          defaultValue={(articles.length)?articles[0].id:null}
          >
            {(articles)?articles.map(obj=>{
               return( <option key={obj.id} value={obj.id}>{obj.title}</option>)
            }):null}
            </Form.Select>
          </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark"  style={{width:'25%'}} onClick={(e)=>handleSubmitPopular(popularId)}
          >Save</Button>
        </Modal.Footer>
      </Modal>

        {/* ------ opinion modal ------ */}
        <Modal show={showOpinion} onHide={handleCloseOpinion}>
        <Modal.Header closeButton>
          <Modal.Title>Select Opinion Story</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="Topic">
          <Form.Select aria-label="Default select example"
            defaultValue={(quoteData)?quoteData.quoteArticle?quoteData.quoteArticle.title:(articles.length)?articles[0].id:null:""}
            onClick={(e)=>setOpinionId(e.target.value)}
          >
            {(articles)?articles.map(obj=>{
               return( <option key={obj.id} value={obj.id} >{obj.title}</option>)
            }):null}
            </Form.Select>
          </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark"  style={{width:'25%'}} onClick={(e)=>handleSubmitOpinion(opinionId)}
          >Save</Button>
        </Modal.Footer>
      </Modal>

               {/* -------- Graphical Section Modal ------- */}
        <Modal show={showGraph} onHide={handleCloseGraph}>
        <Modal.Header closeButton>
          <Modal.Title>Select Graph Section Article</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="Graph">
          <Form.Select aria-label="Default select example"
          onChange={(e)=>setGraphId(e.target.value)}
          defaultValue={(articles.length)?articles[0].id:null}
          >
            {(articles)?articles.map(obj=>{
               return(
                   <option key={obj.id} value={obj.id}
                    >{obj.title}</option>
               )
            }):null}
            </Form.Select>
          </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark"  style={{width:'25%'}} onClick={(e)=>handleSubmitGraph(graphId)}
          >Save</Button>
        </Modal.Footer>
      </Modal>

            {/* ------ Essay Series ------ */}
        <Modal show={showEssay} onHide={handleCloseEssay}>
        <Modal.Header closeButton>
          <Modal.Title>Select Essay Series</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="Topic">
          <Form.Select aria-label="Default select example"
          onChange={(e)=>setSeriesId(e.target.value)}
          defaultValue={(articles.length)?articles[0].id:null}
          >
            {(articles)?articles
            .map(obj=>{
               return( <option key={obj.id} value={obj.id}>{obj.title}</option>)
            }):null}
            </Form.Select>
          </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark"  style={{width:'25%'}} onClick={(e)=>handleSubmitEssay(popularId)}
          >Save</Button>
        </Modal.Footer>
      </Modal>

        {/* -------- EOM Modal ------- */}
        <Modal show={showEOM} onHide={handleCloseEOM}>
        <Modal.Header closeButton>
          <Modal.Title>Select Essay Of The Month</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="Topic">
          <Form.Select aria-label="Default select example"
          onChange={(e)=>setEOMId(e.target.value)}
          >
            {(articles)?articles.map(obj=>{
               return(
                   <option key={obj.id} value={obj.id} 
                   //selected={(pageData)?pageData.cover.id===obj.id:null}
                   >{obj.title}</option>
               )
            }):null}
            </Form.Select>
          </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark"  style={{width:'25%'}} onClick={(e)=>handleSubmitEOM(EOMId)}
          >Save</Button>
        </Modal.Footer>
      </Modal>

           {/* -------- Photo Modal ------- */}
        <Modal show={showPhoto} onHide={handleClosePhoto}>
        <Modal.Header closeButton>
          <Modal.Title>Select Photo Story</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="Topic">
          <Form.Select aria-label="Default select example"
          onChange={(e)=>setPhotoId(e.target.value)}
          defaultValue={(articles.length)?articles[0].id:null}
          >
            {(articles)?articles.map(obj=>{
               return(
                   <option key={obj.id} value={obj.id} 
                  // selected={(pageData)?pageData.cover.id===obj.id:null}
                   >{obj.title}</option>
               )
            }):null}
            </Form.Select>
          </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark"  style={{width:'25%'}} onClick={(e)=>handleSubmitPhoto(photoId)}
          >Save</Button>
        </Modal.Footer>
      </Modal>

            {/* ------- Latest Modal ------ */}
            <Modal show={showLatest} onHide={handleCloseLatest}>
        <Modal.Header closeButton>
          <Modal.Title>Select Latest Article</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="Topic">
          <Form.Select aria-label="Default select example"
          onChange={(e)=>setLatestId(e.target.value)}
          defaultValue={(articles.length)?articles[0].id:null}
          >
            {(articles)?articles
            .map(obj=>{
               return( <option key={obj.id} value={obj.id}>{obj.title}</option>)
            }):null}
            </Form.Select>
          </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark"  style={{width:'25%'}} onClick={(e)=>handleSubmitLatest(latestId)}
          >Save</Button>
        </Modal.Footer>
      </Modal>

             {/* -------- Contributors Modal ------- */}
        <Modal show={showContributor} onHide={handleCloseContributor}>
        <Modal.Header closeButton>
          <Modal.Title>Select Contributor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="Topic">
          <Form.Select aria-label="Default select example"
          onChange={(e)=>setContributorId(e.target.value)}
          defaultValue={(authors.length)?authors[0].id:null}
          >
            {(authors)?authors.map(obj=>{
               return(
                   <option key={obj.id} value={obj.id}
                    selected={(pageData)?(pageData.cover)?pageData.cover.id===obj.id:null:null}
                    >{obj.name}</option>
               )
            }):null}
            </Form.Select>
          </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark"  style={{width:'25%'}} onClick={(e)=>handleSubmitContributor(contributorId)}
          >Save</Button>
        </Modal.Footer>
      </Modal>

        <div id="layoutSidenav_content">
        <h3 style={{paddingTop:'10px', fontSize:'28px'}}>
        <i class="fa fa-window-restore" aria-hidden="true"></i>&nbsp; Pages&nbsp;
        </h3>
        <hr />
        <br />
        {/*------------ Cover Story ---------------- */}
        <div className="pages-cover-story" onClick={(e)=>handleShowCover()}>
        <h3 style={{paddingTop:'10px', fontSize:'28px',textAlign:'left'}}>Cover Story</h3>
        <hr />
        <br />

        <div className='pages-cover-story-cover'>
        <Badge bg="secondary" className="page-manage-badge">{(pageData)?(pageData.cover)?pageData.cover.title:"":""}</Badge>
            <img  className="pages-cover-story-cover-image" src={pageData?(pageData.cover)?`https://nameless-peak-43027.herokuapp.com/indivisual-article/${pageData.cover.id}`:"":""} />
        </div>
        <hr />
        {/*------------ Popular ---------------- */}
        <h3 style={{paddingTop:'10px', fontSize:'28px',textAlign:'left'}}>Popular</h3>
        <hr />
        <br />
        <div className='pages-popular-container'>
            {(popular)?popular.map((obj)=>{
                return(
                    <div className='pages-popular-article' onClick={(e)=>handleShowPopular(obj)}>
                      <Badge bg="secondary" className="page-manage-badge">{(pageData)?pageData["article"+obj]?pageData["article"+obj].title:"":""}</Badge>
                        <img  className="pages-popular-article-image" src={(pageData)?(pageData["article"+obj])?`https://nameless-peak-43027.herokuapp.com/indivisual-article/${pageData["article"+obj].id}`:null:null} />
                    </div>
                )
            }):null}
        </div>
        </div>
        <hr/>


        {/* ------- Opinions -------- */}
        <h3 style={{paddingTop:'10px', fontSize:'28px',textAlign:'left'}}>Opinions</h3>
        <hr />
        <br />
        <div className='pages-opnions-container' >
        <Form>
             <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style={{width:"60vw"}}>
              <Form.Label>Quote</Form.Label>
              <Form.Control as="textarea" rows={3} defaultValue={(quoteData?quoteData.quote:"")} onChange={(e)=>setQuote(e.target.value)}/>
             </Form.Group>
             <Form.Group>
             <Form.Select aria-label="Default select example"
              onChange={(e)=>setOpinionId(e.target.value)}
              defaultValue={(articles.length)?articles[0].id:null}
          >
            {(articles)?articles.map(obj=>{
               return(
                   <option key={obj.id} value={obj.id}  selected={obj.title===(quoteData?quoteData.quoteArticle?quoteData.quoteArticle.title:"":"")}>{obj.title}</option>
               )
            }):null}
            </Form.Select>
             </Form.Group>
              <Button  style={{marginTop:'10px', width:"10vw"}} variant="outline-dark"  onClick={()=>handleSubmitOpinion()}>Save</Button>
            </Form>
        </div>
        <hr/>

          {/* ------- graphical section -------- */}
         <div>
         <h3 style={{paddingTop:'10px', fontSize:'28px',textAlign:'left'}}>Graphical Data </h3>
        <hr />
        <br />
            <Form>
              <Form.Group>
                <Form.Label>Add Title</Form.Label>
                <Form.Control
                />
              </Form.Group>
            </Form>
            <div className="pages-popular-container" style={{marginTop:"20px"}}>
            {(stats).map((obj)=>{
              return(
                <div className='pages-popular-article' onClick={(e)=>handleShowGraph()}>
                      <Badge bg="secondary" className="page-manage-badge">{(graphData)?graphData["graph_article"+obj]?graphData["graph_article"+obj].title:"":""}</Badge>
                        <img  className="pages-popular-article-image" src={(graphData)?(graphData["graph_article"+obj])?`https://nameless-peak-43027.herokuapp.com/indivisual-article/${graphData["graph_article"+obj].id}`:null:null} />
                    </div>
              )
            })}
            </div>
            <div style={{display:"flex", width:"100%", justifyContent:"space-evenly"}}>
              <div>
            <label class="form-label" for="customFile">Enter Image 1</label>
              <input type="file" class="form-control" id="customFile" />
              </div>
              <div>
              <label class="form-label" for="customFile">Enter Image 2</label>
              <input type="file" class="form-control" id="customFile" />
              </div>
              </div>
         </div>

        {/*------------ Essay Series ---------------- */}
        <h3 style={{paddingTop:'10px', fontSize:'28px',textAlign:'left'}}>Essay Series</h3>
        <hr />
        <br />
        <div className='pages-popular-container' >
            {(series)?series.map((obj)=>{
                return(
                    <div className='pages-popular-article' onClick={()=>handleShowEssay(obj)}>
                      <Badge bg="secondary" className="page-manage-badge">{(pageData)?(pageData["article"+obj])?pageData["article"+obj].title:"":""}</Badge>
                        <img  className="pages-popular-article-image"  src={(pageData)?(pageData["article"+obj])?`https://nameless-peak-43027.herokuapp.com/indivisual-article/${pageData["article"+obj].id}`:null:null}/>
                    </div>
                )
            }):null}
        </div>
        <hr/>

              {/*------------ Essay Of The Month ---------------- */}
        <h3 style={{paddingTop:'10px', fontSize:'28px',textAlign:'left'}}>Essay Of The Month</h3>
        <hr />
        <br />
        <div className='pages-popular-container' >
                    <div className='pages-popular-article' onClick={()=>handleShowEOM()}>
                      <Badge bg="secondary" className="page-manage-badge">{(pageData)?(pageData["articleOfTheMonth"])?pageData["articleOfTheMonth"].title:"":""}</Badge>
                        <img  className="pages-popular-article-image"  src={(pageData)?(pageData["articleOfTheMonth"])?`https://nameless-peak-43027.herokuapp.com/indivisual-article/${pageData["articleOfTheMonth"].id}`:null:null}/>
                    </div>
        </div>
        <hr/>


          {/* ------- Qna -------- */}
          <h3 style={{paddingTop:'10px', fontSize:'28px',textAlign:'left'}}>QnA</h3>
        <hr />
        <br />
        <div className='pages-opnions-container' >
        <Form>
             <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style={{width:"60vw"}}>
              <Form.Label>Quote</Form.Label>
              <Form.Control as="textarea" rows={3} defaultValue={quoteData2?quoteData2.qnaQuote:""} onChange={(e)=>setQuote(e.target.value)}/>
             </Form.Group>
             <Form.Group>
             <Form.Select aria-label="Default select example"
              defaultValue={(quoteData2)?quoteData2.qnaQuoteArticle?quoteData2.qnaQuoteArticle.title:(articles.length)?articles[0].id:null:""}
              onChange={(e)=>setQnaId(e.target.value)}
          >
            {(articles)?articles.map(obj=>{
               return(
                   <option key={obj.id} value={obj.id} selected={obj.title===(quoteData2?quoteData2.qnaQuoteArticle?quoteData2.qnaQuoteArticle.title:"":"")} >{obj.title}</option>
               )
            }):null}
            </Form.Select>
             </Form.Group>
              <Button  style={{marginTop:'10px', width:"10vw"}} variant="outline-dark"  onClick={()=>handleSubmitQna()}>Save</Button>
            </Form>
        
        </div>
        <hr/>

        {/*------------ Photo Story ---------------- */}
        <div className="pages-cover-story" onClick={(e)=>handleShowPhoto()}>
        <h3 style={{paddingTop:'10px', fontSize:'28px',textAlign:'left'}}>Photo Story</h3>
        <hr />
        <br />

        <div className='pages-cover-story-cover'>
        <Badge bg="secondary" className="page-manage-badge">{(pageData)?pageData.photoStory?pageData.photoStory.title:"":""}</Badge>
            <img  className="pages-cover-story-cover-image" src={pageData?pageData.photoStory?`https://nameless-peak-43027.herokuapp.com/indivisual-article/${pageData.photoStory.id}`:null:null} />
        </div>
        </div>
        <hr />

        {/* ------- Latest Articles ------- */}
        <h3 style={{paddingTop:'10px', fontSize:'28px',textAlign:'left'}}>Latest Articles</h3>
        <hr />
        <br />
        <div className='pages-popular-container' >
            {(latest)?latest.map((obj)=>{
                return(
                    <div className='pages-popular-article' onClick={()=>handleShowLatest(obj)}>
                      <Badge bg="secondary" className="page-manage-badge">{(pageData)?(pageData["article"+obj])?pageData["article"+obj].title:"":""}</Badge>
                        <img  className="pages-popular-article-image"  src={(pageData)?(pageData["article"+obj])?`https://nameless-peak-43027.herokuapp.com/indivisual-article/${pageData["article"+obj].id}`:null:null} />
                    </div>
                )
            }):null}
        
        </div>
        <hr/>

         {/*------------ Contributors ---------------- */}
         <h3 style={{paddingTop:'10px', fontSize:'28px',textAlign:'left'}}>Contributors</h3>
        <hr />
        <br />
        <div className='pages-popular-container'>
            {(contributors)?contributors.map((obj)=>{
                return(
                    <div className='pages-popular-article' onClick={(e)=>handleShowContributor(obj)}>
                      <Badge bg="secondary" className="page-manage-badge">{(contributorData)?contributorData["contributor"+obj]?contributorData["contributor"+obj].name:"":""}</Badge>
                        <img  className="pages-popular-article-image" src={(contributorData)?(contributorData["contributor"+obj])?`https://nameless-peak-43027.herokuapp.com/indivisual-author/${contributorData["contributor"+obj].id}`:null:null} />
                    </div>
                )
            }):null}
        </div>
        </div>
        <hr/>

        
      </>
    )

}

export default PageManage;