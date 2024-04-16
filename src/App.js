import './App.css';
import { Nav } from './stories/Nav/Nav';
import { ProductRow } from './stories/ProductRow/ProductRow';
import ProductCarousel from './stories/ProductCarousel/ProductCarousel';
import Banner from './stories/Banner/Banner';
import TopCarousel from './stories/TopCarousel/TopCarousel';

function App() {
  return (
    <div>
      <TopCarousel/>
      <Nav />
      <ProductCarousel />
      <ProductRow nome="Novidades" />
      <Banner imageUrl="https://universalmusic.vtexassets.com/assets/vtex.file-manager-graphql/images/4bff4ab2-3b34-41a3-a95e-cc2a0b0ecb5a___5f284d8f113706b0830fac1959524d84.png" alt="Dorival Caymmi" />
      <ProductRow nome="Os mais vendidos" />
      <Banner imageUrl="Queen.webp" alt="Queen" />
    </div>
  );
}

export default App;
