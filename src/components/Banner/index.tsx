import Image from "next/image";
import BodyBanner from "../../../public/assets/BodyBanner.svg";
import {ContainerImageBanner} from './styles'

export function Banner() {
  return (
    <ContainerImageBanner>
      <Image src={BodyBanner} alt="banner"/>
    </ContainerImageBanner>
  );
}
