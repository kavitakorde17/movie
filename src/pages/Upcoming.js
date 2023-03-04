import React from 'react'
import {useState, useEffect} from "react"
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Card1 from '../componant/Card/Card';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Upcoming = () => {
  const [movie, setmovie]=useState([]);
  const [movie1, setmovie1]=useState([1,2,3,4]);
  useEffect(()=>{axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US").then((response)=>{setmovie(response.data.results)})},[])
  return (
    <div style={{backgroundColor:"black"}}>






      <Row>
   
   {movie.map(({poster_path, title, overview})=>{return(<Col className=" col-12 col-sm-6 col-md-4 col-lg-3">
        <Card1 banner={poster_path} Title={title
} description={overview} /></Col>
)
   })}
  
  </Row>
    </div>
  )
}

export default Upcoming
