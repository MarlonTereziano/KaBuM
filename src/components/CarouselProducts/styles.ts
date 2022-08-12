import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  margin-top: 3rem;
  padding: 0 2rem 0 2rem;
  background-color: var(--color-white-300);

  .seperator {
    width: 100%;
  }

  .controls-wrapper {
    width: 100%;
  }

  .carousel-wrapper {
    width: 100%;
  }

  .rec.rec-arrow{
    border:none;
    background-color: transparent; 
    border: none;
    box-shadow: none;
    color:var(--color-black-200);
  }

  .rec.rec-arrow:hover{
    color:var(--color-black-200);
  }

  .rec-carousel-item:focus {
    outline: none;
    box-shadow: inset 0 0 1px 0px violet;
  }

  .sc-iBkjds.kdCslO.rec.rec-pagination{
    display: none;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25.063rem;
  width: 100%;
  background-color: var(--color-white);
  color: red;
  margin: 15px;
  font-size: 4em;
`;
