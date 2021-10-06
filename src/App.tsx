import { Header } from "./components/header-component";
import { Gallery } from "./components/product-components/gallery-product-component";
import { Slogan } from "./styles/home-style";

function App() {
  return (
    <div className="App">
      <Header />
      <Slogan>
        <span>¡Adquiere todos tus productos favoritos, al mejor precio!</span>
      </Slogan>
      <Gallery />
    </div>
  );
}

export default App;
