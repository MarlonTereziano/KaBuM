import { HeaderContainer } from "./styles";
import Watch from "../../../public/assets/Watch.svg";
import Image from "next/image";

export function HeaderPromotion() {
  return (
    <HeaderContainer>
      <h1>BLACK FRIDAY</h1>
      <div className="contentCounter">
        <h2>
          A PROMOÇÃO TERMINA EM:
        </h2>
        <span className="watch">
            <Image src={Watch} alt="WatchImg" />{" "}
        </span>
      </div>
    </HeaderContainer>
  );
}
