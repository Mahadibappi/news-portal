import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Carousel from "react-bootstrap/Carousel";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { AuthContext } from "../../Context/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
const RightNav = () => {
  const { LoginProvider } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const handleGoogle = () => {
    LoginProvider(provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <ButtonGroup vertical>
        <Button
          onClick={handleGoogle}
          variant="outline-primary rounded"
          className="mb-2"
        >
          <FaGoogle /> Login With Google
        </Button>
        <Button className="mb-2" variant="outline-dark rounded">
          <FaGithub /> Login With Github
        </Button>
      </ButtonGroup>

      <div>
        <h3>Find Us On</h3>
        <ListGroup>
          <ListGroup.Item className="mb-2">
            <FaFacebook /> FaceBook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaLinkedin /> LinkdeIn
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaWhatsapp /> Whatsapp
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://github.com/ProgrammingHero1/dragon-news-client-module-62/blob/main/src/assets/brands/Brand2.png?raw=true"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://github.com/ProgrammingHero1/dragon-news-client-module-62/blob/main/src/assets/brands/Brand1.png?raw=true"
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default RightNav;
