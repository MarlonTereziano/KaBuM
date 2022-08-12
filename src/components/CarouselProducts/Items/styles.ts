import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  line-height: 18px;
  height: 100%;

  h1 {
    color: var(--color-black-300);
    font-style: normal;
    font-size: 14px;
    line-height: 18px;

    @media (max-width: 1180px) {
      font-size: 12px;
    }
  }
  p {
    color: var(--color-black-400);
    font-style: normal;
    font-size: 12px;
    line-height: 18px;
    text-transform: uppercase;
  }

  .favorite{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 2rem;
    margin-left: 1rem;
    margin-right: 1rem;
    a{
        display: flex;
        align-items: center;
    }
    span{
        display: flex;
        align-items: center;
    }
  }

  .imageContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 6rem;
    margin-top: 1rem;
  }

  .description {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: 8rem;
    padding: 1rem;
    p {
      margin-bottom: 0.5rem;
    }
  }

  .price {
    padding-left: 1rem;
    .oldPrice {
      text-decoration: line-through;
      line-height: 21px;
      font-size: 12px;
      color: var(--color-black-500);
    }
    .newPrice {
      font-weight: bold;
      line-height: 34px;
      font-size: 24px;
      color: var(--color-orange-200);
    }
  }

  .shipping {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    .shippingEmpty {
      padding: 0.5rem;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    direction: row;
    border: none;
    border-radius: 0.3rem;
    padding: 1rem 0 1rem 0;
    bottom: 0;
    background-color: var(--color-orange-200);
    p {
      line-height: 18px;
      font-size: 12px;
      font-weight: bold;
      margin-left: 0.5rem;
      color: var(--color-white);
    }
  }
  button:hover {
    cursor: pointer;
    filter: brightness(0.85);
  }
`;
