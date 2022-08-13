//Styles
import { LastContainer } from "./styles";

//Next Imports
import Image from 'next/image';

//Images Imports
import core from "../../../public/assets/others/core.svg";
import prime from '../../../public/assets/others/prime.svg';
import razer from '../../../public/assets/others/razer.svg';

export function BottomContent() {
  return (
    <LastContainer>
      <div className="core">
        <Image src={core} alt="coreI7" />
      </div>
      <div className="prime">
        <Image src={prime} alt="KabumPrime" />
      </div>
      <div className="razer">
        <Image src={razer} alt="NoteRazer" />
      </div>
    </LastContainer>
  );
}
