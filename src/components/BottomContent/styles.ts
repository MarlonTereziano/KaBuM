import styled from "styled-components";

export const LastContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-around;
  height: 21.125rem;
  background-color: var(--color-white);
  padding: 3%;

  div:hover {
    filter: brightness(0.9);
    width: 23.8rem;
    cursor: pointer;
  }

  @media (max-width: 967px) {
    height: 50rem;
    margin-top: 10%;
    flex-direction: column;
  }
`;
