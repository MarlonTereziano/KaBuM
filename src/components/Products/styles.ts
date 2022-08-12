import styled from "styled-components";

export const ProductsContainer = styled.div`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .seperator {
    width: 100%;
  }

  .controls-wrapper {
    width: 100%;
  }

  .carousel-wrapper {
    width: 100%;
  }

  .rec-carousel-item:focus {
    outline: none;
    box-shadow: inset 0 0 1px 0px violet;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 100%;
  background-color: #683bb7;
  color: #fff;
  margin: 15px;
  font-size: 4em;
`;