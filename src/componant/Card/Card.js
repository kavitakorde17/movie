import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import "./card.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
function Card1(props) {
    const navigate = useNavigate();
    const link=()=>{
        navigate("/Home");
    }
  return (
    <>

     <div style={{alignItems:"center",padding:"15px", display:"flex", alignItems:"center",justifyContent:"center"}} class="hover-img"  >
    <Card style={{ width: '18rem' }} className=" col-12 col-sm-6 col-md-4 col-lg-3" >
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${props.banner}`} className="img"/>
      <figcaption>
      <Card.Body>
        <Card.Title>{props.Title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
          <Button variant="primary" onClick={link}>Link</Button>
      </Card.Body>
      </figcaption>
    </Card>
    </div>
    
    </>
  );
}

export default Card1;