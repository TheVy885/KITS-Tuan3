import styled from "styled-components";

const StyledProduct = styled.div`
  margin-bottom: 20px;
  width: 312px;
  .name {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    text-transform: capitalize;
    color: #000000;
    padding-top: 20px;
  }
  .type-price {
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
  }
  .type {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;

    text-transform: capitalize;
    color: rgba(0, 0, 0, 0.5);
  }
  .price {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;

    text-align: right;
    text-transform: capitalize;
  }
`;

export const Product = ({ img, name, type, price, width, height }) => {
  return (
    <StyledProduct>
      <img src={img} alt="" />
      <div className="name">{name}</div>
      <div className="type-price">
        <div className="type">{type}</div>
        <div className="price">${price}</div>
      </div>
    </StyledProduct>
  );
};
