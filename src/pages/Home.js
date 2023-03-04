import React  from 'react'
import {useState, useEffect} from "react"
import axios from 'axios';
import Card1 from '../componant/Card/Card';
import { InsertEmoticonSharp } from '@mui/icons-material';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { Carousel } from 'react-responsive-carousel';
import "./Home.css";
import { Link } from "react-router-dom";
import Slider from '../componant/Carousel';
import Carousel from 'react-bootstrap/Carousel';
const Home = () => {
  const [movie, setmovie]=useState([]);
  const [movie1, setmovie1]=useState([1,2,3,4]);
  useEffect(()=>{axios.get("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US").then((response)=>{setmovie(response.data.results) })},[])
 
  return (
    <div style={{backgroundColor:"black"}}>
{ console.log(movie  )}
      <div >
      <Carousel style={{backgroundColor:"black"}}>
      {movie.map(({backdrop_path, title, overview})=>{
          return(
           
            <Carousel.Item interval={700}>
            <img
            className="d-block w-75" style={{justifyContent:"center", margin:"auto"}}
            src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
            alt="First slide"
          />
          <Carousel.Caption>
          <h3>{title}</h3>
          <p>
            {overview}
          </p>
        </Carousel.Caption>
           </Carousel.Item>
          )
        })}
     </Carousel>    
  </div>
  {console.log(movie)}
  <Row className="justify-content-md-center" xs={1} md={2} className="g-4">
   
    {movie.map(({poster_path, title,id, overview})=>{return(<Col className=" col-12 col-sm-6 col-md-4 col-lg-3" style={{justifyContent:"center", margin:"auto"}}>
         <Card1 banner={poster_path} Title={title
} description={overview} /></Col>
)
    })}
   
   </Row>
    
      
{/* <img src="https://image.tmdb.org/t/p/original/qi9r5xBgcc9KTxlOLjssEbDgO0J.jpg" alt="sdfg" /> */}
    </div>
  )
}

export default Home