import { useState } from 'react';
import { Card, Container, Modal, Button } from 'react-bootstrap';
import Slider from 'react-slick';
import { modelsData } from '../data/data';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          {modelsData[props.activeIndex].name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Model Description</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Models = () => {
  const [modalShow, setModalShow] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className='min-vh-100' id='about'>
      <div className='bg-img about'></div>
      <Container>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          activeIndex={activeIndex}
        />
        <div className='text-center'>
          <h2 className='heading-title'>Models</h2>
        </div>
        <section className='py-2 my-5 mt-2'>
          <Slider {...settings}>
            {modelsData.map((item, i) => {
              return (
                <div key={item.id}>
                  <Card>
                    <Card.Img variant='top' src={item.img} />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Button
                        variant={'outline-danger'}
                        onClick={() => {
                          setModalShow(true);
                          setActiveIndex(i);
                        }}
                      >
                        Details
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </Slider>
        </section>
        <section className='py-2 my-5'>
          <Slider {...settings}>
            {modelsData.map((item, i) => {
              return (
                <div key={item.id}>
                  <Card>
                    <Card.Img variant='top' src={item.img} />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Button
                        variant={'outline-danger'}
                        onClick={() => {
                          setModalShow(true);
                          setActiveIndex(i);
                        }}
                      >
                        Details
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </Slider>
        </section>
      </Container>
    </section>
  );
};
export default Models;
