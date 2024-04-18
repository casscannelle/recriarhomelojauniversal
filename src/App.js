import TopCarousel from './stories/TopCarousel/TopCarousel';
import { Nav } from './stories/Nav/Nav';
import ProductCarousel from './stories/ProductCarousel/ProductCarousel';
import { ProductRow } from './stories/ProductRow/ProductRow';
import Banner from './stories/Banner/Banner';
import Menu from './stories/Menu/Menu';
import Footer from './stories/Footer/Footer';


function App() {

  

  return (
    <div>
      <TopCarousel/>
      <Nav />
      <ProductCarousel />
      <ProductRow nome="Novidades" />
      <Banner imageUrl="https://universalmusic.vtexassets.com/assets/vtex.file-manager-graphql/images/4bff4ab2-3b34-41a3-a95e-cc2a0b0ecb5a___5f284d8f113706b0830fac1959524d84.png" alt="Dorival Caymmi" />
      <ProductRow nome="Os mais vendidos" />
      <Menu />
      <Banner imageUrl="Queen.webp" alt="Queen" />
      <Footer /> 
    </div>
  );
}

export default App;
