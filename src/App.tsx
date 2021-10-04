import { Gallery } from "./components/product-components/gallery-product-component";
import { Header } from "./styles/home-style";

function App() {
  return (
    <div className="App">
      <Header>
        <span>¡Adquiere todos tus productos favoritos, al mejor precio!</span>
      </Header>
      <Gallery />
    </div>
  );
}

export default App;
