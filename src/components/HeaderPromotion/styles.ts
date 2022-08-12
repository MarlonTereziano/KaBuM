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
    margin-right: 1rem;
  }

  @media (max-width: 900px) {
    padding: 0 2rem 0 2rem;
    h1 {
      font-size: 20px;
    }
    h2 {
      font-size: 12px;
    }
  }
  @media (max-width: 600px) {
    h1 {
      font-size: 10px;
    }
    span {
      width: 15px;
    }
    h2 {
      font-size: 7px;
    }
  }
`;
