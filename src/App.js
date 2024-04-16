import './App.css';
import { Nav } from './stories/Nav/Nav';
import { ProductRow } from './stories/ProductRow/ProductRow';
import ProductCarousel from './stories/ProductCarousel/ProductCarousel';
import Banner from './stories/Banner/Banner';

function App() {
  return (
    <div>
      <Nav />
      <ProductCarousel />
      <ProductRow nome="Novidades" />
      <Banner imageUrl="Queen.webp" alt="Queen" />
      <ProductRow nome="Os mais vendidos" />
    </div>
  );
}

export default App;
