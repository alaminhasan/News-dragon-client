import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';
import bg1 from "../../../assets/bg1.png"


const RightNav = () => {
    return (
        <div>
            <h4 className='mt-4'>Login With</h4>
            <Button variant="outline-primary" className='mb-2'><FaGoogle /> Login with google</Button>
            <Button variant="outline-secondary"><FaGithub />Login with github</Button>
            <div>
                <h2 className='mt-4'>Find on us</h2>
                <ListGroup variant="flush">
                    <ListGroup.Item><FaFacebook></FaFacebook>Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter>Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram>Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <Qzone></Qzone>
            <div>
                <img src={bg1} alt="" />
            </div>
        </div>
    );
};

export default RightNav;