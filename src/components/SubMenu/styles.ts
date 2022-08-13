import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 2rem;
  padding-left: 1.335rem;
  background-color: var(--color-orange-200);
  font-size: 8px;
  line-height: 24px;
  color: var(--color-white);

  hr {
    height: 80%;
    border: 0.1px solid;
    color: var(--color-orange-400);
  }

  h1:hover {
    cursor: pointer;
    filter: brightness(0.85);
  }

  .department {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20rem;
    height: 100%;
    background-color: var(--color-orange-300);
  }
  .prime {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15rem;
    height: 100%;
    background-color: var(--color-orange-200);
  }
  .sac {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20rem;
    height: 100%;
    background-color: var(--color-orange-200);
  }

  @media (max-width: 967px) {
    height: 1.5rem;
    font-size: 6px;
  }
  @media (max-width: 580px) {
    height: 1rem;
    font-size: 4px;
  }
`;
