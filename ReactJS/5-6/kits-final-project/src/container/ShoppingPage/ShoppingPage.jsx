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
import icon_insta from "../../assets/icon_insta.svg";
import { Footer } from "../../component/Footer/index";
import { ResponsiveSlick } from "../../component/Slick";

import { Header } from "../../component/Header";
import { PrimaryLayout } from "../../component/Layout";
// import { ButtonDefault } from "../../component/Button";
import icon_bag_white from "../../assets/icon_bag_white.svg";
import img_girl from "../../assets/img_girl.svg";
import tree from "../../assets/tree.svg";
// import { NavLink } from "react-router-dom";
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
    top: 1000px;
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
    /* margin-top: 100px; */
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
  .grid-container-list-best-seller {
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 25px;
    padding-top: 40px;
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
  .btn:hover {
    color: black;
    background-color: #ff6f61;
  }
  .background button:hover {
    background-color: #ff6f61;
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
  .img-hover {
    width: 200px;
    height: 200px;
    /* background-color: (black 0.6); */
    background: black;
    position: absolute;
    /* top:10px;
    left:20px; */
    top: 4294px;
    /* opacity: 0;
    visibility: hidden; */
    opacity: 0.3;
  }
  .img-follow {
    display: flex;
    justify-content: space-between;
  }

  .outer {
    opacity: 0;
    -webkit-transition: 0.4s ease-in-out;
    transition: 0.4s ease-in-out;
    position: absolute;
    top: 0;
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.2);
  }

  .outer:hover {
    opacity: 1;
  }
  .section img:hover {
    opacity: 1;
  }
  .section {
    position: relative;
    /* margin: 3em auto; */
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: space-between;
  }
  .outer img {
    width: 50px;
    height: 50px;
  }
`;
const StyledHomePage = styled.div`
  background-color: #f0f0f0;
  .container {
    display: flex;
    /* padding-top: 150px; */
    padding-left: 300px;
    padding-right: 300px;
    height: 100%;
    padding-bottom: 80px;
  }
  .left-content {
    width: 60%;
    float: left;
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding-right: 150px;
  }
  .right-content {
    width: 70%;
    float: right;
    padding-left: 150px;
    position: relative;
  }
  .collect {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 74px;
    line-height: 55px;
    text-transform: capitalize;

    color: #000000;
  }
  .content {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 55px;

    text-transform: capitalize;
  }
  button {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 29px;
    line-height: 34px;
    text-transform: capitalize;

    color: #ffffff;
  }
  button:hover {
    background-color: #ff6f61;
    color: #ffffff;
  }
  .tree {
    position: absolute;
    top: 320px;
    right: 0px;
  }
`;
export const ShoppingPage = () => {
  return (
    <>
      <StyledHomePage>
        <Header />
        <div className="container">
          <div className="left-content">
            <div className="collect">Collections</div>
            <div className="content">
              you can explore ans shop many differnt collection from various
              barands here.
            </div>
            <ButtonDefault
              url={icon_bag_white}
              name_button="Shop Now"
              width="222px"
              height="72px"
              bgColor="black"
              textColor="white"
              NavLink="./shopping"
            />
          </div>
          <div className="right-content">
            <img src={img_girl} alt="" />
          </div>
          <div className="tree">
            <img src={tree} alt="" />
          </div>
        </div>
      </StyledHomePage>

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
            <div>All Products</div>
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
        {/* <div className="grid-container-list-best-seller">
          <div class="grid-item">
            <Product
              img={green_dress}
              price="236.00"
              type="Dress"
              name="Basic Dress Green"
              tag="Hot"
              // bgTag="red"
            />
          </div>
          <div class="grid-item">
            <Product
              img={luxe}
              price="160.00"
              type="Glasses"
              name="Nike Sportswear Futura Luxe"
            />
          </div>
          <div class="grid-item">
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
          <div class="grid-item">
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
        </div> */}
        <ResponsiveSlick></ResponsiveSlick>
      </StyledShoppingPage>

      <StyledFollow>
        <div className="follow-title">
          Follow products and discounts on Instagram
        </div>
        <div className="img-follow">
          <div className="section">
            <img src={follow1} alt="" />

            <div className="outer">
              <img src={icon_insta} alt="" />
            </div>
          </div>
          <div className="section">
            <img src={follow2} alt="" />

            <div className="outer">
              <img src={icon_insta} alt="" />
            </div>
          </div>
          <div className="section">
            <img src={follow3} alt="" />

            <div className="outer">
              <img src={icon_insta} alt="" />
            </div>
          </div>
          <div className="section">
            <img src={follow4} alt="" />

            <div className="outer">
              <img src={icon_insta} alt="" />
            </div>
          </div>
          <div className="section">
            <img src={follow5} alt="" />

            <div className="outer">
              <img src={icon_insta} alt="" />
            </div>
          </div>
          <div className="section">
            <img src={follow6} alt="" />

            <div className="outer">
              <img src={icon_insta} alt="" />
            </div>
          </div>
          {/* </div> */}
          {/* <div className="img-hover"></div> */}

          {/* <div className="section">
          <img src={follow1} alt="" />
          <div className="outer">
            
             <img src={icon_insta} alt="" />
           
          </div>
        </div> */}
        </div>
        <div className="lisa">@Lisa.Official</div>
      </StyledFollow>
      <Footer />
    </>
  );
};
