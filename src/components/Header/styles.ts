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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
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
    margin-left: -8%;
    width: 8%;
    height: 3rem;
    z-index: 2;
    background-color: transparent;
    border: none;
  }

  button:hover {
    cursor: pointer;
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
    margin-left: -10%;
    width: 20rem;
    .contentSearch {
      width: 30rem;
      margin: 0;
    }
  }
  @media (max-width: 580px) {
    margin-left: 10%;
    input {
      margin-top: -0.5rem;
      height: 1rem;
    }
    .contentSearch {
      margin-top: -5%;
      width: 20rem;
    }
  }
`;
export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: -3rem;
  width: 15%;
  height: 50%;

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
      text-decoration: underline;
    }
  }

  @media (max-width: 1150px) {
    width: 25%;
    margin-right: -20%;
  }
  @media (max-width: 967px) {
    width: 15rem;
    margin-right: 0;
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

  @media (max-width: 967px) {
    margin: 0;
    width: 10rem;
  }
`;
