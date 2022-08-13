//Components Import
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { HeaderPromotion } from "../components/HeaderPromotion";
import { CarouselProducts } from "../components/CarouselProducts";
import { BottomContent } from "../components/BottomContent";
import { SubMenu } from "../components/SubMenu";

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
      <SubMenu />
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
