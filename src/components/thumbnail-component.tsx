import { ProductModel } from "../models/gallery-models";
import {
  StyledThumbnail,
  StyledDiscount,
  StyledPrice,
  AddToCart,
} from "../styles/thumbnail-style";
// Componente que se encarga de realizar una "Miniatura"

//Los componentes tienen solo un parámetro que es el objeto prop
//El sistema de tipos está intentando hacer coincidir las propiedades con el primer parámetro de su función,
export function Thumbnail(props: {
  item: ProductModel;
  newPrice: number;
  onAddToCart: (item: ProductModel) => void;
}) {
  const { title, image, price, category, offer } = props.item;
  const newPrice: number = props.newPrice;
  const onAddToCart = props.onAddToCart;

  return (
    <StyledThumbnail>
      {/* Si existe una oferta/descuento se muestra el dato en la miniatura */}
      <div className="discount">
        {offer > 0 && <StyledDiscount>{offer}% dto.</StyledDiscount>}
      </div>
      <div>
        <img src={image} alt={title} />
      </div>
      <div className="product-information">
        <div>
          <StyledPrice discount={newPrice > 0}>
            <span>${price}</span>
            {newPrice > 0 && <span>${newPrice}</span>}
          </StyledPrice>
        </div>

        <div>
          <span className="title">{title}</span>
        </div>

        <div>
          <span className="category">{category}</span>
        </div>

        <div className="addToCart">
          <AddToCart onClick={() => onAddToCart(props.item)}>Agregar</AddToCart>
        </div>
      </div>
    </StyledThumbnail>
  );
}
