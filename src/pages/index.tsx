//React Imports
import { useCallback } from "react";

//Components Import
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { HeaderPromotion } from "../components/HeaderPromotion";
import { Products } from "../components/Products";

//Styles Imports
import {
  ContainerHeader,
  BodyContent,
  Content,
  ContentCards,
} from "../styles/homePage";


export default function homePage() {

  return (
    <>
      <ContainerHeader>
        <Header />
      </ContainerHeader>
      <Banner />
      <BodyContent>
        <Content>
          <HeaderPromotion />
          <ContentCards>
            {/* <Carrousel> */}
              <Products/>
            {/* </Carrousel> */}
          </ContentCards>
        </Content>
      </BodyContent>
    </>
  );
}
