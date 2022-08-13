//Components Import
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { HeaderPromotion } from "../components/HeaderPromotion";
import { CarouselProducts } from "../components/CarouselProducts";
import { BottomContent } from "../components/BottomContent";

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
            <CarouselProducts />
            <BottomContent />
          </ContentCards>
        </Content>
      </BodyContent>
    </>
  );
}
