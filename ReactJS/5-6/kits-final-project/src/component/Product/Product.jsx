import styled from "styled-components";
import PropTypes from "prop-types";
import icon_heart from "../../assets/icon_heart.svg";
import icon_search from "../../assets/icon_search.svg";
import icon_bag from "../../assets/icon_bag_white.svg";
const StyledProduct = styled.div`
  margin-bottom: 20px;
  width: 312px;
  position: relative;

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
    text-align: center;
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
  .normalPrice {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;

    text-align: right;
    text-transform: capitalize;
  }
  .price {
    display: flex;
    gap: 20px;
    text-align: center;
    align-items: center;
  }
  .tag {
    background-color: ${(props) => props.bgTag};
    text-align: center;
    color: white;
    width: 52px;
    height: 24px;
    position: absolute;
    top: 30px;
    left: 0px;
  }
  //dấu & để khai báo khi xuất hiện class sale-tag thì mới áp css cho nó, chứ class sale-tag ko phải con của StyledProduct
  &.sale-tag .tag {
    background-color: black;
  }
  &.hot-tag .tag {
    background-color: red;
  }
  .oldPrice {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    text-align: right;
    text-decoration-line: line-through;
    text-transform: capitalize;

    color: rgba(0, 0, 0, 0.5);
  }
  .salePrice {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;

    text-align: right;
    text-transform: capitalize;

    color: #ff6f61;
  }
  .product {
    position: relative;
  }

  .action {
    position: absolute;
    width: 312px;
    height: 55px;
    background-color: black;
    align-items: center;
    display: flex;
    justify-content: space-between;
    top: 344px;
    left: 0px;
    /* display: none; */
    transition: all 0.5s ease-in;
    opacity: 0;
    visibility: hidden;
  }

  .product:hover + .action {
    /* display: none; */

    visibility: visible;
    opacity: 1;
  }
  .left {
    padding-left: 20px;
    display: flex;
    gap: 20px;
  }
  .right {
    padding-left: 30px;
    display: flex;
    /* justify-content: space-around; */
    gap: 20px;
    align-items: center;
  }
  .shop-now {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-transform: capitalize;
    color: #ffffff;
  }
  .shop-now:hover {
    color: #ff6f61;
  }
  .product:hover + .action:hover {
    /* display: none; */

    /* visibility: visible;
    opacity: 1;
     */
    color: #ff6f61;
  }
  .product:hover + .action:hover .shop-now:hover {
    /* display: none; */

    /* visibility: visible;
    opacity: 1;
     */
    color: #ff6f61;
  }

`;

export const Product = ({
  img,
  name,
  type,
  price,
  width,
  height,
  tag,
  bgTag,
  oldPrice,
  salePrice,
}) => {
  return (
    <StyledProduct
      className={`${tag?.toLowerCase()}-tag`}
      tag={tag}
      // bgTag={bgTag}
    >
      <div className="product">
        <img src={img} alt="" />
        {tag ? <div className="tag">{tag?.toUpperCase()}</div> : null}
        <div className="name">{name}</div>
        <div className="type-price">
          <div className="type">{type}</div>
          {/* <div className="price">${price}</div> */}
          <div className="price">
            {oldPrice ? (
              <div className="oldPrice">
                <s>${oldPrice}</s>
              </div>
            ) : null}
            {salePrice ? <div className="salePrice">${salePrice}</div> : null}
            {price ? <div className="normalPrice">${price}</div> : null}
          </div>
        </div>
      </div>
      <div className="action">
        <div className="left">
          <img src={icon_heart} alt="" />
          <img src={icon_search} alt="" />
        </div>
        <div className="right">
          <img src={icon_bag} alt="" />
          <div className="shop-now">Shop Now</div>
        </div>
      </div>
    </StyledProduct>
  );
};

Product.propTypes = {
  tag: PropTypes.oneOf(["sale", "hot"]),
};
