//React Imports
import { useState } from "react";

//Carousel
import Carousel from "@itseasy21/react-elastic-carousel";

//Styles Imports
import { ProductsContainer, Item } from "./styles";

//Components Import
import { Card } from "./Items/cards";

export function CarouselProducts() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  const [items, setItems] = useState([1, 2, 3, 4, 5]);

  return (
    <ProductsContainer>
      <div className="carousel-wrapper">
        <Carousel isRTL={false} breakPoints={breakPoints}>
          {items.map((item) => (
            <Item key={item}>
              <Card numCard={item}></Card>
            </Item>
          ))}
        </Carousel>
      </div>
    </ProductsContainer>
  );
}
