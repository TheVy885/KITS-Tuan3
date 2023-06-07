import styled from "styled-components";

import { PrimaryLayout } from "../Layout";
import icon_search from "../../assets/icon_search.svg";
import icon from "../../assets/icon_search.svg";
import icon_user from "../../assets/icon_user.svg";
import icon_bag from "../../assets/icon_bag.svg";
import { ButtonDefault } from "../Button";
const StyledHeader = styled.div`
  /* height: 50px; */
  /* width: 100%; */
  background-color: #f0f0f0;

  .container {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    align-items: center;
    padding-left: 300px;
    padding-right: 300px;
  }
  .store-name {
    justify-content: center;
    font-family: "AmstelvarAlpha";
    font-style: normal;
    font-weight: 400;
    font-size: 42px;
    line-height: 50px;

    color: #000000;
  }
  .nav {
    float: right;
    display: flex;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;

    text-transform: capitalize;

    color: #1e2832;
  }
  img {
    width: 20px;
    height: 20px;
  }
  .nav-item {
    display: flex;
    gap: 10px;
    color: #000000;
    background-color: transparent;
  }
  button{
    color: #000000;
    background-color: transparent;
  }
  .nav-item button{
    color: #000000;
  }
  .nav-item button{
    color: #000000;
  }
  .nav-item button:hover{
    color:#ff6f61;
    background-color: transparent;
  }
`;
export const Header = () => {
  return (
    <StyledHeader>
      <div className="container">
        <img src={icon_search} alt="" />
        <div className="store-name">Lisa Store</div>
        <div className="nav">
          <div className="nav-item" style={{ paddingRight: "25px" }}>
            {/* <img src={icon_user} alt="" />
            <div>Account</div> */}

            <ButtonDefault
              url={icon_user}
              name_button="Account"
              textColor="black"
              
            />
          </div>
          <div className="nav-item">
            {/* <img src={icon_bag} alt="" />
            <div>Shopping</div> */}
            <ButtonDefault
              url={icon_bag}
              name_button="Shopping"
              textColor="black"
            
            />
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};
