import { Thumbnail } from "../thumbnail-component";
import { ProductModel } from "../../models/gallery-models";
import { Wrapper, ProductsWrapper } from "../../styles/gallery-style";
import jsonData from "../../json/products.json";
import { Fragment } from "react";

export function Gallery() {
  var productList: ProductModel[] = getProducts();
  var newPrice: number = 0;

  function getProducts(): ProductModel[] {
    let products: ProductModel[] = [];

    jsonData.products.map((item) => {
      products.push(item.product);
    });

    return products;
  }

  return (
    <Fragment>
      <Wrapper>
        {/* <div className="offers">Carrusel de ofertas</div>
      <div>buscador de productos</div> */}
        <ProductsWrapper>
          {productList.map((product) => {
            {
              product.offer > 0
                ? (newPrice =
                    product.price - (product.price * product.offer) / 100)
                : (newPrice = product.offer);
            }
            return (
              <Thumbnail
                key={product.code}
                item={product}
                newPrice={newPrice}
              />
            );
          })}
        </ProductsWrapper>
      </Wrapper>
    </Fragment>
  );
}
