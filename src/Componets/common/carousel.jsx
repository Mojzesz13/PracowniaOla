import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import './carousel.scss';
import home1 from './../../../src/assets/home/home1.jpg';
import home2 from './../../../src/assets/home/home2.jpg';
import home3 from './../../../src/assets/home/home3.jpg';
import home4 from './../../../src/assets/home/home4.jpg';
import home5 from './../../../src/assets/home/home5.jpg';
import home6 from './../../../src/assets/home/home6.jpg';

const ControlledCarousel = () => {
  return (
    <Carousel className="carouselContainer" interval={4000}>
      <Carousel.Item>
        <img className="d-block w-100" src={home1} alt="Third slide" />
        <Carousel.Caption>
          <h1>Piękno tkwi w Tobie, nie w rozmiarze.</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Link to="/weddingDresses">
          <img className="d-block w-100" src={home2} alt="Third slide" />
          <Carousel.Caption>
            <h2 className="text-left">Ślubne</h2>
            <p className="text-left">przejdz do pracowni.</p>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to="/eveningDresses">
          <img className="d-block w-100" src={home3} alt="Third slide" />
          <Carousel.Caption>
            <h2 className="text-left">Wieczorowe</h2>
            <p className="text-left">przejdz do pracowni.</p>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to="/blog">
          <img
            className="d-block w-100 hoverClass"
            src={home4}
            alt="Third slide"
          />
          <Carousel.Caption>
            <p className="align-baseline">
              Przyszła Panna Młoda ma wiele pytań. Poznaj odpowiedzi na nie.
            </p>
            <h2 className="text-left ">Q&A</h2>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to="/blog">
          <img
            className="d-block w-100 hoverClass"
            src={home5}
            alt="Third slide"
          />
          <Carousel.Caption>
            <p className="align-baseline">
              Dowiedz się więcej o naszej pacowni
            </p>
            <h2 className="text-left ">O nas</h2>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
      <Carousel.Item className="hoverClass">
        <Link to="/contact">
          <img
            className="d-block w-100 hoverClass"
            src={home6}
            alt="Third slide"
          />
          <Carousel.Caption>
            <div className="align-baseline hoverText">
              <p>Czekamy na ciebie w pracowni Stwórzmy razem</p>
              <p> Twoją wymarzoną suknię ślubną.</p>
              <h3 className="align-baseline hoverText">
                skontaktuj się z nami
              </h3>
            </div>
            <h4 className="text-left">Kontakt</h4>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
    </Carousel>
  );
};

export default ControlledCarousel;
