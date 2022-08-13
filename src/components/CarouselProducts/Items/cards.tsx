//React Imports
import { useState, useCallback } from "react";

//Styles
import { Container } from "./styles";

//Products Data
import { allProducts } from "./data";

//Next Imports
import Image from "next/image";

//Interfaces
interface Props {
  numCard: number;
}

//Context
import { useProducts } from "../../../contexts/products";

//Images comuns
import shipping from "../../../../public/assets/shipping.svg";
import carBuy from "../../../../public/assets/carBuy.svg";
import heartEmpty from "../../../../public/assets/heartEmpty.svg";
import heartSelected from "../../../../public/assets/heartSelected.svg";
import stars from "../../../../public/assets/Stars.svg";

export function Card({ numCard }: Props) {
  const [favorite, setFavorite] = useState(false);
  const { addProducts} = useProducts();
  const aux = numCard - 1;
  const handlePurchaseProduct = () => {
    addProducts(allProducts[aux]);
  };
  return (
    <Container>
      <div className="favorite">
        {favorite ? (
          <span onClick={() => setFavorite(false)}>
            <Image src={heartSelected} alt="heartSelected" />
          </span>
        ) : (
          <span onClick={() => setFavorite(true)}>
            <Image src={heartEmpty} alt="heartEmpty" />
          </span>
        )}
        <span>
          <Image src={stars} />
        </span>
      </div>
      <div className="imageContainer">
        <Image
          width={212}
          height={106}
          src={allProducts[aux].image}
          alt={"Produto1"}
        />
      </div>
      <div className="description">
        <p>{allProducts[aux].manufacturer}</p>
        <h1>{allProducts[aux].description}</h1>
      </div>
      <div className="price">
        <p className="oldPrice">R$ {allProducts[aux].old_price}</p>
        <p className="newPrice">R$ {allProducts[aux].price}</p>
        <p className="typePayment">À VISTA</p>
      </div>
      <div className="shipping">
        {allProducts[aux].shipping ? (
          <Image src={shipping} />
        ) : (
          <div className="shippingEmpty"></div>
        )}
      </div>
      <button onClick={handlePurchaseProduct}>
        <Image src={carBuy} />
        <p>Comprar</p>
      </button>
    </Container>
  );
}
