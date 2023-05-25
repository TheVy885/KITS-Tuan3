import Header from "component/Header";
import styled from "styled-components";
import { SideBar } from "component/sidebar";
import { Button } from "component";
import props from "prop-types";
import Card from "component/card";
const LayoutStyled = styled.div`
  /* background-color: white; */
  background-color: #caeae6;
  min-height: 100vh;
  .right {
    float: right;
    width: 80%;
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
  padding: 24px;
  background-color: white;
  border-radius: 20px;
  font-size: 12px;
  line-height: 16px;

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
                  <Card title="Revenue" amount="5.00" percent="12.1" />
                  <Card title="Revenue" amount="5.00" percent="12.1" />
                  <Card title="Revenue" amount="5.00" percent="12.1" />
                  <Card title="Revenue" amount="5.00" percent="12.1" />
                </div>
              </StyledCard>
            </div>
          </div>
        </ContentStyled>
      </div>
    </LayoutStyled>
  );
};

export default PrimaryLayout;
