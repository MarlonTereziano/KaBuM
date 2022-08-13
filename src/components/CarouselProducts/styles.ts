import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 31.688rem;
  margin-top: 3rem;
  padding: 0 2rem 0 2rem;
  background-color: var(--color-white-300);

  @media (max-width: 967px) {
    padding: 0;
    height: 26rem;
  }

  .seperator {
    width: 100%;
  }

  .controls-wrapper {
    width: 100%;
  }

  .carousel-wrapper {
    width: 100%;
  }

  .rec.rec-arrow {
    border: none;
    background-color: transparent;
    border: none;
    box-shadow: none;
    color: var(--color-black-200);
    @media (max-width: 967px) {
      display: none;
    }
  }

  .rec.rec-arrow:hover {
    color: var(--color-black-200);
  }

  .rec-carousel-item:focus {
    outline: none;
    box-shadow: inset 0 0 1px 0px violet;
  }

  .sc-iBkjds.kdCslO.rec.rec-pagination {
    display: none;
  }
  .sc-iBkjds.hHSNMm.rec.rec-pagination{
    display: none;
  }
`;

export const Item = styled.div`
  display: flex;
  height: 25.063rem;
  width: 100%;
  background-color: var(--color-white);
  color: red;
  margin: 10px;
  padding-top: 0.5rem;
  font-size: 4em;

  @media (max-width: 967px) {
    height: 24.5rem;
  }
`;
