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
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  @media (max-width: 967px) {
    height: 50rem;
    margin-top: 10%;
    flex-direction: column;
  }
`;
