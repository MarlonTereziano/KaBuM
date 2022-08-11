import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-white);
  background-color: var(--color-orange-200);
  width: 100%;
  height: 4rem;
  padding: 0 4.5rem 0 4.5rem;

  h1 {
    font-size: 24px;
  }

  .contentCounter {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h2 {
    font-size: 16px;
    font-style: normal;
  }

  .watch {
    margin-top: 0.3rem;
    margin-left: 1rem;
  }
`;
