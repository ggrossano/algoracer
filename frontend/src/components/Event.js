import { Component } from 'react';
import { Button, Col, Row} from 'react-bootstrap'; 

class Event extends Component{
    render() {
        const buttonStyle = {
            width: '100px', 
            marginRight : '20px',
            marginBottom : '10px'
        };
        
        return(
            <>
            
                <Row style={{marginBottom : '20px'}}>
                    <Col className="text-center">
                        <div>Evento </div>
                    </Col>
                    <Col className="text-left" md="6">
                        <div>{this.props.descrizione}</div>
                    </Col>
                    <Col>
                        <div>{this.props.data}</div>
                    </Col>
                    <Col className="d-flex flex-column">
                        <Button variant="dark" style={buttonStyle}>Show</Button>
                        <Button variant="dark" style={buttonStyle}>Subscribe</Button>
                    </Col>
                </Row>
            
            </>
        );
    }
}

export default Event;
