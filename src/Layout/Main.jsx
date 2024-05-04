import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNave from '../Pages/Shared/Leftnave/LeftNave';
import RightNav from '../Pages/Shared/RightNave/RightNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNave></LeftNave>
                    </Col>
                    <Col lg={6}>

                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
                
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;