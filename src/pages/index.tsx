//Components Import
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { HeaderPromotion} from "../components/HeaderPromotion";

//Styles Imports
import { ContainerHeader, BodyContent, Content } from "../styles/homePage";

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
        </Content>
      </BodyContent>
    </>
  );
}
