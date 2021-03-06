import { ProductModel } from "../../models/gallery-models";

export function Product(product: ProductModel) {
  const { title, image, category, code, price, description } = product;
  return (
    <div className="product">
      <div className="product-name">
        <span>{title}</span>
      </div>
      <div className="product-image">
        <div>Image</div>
        <div className="product-category">
          <span>{category}</span>
          <span>{code}</span>
        </div>
      </div>
      <div className="product-information">
        <div>
          <span>{price}</span>
          <span>Oferta</span>
          <div>
            <textarea value={description}></textarea>
          </div>
        </div>
        <div className="product-add-to-cart">
          <div>
            <div>
              <button>-</button>
            </div>
            <input type="text" value="1" />
            <div>
              <button>+</button>
            </div>
          </div>
          <button>Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
}
