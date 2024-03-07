import hackathonImage from '../hackathon.jpg';
import { Button, Col, Row, Container, Card} from 'react-bootstrap'; 
import { Link } from 'react-router-dom';

function Homepage () {
    return (
    <div className="Container">
      <Row className="justify-content-end">
        <Col>
            <h1 style={{ fontSize: '34px', marginLeft :'20px'}}>Homepage</h1>
        </Col>
        <Col xs="auto">
          <Link to="/login">
            <Button variant="dark" href="submit" style={{ marginRight: '20px'}}>Login</Button>
          </Link>
        </Col>
      </Row>
      <Container>
        <Card style={{ border: 'none' }}>
          <Card.Img src={hackathonImage} className="mx-auto d-block"  style={{ width: '500px', height: 'auto' }}/>
          <Card.Body>
            <Card.Title>What is AlgoRacer?</Card.Title>
            <Card.Text>
            A hackathon is a collaborative and time-limited event where programmers, developers, designers, and other 
            tech enthusiasts come together to address a specific problem or work on innovative projects. Participants 
            engage in intensive, focused teamwork to develop creative solutions, code, or functional prototypes. Hackathons 
            span various themes, from creating new applications to exploring emerging technologies. The main goals are to foster 
            creativity, collaboration, and rapid problem-solving, with teams presenting their outcomes to a judging panel for 
            potential recognition or awards.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>   
    );
}

export default Homepage;