import styled from "styled-components";
import brand_1 from "../../assets/brand-1.svg";
import brand_2 from "../../assets/brand-2.svg";
import brand_3 from "../../assets/brand-3.svg";
import brand_4 from "../../assets/brand-4.svg";
import brand_5 from "../../assets/brand-5.svg";
import img_girl1 from "../../assets/img_girl1.svg";
import model1 from "../../assets/model1.svg";
import model2 from "../../assets/model2.svg";
import model3 from "../../assets/model3.svg";
import model4 from "../../assets/model4.svg";
// import { DefaultBtn } from "../../component/Button/Button.stories";
import { ButtonDefault } from "../../component/Button";
import { NavLink } from "react-router-dom";
import icon_filter from "../../assets/icon-filter.svg";
import { Product } from "../../component/Product";
import pink_pant from "../../assets/pink-short.svg";
import sport_bag from "../../assets/sport-bag.svg";
import scarf from "../../assets/scarf.svg";
import hoodies from "../../assets/hoodies.svg";
const StyledShoppingPage = styled.div`
  padding-left: 300px;
  padding-right: 300px;
  .header {
    padding-top: 60px;
    display: flex;
    justify-content: space-between;
  }
  .content {
    margin-top: 60px;
    margin-bottom: 50px;
    height: 648px;
  }
  .left {
    width: 50%;
    float: left;
    display: flex;
    position: relative;
    /* padding-right: 12px; */
  }
  .text {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    text-align: center;
    text-transform: uppercase;
    position: absolute;
    top: 306px;
    left: -272px;
    transform: rotate(-89deg);
  }
  .right {
    width: 50%;
    float: right;
    /* padding-left: 12px; */
  }
  .text img {
    /* width: 80%;
    height: 80%; */

    padding-left: 50px;
  }
  .grid-container {
    display: grid;
    grid-template-columns: auto auto;
    gap: 25px;
  }
  .product {
    margin-top: 100px;
  }

  .product-text {
    /* margin-top: 100px; */
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 50px;
    line-height: 59px;

    text-align: center;
    text-transform: capitalize;

    color: #000000;
    justify-content: center;
  }
  .nav {
    display: flex;
    justify-content: space-between;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    text-transform: capitalize;

    text-decoration: none;
    color: rgba(0, 0, 0, 0.5);
    margin-top: 40px;
  }
  .left-nav {
    display: flex;
    justify-content: space-between;
    gap: 50px;
  }
  .list-product {
    padding-top: 80px;
  }
  .grid-container-list-product {
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 25px;
  }
`;

export const ShoppingPage = () => {
  return (
    <StyledShoppingPage>
      <div className="header">
        <img src={brand_1} alt="" />
        <img src={brand_2} alt="" />
        <img src={brand_3} alt="" />
        <img src={brand_4} alt="" />
        <img src={brand_5} alt="" />
      </div>

      <div className="content">
        <div className="left">
          <div className="text">Explore new and popular styles</div>
          <img src={img_girl1} alt="" style={{ paddingLeft: "70px" }} />
        </div>
        <div className="right">
          <div class="grid-container">
            <div class="grid-item">
              <img src={model1} alt="" />
            </div>
            <div class="grid-item">
              <img src={model2} alt="" />
            </div>
            <div class="grid-item">
              <img src={model3} alt="" />
            </div>
            <div class="grid-item">
              <img src={model4} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="product">
        <div className="product-text">Or subscribe to the newsletter</div>

        <div className="nav">
          <div className="left-nav">
            <NavLink>All Products</NavLink>
            <NavLink>T-Shirt</NavLink>
            <NavLink>Hoodies</NavLink>
            <NavLink>Jacket</NavLink>
          </div>
          <div className="right-nav">
            <ButtonDefault name_button="Filter" url={icon_filter} />
          </div>
        </div>

        <div className="list-product">
          <div className="grid-container-list-product">
            <div className="grid-item">
              <Product
                img={pink_pant}
                price="63.85"
                type="Dress"
                name="Adicolor Classics Joggers"
              />
            </div>
            <div className="grid-item">
              <Product
                img={sport_bag}
                price="130.00"
                type="Bag"
                name="Nike Sportswear Futura Luxe"
              />
            </div>
            <div className="grid-item">
              <Product
                img={scarf}
                price="53.00"
                type="Scarf"
                name="Geometric print Scarf"
              />
            </div>
            <div className="grid-item">
              <Product
                img={hoodies}
                price="155.00"
                type="Dress"
                name="Yellow Reserved Hoodie"
              />
            </div>
          </div>
        </div>
      </div>
    </StyledShoppingPage>
  );
};
