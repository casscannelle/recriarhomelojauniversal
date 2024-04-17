import { useEffect, useState, useRef } from 'react';
import './Products.css';
import productsData from './Products.json'; 
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function Products() {
  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    setData(productsData); 
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    if (carousel.current) {
      carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    if (carousel.current) {
      carousel.current.scrollLeft += carousel.current.offsetWidth;
    }
  };

  if (!data || !data.length) return null;

  return (
    <div className="carousel">
      {data.map((item) => {
        const { id, artist, detail, price, installments, image } = item;
        return (
          <div className="item" key={id}>
            <div className="image">
              <img src={image} alt={artist} />
            </div>
            <div className="info">
              <span className="name">{artist}</span>
              <span className="detail">{detail}</span>
              <span className="installments">{installments}</span>
              <span className="price">{price}</span>
            </div>
          </div>
        );
      })}
      <div className="buttons">
        <ChevronLeftIcon onClick={handleLeftClick} aria-label="Scroll Left" />
        <ChevronRightIcon onClick={handleRightClick} aria-label="Scroll Right" />
      </div>
    </div>
  );
}

export default Products;
