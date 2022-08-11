import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { ContainerHeader, BodyContent } from "../styles/homePage";


export default function homePage() {
  return (
    <>
      <ContainerHeader>
        <Header />
      </ContainerHeader>
      <Banner/>
      <BodyContent>

      </BodyContent>
    </>
  );
}
