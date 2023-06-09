import styled from "styled-components";
import { Header } from "../../component/Header";
import { PrimaryLayout } from "../../component/Layout";
import { ButtonDefault } from "../../component/Button";
import icon_bag_white from "../../assets/icon_bag_white.svg";
import img_girl from "../../assets/img_girl.svg";
import tree from "../../assets/tree.svg";
import { NavLink } from "react-router-dom";
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

  //media
  @media (max-width: 1400px) {
    .collect {
      color: navy;
      font-size: 64px;
    }
    .tree {
      display: none;
    }
    .container {
      padding-left: 250px;
      padding-right: 250px;
      display: flex;
      justify-content: space-between;
    }
  }
  @media (max-width: 1200px) {
    .collect {
      color: blue;
    }
    .tree {
      display: none;
    }
    .container {
      padding-left: 200px;
      padding-right: 200px;
      display: flex;
      justify-content: space-between;
    }
  }
  @media (max-width: 992px) {
    .collect {
      color: green;
    }
    .tree {
      display: none;
    }
    .container {
      padding-left: 150px;
      padding-right: 150px;
      display: flex;
      justify-content: space-between;
    }
  }
  @media (max-width: 768px) {
    .collect {
      color: pink;
    }
    .tree {
      display: none;
    }
    .container {
      padding-left: 100px;
      padding-right: 100px;
      display: flex;
      justify-content: space-between;
    }
  }
  @media (max-width: 576px) {
    .collect {
      color: violet;
    }
    .tree {
      display: none;
    }
    .container {
      padding-left: 50px;
      padding-right: 50px;
      display: flex;
      justify-content: space-between;
    }
  }
`;
export const HomePage = () => {
  return (
    // <PrimaryLayout>
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
    // </PrimaryLayout>
  );
};
