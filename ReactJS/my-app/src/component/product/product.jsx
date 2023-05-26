import clockIcon from "assets/clockIcon.svg";
import eth from "assets/eth.svg";
import styled from "styled-components";
const StyledProduct = styled.div`
  width: 400px;
  height: 384px;
  background: #ffffff;
  border-radius: 16px;
  .img-product {
    
    padding-left: 12px;
    padding-top: 12px;
    padding-right: 12px;
    position: relative;
  }
  .img-product img{
    /* width: 348px; */
  }
  .time-left {
    /* justify-content: center; */
    position: absolute;
    top: 206px;
    left: 20px;
    display: flex;
    align-items: center;
  }
  .info-product {
    padding-top: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .product-name {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 31px;
    font-feature-settings: "salt" on;

    /* Text/color1 */

    color: #27262e;
  }

  .like {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

    text-align: right;
    font-feature-settings: "salt" on;

    color: #747475;
  }
  .user-info {
    display: flex;
    align-items: center;
  }
  .user-name {
    padding-left: 10px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

    font-feature-settings: "salt" on;

    color: #747475;
  }
  .price {
    display: flex;
  }
  .eth-price {
  }
  .stt-bid {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;

    display: flex;
    align-items: flex-end;
    font-feature-settings: "salt" on;

    color: #747475;
  }
  .bid {
    padding-top: 16px;
    display: flex;
    justify-content: space-between;
  }
  .eth-price {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    /* identical to box height */

    display: flex;
    align-items: flex-end;
    text-align: right;
    font-feature-settings: "salt" on;

    /* Text/color1 */

    color: #27262e;
    padding-left: 5px;
  }
  span {
    padding-left: 5px;
    color: #747475;
  }
`;

export const Product = ({
  imgProduct,
  imgHoverText,
  timeLeft,
  nameProduct,
  likes,
  imgUser,
  nameUser,
  textBid,
  price,
}) => {
  return (
    <StyledProduct>
      <div className="img-product">
        <img src={imgProduct} alt="" style={{width:"372px"}}/>
        <div className="time-left">
          <img src={clockIcon} alt="" />
          &emsp;
          {timeLeft}
        </div>
        <div className="info-product">
          <div className="product-name">{nameProduct}</div>
          <div className="like">{likes} Likes</div>
        </div>
        <div className="user-info">
          <img src={imgUser} alt="" />
          <div className="user-name">{nameUser}</div>
        </div>
        <div className="bid">
          <div className="stt-bid">{textBid}</div>
          <div className="price">
            <img src={eth} alt="" />
            <div className="eth-price">
              {price} <span> ETH</span>
            </div>
          </div>
        </div>
      </div>
    </StyledProduct>
  );
};
