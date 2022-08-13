import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-blue);
  width: 100vw;
  max-width: 1440px;
  overflow: hidden;
  height: 6.5rem;
  padding-left: 3rem;
  padding-right: 3rem;

  a:hover {
    cursor: pointer;
  }

  @media (max-width: 1279px) {
    .logoNormal {
      display: none;
    }
  }
  @media (min-width: 1280px) {
    .logoMini {
      display: none;
    }
  }
  @media (max-width: 967px) {
    height: 4rem;
    .logoMini {
      position: absolute;
      margin-left: 2%;
      left: 0;
    }
    align-items: center;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 5rem;
  width: 37%;
  height: 3rem;

  input {
    font-size: 14px;
    margin-left: 4%;
    border-radius: 4px;
    border: none;
    width: 25rem;
    height: 1.7rem;
    z-index: 1;
    margin-top: -0.3rem;
    background-color: transparent;
  }

  .contentSearch {
    flex-direction: row;
    position: absolute;
    width: 50%;
    justify-content: center;
    align-items: center;
  }

  button {
    position: relative;
    margin-left: -10%;
    width: 10%;
    height: 3rem;
    z-index: 2;
    background-color: transparent;
    border: none;

    @media (min-width: 1520px) {
      width: 4rem;
      margin-left: -4rem;
    }
  }

  button:hover {
    cursor: pointer;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin-top: 4rem;
    width: auto;
    color: var(--color-white);
    background-color: transparent;
  }

  @media (max-width: 1440px) {
    margin-right: 10%;
  }
  @media (max-width: 1150px) {
    width: 45%;
    margin-left: 0;

    input {
      height: 1.5rem;
      background-color: transparent;
    }

    .contentSearch {
      width: 30rem;
    }
  }
  @media (max-width: 967px) {
    position: absolute;
    margin-left: 1rem;
    input {
      margin-top: -0.4rem;
      height: 1.2rem;
    }
    .contentSearch {
      width: 32rem;
    }
    p {
      margin-left: 0;
      width: auto;
      font-size: 10px;
      margin-top: 3rem;
    }
  }
  @media (max-width: 620px) {
    position: absolute;
    width: 23rem;
    height: 2.3rem;
    margin: 0;
    padding-left: 1rem;
    input {
      padding-left: 0.5rem;
      margin: 0;
      background-color: white;
      border-radius: 2px;
      width: 80%;
      height: 100%;
    }
    .contentSearch {
      display: none;
    }
  }
  @media (max-width: 420px) {
    width: 16rem;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: -3rem;
  width: 15%;
  height: 50%;

  .imageProfile {
    border: 1px solid var(--color-blue-300);
    border-radius: 50%;
    width: 2.2rem;
  }

  .contentLogin {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: var(--color-white-200);

    span {
      margin-left: 0.5rem;
      z-index: 1;
    }

    a {
      margin-left: 4px;
      font-weight: bold;
      color: var(--color-white-200);
    }

    a:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  .optionsAuth a {
    font-weight: normal;
    margin-left: -0.01rem;
  }

  @media (max-width: 1320px) {
    a {
      font-size: 11px;
    }
  }

  @media (max-width: 1150px) {
    width: 25%;
    margin-right: -20%;
  }
  @media (max-width: 967px) {
    display: none;
  }
`;

export const UtilsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10rem;
  width: 15%;
  height: 50%;

  a {
    margin: 0.5rem;
  }

  .shop {
    .orangeBall {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: -0.5rem;
      margin-left: 1rem;
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background-color: var(--color-orange-200);
      font-size: 12px;
      font-weight: bold;
      color: white;
      z-index: 3;
    }
  }

  @media (max-width: 967px) {
    .favorite {
      display: none;
    }
    .sac {
      display: none;
    }
    .shop {
      right: 1rem;
      position: absolute;
    }
  }
`;
