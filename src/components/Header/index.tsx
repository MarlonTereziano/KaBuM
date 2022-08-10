//Styles
import {
  HeaderContainer,
  InputContainer,
  LoginContainer,
  UtilsContainer,
} from "./styles";

//Next Imports
import Image from "next/image";
import Link from "next/link";

//Assets
import LogoKabum from "../../../public/assets/LogoKabum.svg";
import InputStyle from "../../../public/assets/InputStyle.svg";
import ProfileIcon from "../../../public/assets/ProfileIcon.svg";
import SacIcon from "../../../public/assets/SacIcon.svg";
import FavoriteIcon from "../../../public/assets/FavoriteIcon.svg";
import ShopIcon from "../../../public/assets/ShopIcon.svg";
import KabumMiniLogo from "../../../public/assets/KabumMiniLogo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <a className="logoNormal" href="/">
        <Image src={LogoKabum} alt="LogoKabum" />
      </a>
      <a className="logoMini" href="/">
        <Image src={KabumMiniLogo} alt="LogoKabum" />
      </a>
      <InputContainer>
        <input type="text" placeholder="Busque aqui" />
        <div className="contentSearch">
          <Image src={InputStyle} alt="input Search" width={500} />
          <button />
        </div>
      </InputContainer>
      <LoginContainer>
        <div className="contentLogin">
          <Image src={ProfileIcon} alt="ProfileIcon" />
          <span>
            Faça
            <Link href="/">
              <a>Login </a>
            </Link>
            ou
            <br />
            crie seu
            <Link href="/">
              <a>Cadastro</a>
            </Link>
          </span>
        </div>
      </LoginContainer>
      <UtilsContainer>
        <a target="_blank" href="https://www.kabum.com.br/faq">
          <Image src={SacIcon} alt="SacIcon" />
        </a>
        <a target="_blank" href="/">
          <Image src={FavoriteIcon} alt="FavoriteIcon" />
        </a>
        <a target="_blank" href="https://www.kabum.com.br/carrinho">
          <Image src={ShopIcon} alt="ShopIcon" />
        </a>
      </UtilsContainer>
    </HeaderContainer>
  );
}
