import { ProductModel } from "../models/gallery-models";
import {
  StyledThumbnail,
  StyledDiscount,
  StyledPrice,
} from "../styles/thumbnail-style";
// Componente que se encarga de realizar una "Miniatura"

//Los componentes tienen solo un parámetro que es el objeto prop
//El sistema de tipos está intentando hacer coincidir las propiedades con el primer parámetro de su función,
export function Thumbnail(props: { item: ProductModel; newPrice: number }) {
  const { title, image, price, category, offer } = props.item;
  const newPrice: number = props.newPrice;

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
          <StyledPrice>
            ${price} --- ${newPrice}
          </StyledPrice>
        </div>
        <div>
          <span className="title">{title}</span>
        </div>
        <div>
          <span className="category">{category}</span>
        </div>
      </div>
    </StyledThumbnail>
  );
}
