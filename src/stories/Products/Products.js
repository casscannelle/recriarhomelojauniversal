import { useEffect, useState, useRef } from 'react';
import './Products.css';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Button } from '../Button/Button';
import axios from 'axios';

function Products() {
  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    axios.get('http://localhost:3000/produtos') 
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleLeftClick = () => {
    if (carousel.current) {
      carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
  };

  const handleRightClick = () => {
    if (carousel.current) {
      carousel.current.scrollLeft += carousel.current.offsetWidth;
    }
  };
  
  return (
    <div className="container">
      <div className="carousel" ref={carousel}>
        {data.map((product, i) => (
          <div className="item" key={product.id}>
            <div className="image">
              <img src={product.image} alt={product.artist} />
            </div>
            <div className="info">
              <span className="name">{product.artist}</span>
              <span className="detail">{product.detail}</span>
              <span className="price">{product.price}</span>
              <span className="installments">{product.installments}</span>
            </div>
            <div>
              <Button primary="true" label="Adicionar ao carrinho"/>
            </div>
          </div>
        ))}
      </div>
      <div className="buttons">
        <ChevronLeftIcon onClick={handleLeftClick} aria-label="Scroll Left" />
        <ChevronRightIcon onClick={handleRightClick} aria-label="Scroll Right" />
      </div>
    </div>
  );
}

export default Products;
