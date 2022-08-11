import { Header } from "../components/Header";
import { ContainerHeader, BodyContent } from "../styles/homePage";
import { Banner } from "../components/Banner";

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
