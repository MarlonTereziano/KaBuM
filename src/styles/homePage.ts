import styled from "styled-components";

export const ContainerHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-blue);
`;

export const BodyContent = styled.div`
  display: flex;
  justify-content: center;
  height: 60.438rem;
  background-color: var(--color-blue-200);
  @media (max-width: 967px) {
    background: none;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  background-color: var(--color-white-300);
  margin-top: -15rem;
  width: 100vw;
  height: 55.813rem;
  z-index: 3;

  @media (max-width: 1150px) {
    height: 20rem;
    margin-top: -10rem;
  }

  @media (max-width: 750px) {
    height: 20rem;
    margin-top: -4rem;
  }

  @media (min-width: 2200px) {
    margin-top: -6vw;
  }
`;

export const ContentCards = styled.div`
  position: relative;
  width: 100%;
  height: 30.688rem;
`;
