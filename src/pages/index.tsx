//Components Import
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { HeaderPromotion} from "../components/HeaderPromotion";

//Hooks
import { useAuth } from "../hooks/auth";

//Styles Imports
import { ContainerHeader, BodyContent, Content, ContentCards } from "../styles/homePage";

export default function homePage() {
  const user = useAuth();
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
            <h1>teste</h1>
          </ContentCards>
        </Content>
      </BodyContent>
    </>
  );
}
