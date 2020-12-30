import React from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

function BottomCards() {
    return (
        <div className="bottom-cards">
            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: "20rem" }}>
                            <Card.Body>
                                <Card.Title style={{textAlign:"center"}}>About Us</Card.Title>
                                <Card.Text style={{textAlign:"left"}}>
                                    We are a small computer lab specializing in networking and servers for small to 
                                    medium sized businesses and residential customers.<br></br>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: "20rem" }}>
                            <Card.Body>
                                <Card.Title>Card 2 Title</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    Card Subtitle
                                </Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: "20rem" }}>
                        <Card.Body>
                                <Card.Title style={{textAlign:"center"}}>Contact Addresses</Card.Title>
                                <Card.Text style={{textAlign:"left"}}>
                                    Address: 140 W 9000 S, Ste 4<br></br>
                                             Sandy, Utah 84070<br></br>
                                    Mobile: (801) 865-6571<br></br>
                                    Email: bob@byte-better.com<br></br>
                                    <br></br>
                                    Social Media:
                                </Card.Text>
                                <Card.Link href="https://www.facebook.com/AByteBetterComputers">Facebook</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BottomCards;