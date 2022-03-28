import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { carouselData } from '../data/data';

const Hero = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const showWidth = () => {
    setWidth(window.innerWidth);
  };

  window.addEventListener('resize', showWidth);

  return (
    <div className='height-100'>
      <Carousel>
        {carouselData.map((item) => {
          return (
            <Carousel.Item key={item.id}>
              <img
                className='d-block w-100'
                src={width > 768 ? item.desktopImg : item.mobileImg}
                alt={'carousel-item'}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Hero;
