import api from "../../services/api";
import { useCallback, useState } from "react";
import Carousel from "@itseasy21/react-elastic-carousel";
import { ProductsContainer, Item } from "./styles";

export function CarouselProducts() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7]);

  // console.log("dentro");
  // const [products, setProducts] = useState([]);
  // const getProducts = useCallback(async () => {

  //     console.log("dentro");

  //   const response = await api.get("products");
  //   console.log(response.data[0].description);
  //   setProducts(response.data[0].description);
  // }, []);
  // console.log(products);

  return (
    <ProductsContainer>
      <div className="carousel-wrapper">
        <Carousel isRTL={false} breakPoints={breakPoints}>
          {items.map((item) => (
            <Item key={item}>{item}</Item>
          ))}
        </Carousel>
      </div>
    </ProductsContainer>
  );
}
