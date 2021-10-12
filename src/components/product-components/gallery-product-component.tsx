import { Thumbnail } from "../thumbnail-component";
import { ProductModel } from "../../models/gallery-models";
import { Wrapper, ProductsWrapper } from "../../styles/gallery-style";
import jsonData from "../../json/products.json";
import { Fragment, useState } from "react";

export function Gallery() {
  const [shoppingCartProducts, setShoppingCartProducts] = useState<
    ProductModel[]
  >([]);

  var productList: ProductModel[] = getProducts();
  var newPrice: number = 0;

  function getProducts(): ProductModel[] {
    let products: ProductModel[] = [];

    jsonData.products.map((item) => {
      return products.push(item.product);
    });

    return products;
  }

  function addToCart(product: ProductModel) {
    setShoppingCartProducts((prevCart) => {
      return [...prevCart, product];
    });

    console.log(shoppingCartProducts);
  }

  return (
    <Fragment>
      <Wrapper>
        <ProductsWrapper>
          {productList.map((product) => {
            product.offer > 0
              ? (newPrice =
                  product.price - (product.price * product.offer) / 100)
              : (newPrice = product.offer);

            return (
              <Thumbnail
                key={product.code}
                item={product}
                newPrice={newPrice}
                onAddToCart={addToCart}
              />
            );
          })}
        </ProductsWrapper>
      </Wrapper>
    </Fragment>
  );
}
