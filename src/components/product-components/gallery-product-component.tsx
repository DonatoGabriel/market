import { Thumbnail } from "../thumbnail-component";
import { ProductModel } from "../../models/gallery-models";
import { Wrapper, ProductsWrapper } from "../../styles/gallery-style";
import jsonData from "../../json/products.json";
import { Fragment } from "react";

export function Gallery() {
  var productList: ProductModel[] = getProducts();

  function getProducts(): ProductModel[] {
    let products: ProductModel[] = [];

    jsonData.products.map((item) => {
      products.push(item.product);
    });

    return products;
  }

  return (
    <Fragment>
      <div className="header"></div>

      <Wrapper>
        {/* <div className="offers">Carrusel de ofertas</div>
      <div>buscador de productos</div> */}
        <ProductsWrapper>
          {productList.map((product) => {
            return <Thumbnail key={product.code} item={product} />;
          })}
        </ProductsWrapper>
      </Wrapper>
    </Fragment>
  );
}
