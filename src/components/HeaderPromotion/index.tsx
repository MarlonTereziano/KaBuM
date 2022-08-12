import { HeaderContainer } from "./styles";
import Watch from "../../../public/assets/Watch.svg";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

export function HeaderPromotion() {
  const Ref = useRef(null);
  const [timer, setTimer] = useState("00:00:00");

  const getTimeRemaining = (e: any) => {
    const total = Date.parse(e) - Date.parse(new Date().toString());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor(((total / 1000) * 60 * 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e: any) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e: any) => {
    setTimer("00:46:39");
    if (Ref.current) clearInterval(Ref.current);
    const id: any = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 910000);
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  return (
    <HeaderContainer>
      <h1>BLACK FRIDAY</h1>
      <div className="contentCounter">
        <h2>A PROMOÇÃO TERMINA EM:</h2>
        <span className="watch">
          <Image src={Watch} alt="WatchImg" />
        </span>
        <h1>0D {timer}</h1>
      </div>
    </HeaderContainer>
  );
}
