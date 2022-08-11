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
  height: 80rem;
  background-color: var(--color-blue-200);
`;

export const Content = styled.div`
  display: flex;
  max-width: 1440px;
  position: relative;
  background-color: var(--color-white-300);
  margin-top: -10vw;
  width: 100vw;
  height: 40rem;
  z-index: 3;

  @media (min-width: 2200px) {
    margin-top: -6vw;
  }
`;
