import Header from "component/Header";
import styled from "styled-components";
import { SideBar } from "component/sidebar";
import { Button } from "component";
import props from "prop-types";
import Card from "component/card";
import { Product } from "component/product/product";
import user1 from "assets/user1.svg";
import user from "assets/user.svg";

import ape from "assets/smilling-ape.svg";
import { Follow } from "component/follow";
const LayoutStyled = styled.div`
  /* background-color: white; */
  background-color: #caeae6;
  min-height: 100vh;
  .right {
    float: right;
    width: 80%;
    background-color: #caeae6;
  }
`;
const ContentStyled = styled.div`
  /* background-color: #f23412; */
  background-color: #caeae6;
  margin-top: 64px;
  height: 100vh;
  padding-left: 32px;

  .discover {
    width: 716px;
    height: 354px;
    background-color: #4300de;
    background-image: linear-gradient(90deg, #4300de 0%, #fc00ff 100%);

    border-radius: 12px;
    padding-top: 77px;
    padding-left: 60px;
    padding-right: 60px;
  }
  .content {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 54px;
    line-height: 120%;

    letter-spacing: -0.02em;

    color: #ffffff;
  }

  .btn {
    padding-top: 30px;
    display: flex;
    gap: 24px;
  }
  .top-content {
    display: flex;
  }
  .grid-container {
    display: grid;
    grid-template-columns: auto auto;
    gap: 20px;
    justify-content: space-around;
  }
  .grid-item {
  }
  .grid-container-product {
    display: grid;
    grid-template-columns: auto auto;
    gap: 30px;
    /* justify-content: space-around; */
    float: left;
  }
`;
const SideBarStyled = styled.div`
  float: left;
  width: 20%;
`;
const StyledCSSButtonDiscover = styled.button`
  width: ${(prop) => `${prop.width}px`};
  height: ${(prop) => `${prop.height}px`};
  color: ${(prop) => prop.textColor};
  background-color: ${(props) => props.bgColor};
  /* border: ${(props) =>
    props.borderColor ? `1px solid ${props.boderColor}` : "none"}; */
  border: ${(props) => `2px solid ${props.borderColor}`};
  border-radius: ${(props) => props.borderRadius};
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
`;

export const StyledButtonDiscover = ({
  width,
  height,
  textColor,
  bgColor,
  borderColor,

  borderRadius,
  text,
}) => {
  return (
    <StyledCSSButtonDiscover
      width={width}
      height={height}
      textColor={textColor}
      bgColor={bgColor}
      borderColor={borderColor}
      borderRadius={borderRadius}
      text={text}
    >
      {text}
    </StyledCSSButtonDiscover>
  );
};

StyledButtonDiscover.defaultProps = {
  bgColor: "#FFFFFF",
  textColor: "#5429FF",
  width: 128,
  height: 46,
  borderRadius: "40px",
  fontSize: 16,
  text: "abc",
};

const StyledCard = styled.div`
  /* padding: 24px; */
  /* background-color: white; */
  border-radius: 20px;
  font-size: 12px;
  line-height: 16px;
  padding-left: 20px;
  color: #747475;
  .title {
    color: #747475;
    text-align: left;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 12px;
  }
  .amount {
    font-size: 24px;
    line-height: 31px;
    margin-left: 24px;
    /* display: flex;
    gap: 34px; */
    font-weight: 700;
    color: #27262e;
  }
  .ammount-wrapper {
    /* margin-bottom: 12px; */

    display: flex;
    justify-content: space-between;
  }
  .eth {
    margin-left: 10px;
  }
  .content {
    width: 90px;
    height: 31px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 31px;

    color: #27262e;
  }
`;
const StyledTrending = styled.div`
  padding-top: 32px;
  background-color: #caeae6;
  color: #27262e;

  * {
    font-family: "DM Sans";
    font-style: normal;
    /* width: 60%; */
  }
  .trending {
    display: flex;
    justify-content: space-between;
    width: 78%;
    /* width: 50%; */
    float: left;
  }
  .top-creator {
    width: 40%;
    float: right;
  }
  .trending-auctions {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 31px;
    font-feature-settings: "salt" on;
    float: left;
    color: #27262e;
  }

  .nav {
    display: flex;
    float: right;
    justify-content: space-between;
    gap: 30px;
    padding-top: 8px;
  }
  .nav-item {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;

    color: #7a797d;
  }
  .product {
    padding-top: 68px;
  }
  .grid-container-product {
  }

  .top-creator {
    width: 400px;
    height: auto;
    background: rgb(255, 255, 255);
    border-radius: 16px;
    /* position: absolute; */
    /* right: 192px; */
    margin-right: 190px;
    float: right;
    color: #27262e;
    font-family: "DM Sans";
    font-style: normal;

    /* margin-left: 24px;
    margin-right: 24px; */
    padding: 24px;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .top-creator-left {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 31px;
    font-feature-settings: "salt" on;

    /* Text/color1 */

    color: #27262e;
  }
  .top-creator-right {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    /* identical to box height */

    text-align: right;
    font-feature-settings: "salt" on;

    /* Text/color2 */

    color: #747475;
  }

  .content {
    /* display: flex;
  justify-content: space-between; */
  }
  .body-creator{
    height: 100%;
  }
`;

const PrimaryLayout = ({ children }) => {
  return (
    <LayoutStyled>
      <SideBarStyled>
        <SideBar></SideBar>
      </SideBarStyled>
      <div className="right">
        <Header />
        {/* <ContentStyled>{children}</ContentStyled> */}
        <ContentStyled>
          <div className="top-content">
            <div className="discover">
              <div className="content">
                Discover, Create and Sell Your Own NFT.
              </div>
              <div className="btn">
                <StyledButtonDiscover
                  bgColor="white"
                  text="Discover"
                  color=" #5429FF"
                />
                <StyledButtonDiscover
                  bgColor="transparent"
                  text="Create"
                  textColor="white"
                  borderColor="white"
                />
              </div>
            </div>

            <div className="card">
              <StyledCard>
                <div className="grid-container">
                  <Card
                    title="Revenue"
                    amount="5.00"
                    percent="12.1"
                    className="grid-item"
                  />
                  <Card
                    title="Spending"
                    amount="2.00"
                    percent="8.1"
                    className="grid-item"
                  />
                  <Card
                    title="ROI"
                    // amount="2.00"
                    percent="-5.1"
                    className="grid-item"
                    content="+14.02"
                  />
                  <Card
                    title="Estimated"
                    amount="7.00"
                    percent="3.2"
                    className="grid-item"
                  />
                </div>
              </StyledCard>
            </div>
          </div>
          <StyledTrending>
            <div className="content">
              <div className="trending">
                <div className="trending-auctions">Trending Auctions</div>
                <div className="nav">
                  <div className="nav-item">Art</div>
                  <div className="nav-item">Music</div>
                  <div className="nav-item">Collectibles</div>
                  <div className="nav-item">Utility</div>
                </div>
                <div></div>
              </div>
              <div className="top-creator">
                <div className="header">
                  <div className="top-creator-left">Top Creator</div>
                  <div className="top-creator-right">See All</div>
                </div>
                <div className="body-creator">
                  <Follow
                    number="1"
                    imgUser={user}
                    nameUser="Michael Jordan"
                    email="@jordan_"
                    sttFollow="Follow"
                  />
                  <Follow
                    number="2"
                    imgUser={user}
                    nameUser="John Tibao"
                    email="@johnti60"
                    sttFollow="Following"
                  />
                  <Follow
                    number="3"
                    imgUser={user}
                    nameUser="Teressa"
                    email="@teressa"
                    sttFollow="Following"
                  />
                  <Follow
                    number="4"
                    imgUser={user}
                    nameUser="Michael Jordan"
                    email="@jordan_"
                    sttFollow="Follow"
                  />
                  <Follow
                    number="5"
                    imgUser={user}
                    nameUser="John Tibao"
                    email="@johnti60"
                    sttFollow="Following"
                  />
                  <Follow
                    number="6"
                    imgUser={user}
                    nameUser="Teressa"
                    email="@teressa"
                    sttFollow="Following"
                  />
                </div>
              </div>
            </div>
          </StyledTrending>
          <div className="product">
            <div class="grid-container-product">
              <Product
                imgProduct={ape}
                timeLeft="8 : 21 : 23"
                nameProduct="Smilling Ape"
                likes="21.5K"
                imgUser={user1}
                nameUser="@m_alisson"
                textBid="Current Bid"
                price="6.12"
              />
              <Product
                imgProduct={ape}
                timeLeft="8 : 21 : 23"
                nameProduct="Smilling Ape"
                likes="21.5K"
                imgUser={user1}
                nameUser="@m_alisson"
                textBid="Current Bid"
                price="6.12"
              />
              <Product
                imgProduct={ape}
                timeLeft="8 : 21 : 23"
                nameProduct="Smilling Ape"
                likes="21.5K"
                imgUser={user1}
                nameUser="@m_alisson"
                textBid="Current Bid"
                price="6.12"
              />
              <Product
                imgProduct={ape}
                timeLeft="8 : 21 : 23"
                nameProduct="Smilling Ape"
                likes="21.5K"
                imgUser={user1}
                nameUser="@m_alisson"
                textBid="Current Bid"
                price="6.12"
              />
            </div>
          </div>
        </ContentStyled>
      </div>
    </LayoutStyled>
  );
};

export default PrimaryLayout;
