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
import green_dress from "../../assets/green-dress.svg";
import sport_shoe from "../../assets/sport_shoe.svg";
import luxe from "../../assets/luxe.svg";
import miler from "../../assets/miler.svg";
import background from "../../assets/background.svg";
import zara from "../../assets/zara.svg";
import follow1 from "../../assets/follow1.svg";
import follow2 from "../../assets/follow2.svg";
import follow3 from "../../assets/follow3.svg";
import follow4 from "../../assets/follow4.svg";
import follow5 from "../../assets/follow5.svg";
import follow6 from "../../assets/follow6.svg";
import { Footer } from "../../component/Footer/index";
const StyledShoppingPage = styled.div`
  padding-left: 300px;
  padding-right: 300px;
  .header {
    padding-top: 60px;
    display: flex;
    justify-content: space-between;
  }
  .sale-img {
    position: relative;
    /* display: flex; */
  }
  .sale-model {
    color: white;
    background-color: black;
    position: absolute;
    top: 220px;
    right: 560px;
    width: 52px;
    height: 24px;
    text-align: center;
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
    /* padding-bottom: 150px; */
  }
  .grid-container-list-product {
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 25px;
  }
  .best-seller {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 50px;
    line-height: 59px;
    text-align: center;
    text-transform: capitalize;

    color: #000000;
  }
  .list-best-seller {
    padding-top: 40px;
    display: flex;
    justify-content: space-between;
  }
  .right {
  }
  button:hover {
    color: white;
    background-color: #ff6f61;
  }
  a:hover {
    color: #ff6f61;
  }
`;

const StyledBackgroundContent = styled.div`
  /* padding-bottom: 50px; */
  .background {
    padding: 0px;
    margin: 0px;
    position: relative;
    display: flex;
  }
  .background-img {
    width: 100%;
    height: 1300px;
  }
  .background-content {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 450px;
    right: 140px;
    width: 504px;
    gap: 55px;
  }
  .zara {
    width: 191px;
    height: 81px;
  }
  .main-content {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 40px;
    text-transform: capitalize;

    color: #ff6f61;
  }
  .btn {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 29px;
    line-height: 34px;

    text-transform: capitalize;

    color: #1e2832;
  }
`;

const StyledFollow = styled.div`
  background-color: #f0f0f0;
  padding-left: 300px;
  padding-right: 300px;
  .follow-title {
    padding-top: 100px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 50px;
    line-height: 59px;

    text-align: center;
    text-transform: capitalize;

    color: #000000;
  }
  .img-follow {
    padding-top: 60px;
    display: flex;
    justify-content: space-between;
  }
  .lisa {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 33px;
    text-align: center;
    text-transform: capitalize;

    color: #ff6f61;
    padding-top: 70px;
    padding-bottom: 130px;
  }
  button:hover {
    /* color: white; */
    background-color: #ff6f61;
  }
`;

export const ShoppingPage = () => {
  return (
    <>
      <StyledShoppingPage>
        <div className="header">
          <img src={brand_1} alt="" />
          <img src={brand_2} alt="" />
          <img className="sale-img" src={brand_3} alt="" />
          <div className="sale-model">Sale</div>
          <img src={brand_4} alt="" />
          <img src={brand_5} alt="" />
        </div>

        <div className="content">
          <div className="left">
            <div className="text">Explore new and popular styles</div>
            <img
              src={img_girl1}
              alt=""
              style={{ paddingLeft: "50px", width: "648px", height: "448" }}
            />
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
              <div>All Products</div>
              <NavLink style={{ textDecoration: "none" }}>T-Shirt</NavLink>
              <NavLink style={{ textDecoration: "none" }}>Hoodies</NavLink>
              <NavLink style={{ textDecoration: "none" }}>Jacket</NavLink>
            </div>
            <div className="right-nav">
              <ButtonDefault
                name_button="Filter"
                url={icon_filter}
                width="92px"
                height="32px"
                bgColor="black"
                textColor="#FFFFFF"
                className="btn-filter"
              />
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
                  // price="155.00"
                  type="Dress"
                  name="Yellow Reserved Hoodie"
                  tag="Sale"
                  oldPrice="364.00"
                  salePrice="155.00"
                />
              </div>
              <div className="grid-item">
                <Product
                  img={green_dress}
                  price="236.00"
                  type="Dress"
                  name="Basic Dress Green"
                  tag="Hot"
                  // bgTag="red"
                />
              </div>
              <div className="grid-item">
                <Product
                  img={sport_shoe}
                  price="198.00"
                  type="Shoe"
                  name="Nike Air Zoom Pegasus"
                  tag="Sale"
                />
              </div>
              <div className="grid-item">
                <Product
                  img={miler}
                  price="120.50"
                  type="Dress"
                  name="Nike Repel Miler"
                />
              </div>
              <div className="grid-item">
                <Product
                  img={luxe}
                  price="160.00"
                  type="Glasses"
                  name="Nike Sportswear Futura Luxe"
                />
              </div>
            </div>
          </div>
        </div>
      </StyledShoppingPage>
      <StyledBackgroundContent>
        <div className="background">
          <img src={background} className="background-img" alt="" />
          <div className="background-content">
            <div className="zara">
              <img src={zara} className="zara" alt="" />
            </div>
            <div className="main-content">
              Lustrous yet understated. The new evening wear collection
              exclusively offered at the reopened Giorgio Armani boutique in Los
              Angeles.
            </div>
            <ButtonDefault
              name_button="See Collection"
              bgColor="#FFFFFF"
              textColor="#1E2832"
              width={"237px"}
              height={"72px"}
              // url={none}
              className="btn"
            ></ButtonDefault>
          </div>
        </div>
      </StyledBackgroundContent>

      <StyledShoppingPage>
        <div className="container-best-seller">
          <div className="best-seller">Best Sellers</div>
        </div>
        <div className="nav">
          <div className="left-nav">
            <NavLink style={{ textDecoration: "none" }}>All Products</NavLink>
            <NavLink style={{ textDecoration: "none" }}>T-Shirt</NavLink>
            <NavLink style={{ textDecoration: "none" }}>Hoodies</NavLink>
            <NavLink style={{ textDecoration: "none" }}>Jacket</NavLink>
          </div>
          <div className="right-nav">
            <ButtonDefault
              name_button="Show All"
              // url={icon_filter}
              width="92px"
              height="32px"
              bgColor="#1E2832"
              textColor="#FFFFFF"
            />
          </div>
        </div>
        <div className="list-best-seller">
          <Product
            img={green_dress}
            price="236.00"
            type="Dress"
            name="Basic Dress Green"
            tag="Hot"
            // bgTag="red"
          />
          <Product
            img={luxe}
            price="160.00"
            type="Glasses"
            name="Nike Sportswear Futura Luxe"
          />
          <Product
            img={hoodies}
            // price="155.00"
            type="Dress"
            name="Yellow Reserved Hoodie"
            tag="Sale"
            oldPrice="364.00"
            salePrice="155.00"
          />
          <Product
            img={sport_shoe}
            // price="198.00"
            oldPrice="220.00"
            salePrice="198.00"
            type="Shoe"
            name="Nike Air Zoom Pegasus"
            tag="Sale"
          />
        </div>
      </StyledShoppingPage>
      <StyledFollow>
        <div className="follow-title">
          Follow products and discounts on Instagram
        </div>
        <div className="img-follow">
          <img src={follow1} alt="" />
          <img src={follow2} alt="" />
          <img src={follow3} alt="" />
          <img src={follow4} alt="" />
          <img src={follow5} alt="" />
          <img src={follow6} alt="" />
        </div>
        <div className="lisa">@Lisa.Official</div>
      </StyledFollow>
      <Footer />
    </>
  );
};
