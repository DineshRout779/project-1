import { Col, Container, Row } from 'react-bootstrap';

const Founder = () => {
  return (
    <section className='bg-gray'>
      <Container>
        <Row className='g-4'>
          <Col sm={4}>
            <img
              src='./images/founder.jpeg'
              alt='founder'
              className='img-founder'
            />
          </Col>
          <Col sm={8}>
            <h1>Founder Name</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate voluptatum, quod incidunt molestias repellendus labore
              ipsam beatae voluptas eveniet exercitationem, facere ex eligendi
              sint autem voluptatibus vel dolor et aliquam?
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Founder;
