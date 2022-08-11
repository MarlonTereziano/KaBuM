//Styles
import {
  HeaderContainer,
  InputContainer,
  LoginContainer,
  UtilsContainer,
} from "./styles";

//React Imports
import { useCallback } from "react";

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

//Hooks
import { useAuth } from "../../hooks/auth";

export function Header() {
  const { signIn, signOut, user } = useAuth();

  const handleSubmit = useCallback(async () => {
    try {
      await signIn({
        name: "Marlon",
        last_name: "Tereziano",
        email: "marlonphilipe@gmail.com",
        password: "123",
        adress: "Rua Piauí - Poços de Caldas - MG",
        image_profile:
          "https://static.kabum.com.br/conteudo/temas/001/imagens/k5/images/Ninja_FAQ.png",
      });
    } catch (error) {
      alert(error);
      localStorage.removeItem("@KaBuM:user");
    }
  }, [signIn]);
  return (
    <HeaderContainer>
      <a className="logoNormal">
        <Image src={LogoKabum} alt="LogoKabum" />
      </a>
      <a className="logoMini">
        <Image src={KabumMiniLogo} alt="LogoKabum" />
      </a>
      {user ? (
        <InputContainer>
          <input type="text" placeholder="Busque aqui" />
          <div className="contentSearch">
            <Image src={InputStyle} alt="input Search" width={500} />
            <button />
          </div>
          <p>Enviar para: {user.adress}</p>
        </InputContainer>
      ) : (
        <InputContainer>
          <input type="text" placeholder="Busque aqui" />
          <div className="contentSearch">
            <Image src={InputStyle} alt="input Search" width={500} />
            <button />
          </div>
        </InputContainer>
      )}

      <LoginContainer>
        {user ? (
          <div className="contentLogin">
            <img
              src={user.image_profile}
              className="imageProfile"
              alt="NinjaKabum"
            />
            <span>
              <span> Olá,</span>
              <a onClick={handleSubmit}>{user.name}</a>
              <br />
              <span className="optionsAuth">
                <a>MINHA CONTA </a>|<a onClick={signOut}> SAIR</a>
              </span>
            </span>
          </div>
        ) : (
          <div className="contentLogin">
            <Image src={ProfileIcon} alt="ProfileIcon" />
            <span>
              Faça
              <a onClick={handleSubmit}>Login </a>
              ou
              <br />
              crie seu
              <a>Cadastro</a>
            </span>
          </div>
        )}
      </LoginContainer>
      <UtilsContainer>
        <Link href="https://www.kabum.com.br/sac">
          <a target="_blank">
            <Image src={SacIcon} alt="SacIcon" />
          </a>
        </Link>
        <Link href="https://www.kabum.com.br/login">
          <a target="_blank">
            <Image src={FavoriteIcon} alt="FavoriteIcon" />
          </a>
        </Link>
        <Link href="https://www.kabum.com.br/carrinho">
          <a target="_blank">
            <Image src={ShopIcon} alt="ShopIcon" />
          </a>
        </Link>
      </UtilsContainer>
    </HeaderContainer>
  );
}
