//Next Import
import Image from "next/image";

//Images Import
import BodyBanner from "../../../public/assets/others/BodyBanner.svg";

//Styles Import
import {ContainerImageBanner} from './styles'

export function Banner() {
  return (
    <ContainerImageBanner>
      <Image src={BodyBanner} alt="banner"/>
    </ContainerImageBanner>
  );
}
