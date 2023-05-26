import styled from "styled-components";
import logo from "assets/logo.svg";
import marketIcon from "assets/market-icon.svg";
import dashboard from "assets/dashboard.svg";
import bidIcon from "assets/bid-Icon.svg";
import portfolio from "assets/portfolioIcon.svg";
import wallet from "assets/walletIcon.svg";
import favourites from "assets/favouritesIcon.svg";
import history from "assets/clockIcon.svg";
import settings from "assets/settingsIcon.svg";
import lightmode from "assets/lightmodeIcon.svg";
import { Toggle_NightMode } from "component/toggle-switch";
import { NavLink } from "react-router-dom";
import moonIcon from "assets/moonIcon.svg";
import sunIcon from "assets/sunIcon.svg";
import Card from "component/card";
import ethBackground from "assets/eht2.svg";
import ethIcon from "assets/eth1.svg";
import plusIcon from "assets/plus-icon.svg";
import nextIcon from "assets/Icon-next.svg";
const StyledSideBar = styled.div`
  background-color: white;
  height: 100vh;
  padding: 32px;
  /* position: fixed; */
  .logo {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 54px;
  }
  .logo-text {
    font-weight: 700;
    font-size: 28px;
    line-height: 36px;
    color: #27262e;
  }
  .logo-desc {
    font-size: 10px;
    line-height: 13px;
    color: #7a797d;
  }
  .profile {
    margin-top: 40px;
    margin-bottom: 26px;
  }
  .other {
    margin-top: 42px;
    margin-bottom: 30px;
  }
  .dashboard {
    color: #5429ff;
  }

  //css cho light mode
  .toggle-switch {
    position: relative;
    width: 200px;
  }

  label {
    position: absolute;
    width: 56px;
    height: 30px;
    /* background-color: black; */
    border-radius: 50px;
    cursor: pointer;
  }

  input {
    position: absolute;
    display: none;
  }

  .slider {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: 0.3s;
  }

  input:checked ~ .slider {
    background-color: #f0f0f0;
  }

  .slider::before {
    content: "";
    position: absolute;
    top: 13px;
    left: 16px;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    box-shadow: inset 28px -4px 0px 0px #f0f0f0;
    background-color: var(--dark);
    transition: 0.3s;
  }

  input:checked ~ .slider::before {
    transform: translateX(95px);
    /* background-color: black; */
    box-shadow: none;
  }

  .card {
    width: 228px;
    height: 220px;
    background: linear-gradient(228.89deg, #5429ff 1.12%, #bbaaff 100%);
    border-radius: 16px;
    text-align: center;
    margin-top: 30px;
    position: relative;
  }
  .name {
    padding-top: 32px;

    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: #e0dee6;
  }

  .number {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    padding-top: 30px;

    color: #ffffff;
  }
  .eth-background img {
    opacity: 0.7;
    /* z-index: -1; */
    position: absolute;
    top: 40px;
    left: 12px;
  }
  .ethIcon {
    display: flex;
    justify-content: center;
    gap: 8px;
    color: white;
  }
  .btn-top-up {
    /* display: flex; */
    /* justify-content: space-between; */
  }
  .btn-top-up button {
    width: 196px;
    height: 50px;
    background: #ffffff;
    border-radius: 12px;
    margin-top: 20px;
    /* display: flex; */
    /* justify-content: space-between; */
  }
  .btn-top-up button img {
    /* background: #5429ff; */
    border-radius: 18px;
  }
  .btn-content {
    display: flex;
    justify-content: space-between;
  }
`;
const StyledNavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  color: #7a797d;
  margin-bottom: 25px;
  a {
    text-decoration: unset;
    color: #7a797d;
  }
  .active {
    /* color: #f30ee4; */
  }
  .item-text {
    margin-left: 12px;
  }
`;
const NavItem = ({ text, path, img }) => {
  return (
    <StyledNavItem>
      <img src={img} alt="nav-icon"></img>
      {/* <NavLink to={path}>{text}</NavLink> */}


      <NavLink to="/">
          
          <span className="item-text">{text}</span>


        </NavLink>

    </StyledNavItem>
  );
};

const StyledToggle = styled.div`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    width: 100%;
  }

  .container {
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
  }
  #checkbox {
    display: none;
  }
  .toggle {
    height: 30px;
    width: 56px;
    border-radius: 9999px;

    background-size: cover;
    position: relative;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    /* box-shadow: 2px 2px 10px #0000003d; */
    background-color: #f0f0f0;
  }

  #checkbox:checked + .toggle {
    background-size: cover;
    /* background-image: url(${moonIcon.svg}); */
  }

  .toggle::before {
    content: "";
    height: 30px;
    width: 30px;
    position: absolute;
    left: 0;
    border-radius: 50%;
    background-color: #f0f0f0;
    transition: all 0.5s ease-in-out;
    background-image: url(${moonIcon});

    background-size: cover;
  }

  #checkbox:checked + .toggle::before {
    position: absolute;
    left: calc(50%);
    background-image: url(${sunIcon});
  }
`;

const StyledFlex = styled.div`
  display: flex;
  /* justify-content: space-between; */
  gap: 75px;
`;

export const SideBar = () => {
  return (
    <StyledSideBar>
      <div className="logo">
        <img src={logo} alt="logo"></img>
        <div>
          <div className="logo-text">MyNFT</div>
          <div className="logo-desc">NFT Marketplace</div>
        </div>
      </div>
      <div className="nav">
        <NavItem
          text="Dashboard"
          path=""
          img={dashboard}
          className="dashboard"
        ></NavItem>
        {/* <NavItem text="Market" path="" img={marketIcon}></NavItem> */}
        <NavLink to="/login">
          <img src={marketIcon} alt="" />
          <span className="item-text"  img={marketIcon}>Market</span>
        </NavLink>

        <NavLink to="/">
          <img src={marketIcon} alt="" />
          <span className="item-text"  img={marketIcon}>Market</span>
        </NavLink>
        <NavItem text="Active Bids" path="" img={bidIcon}></NavItem>
      </div>
      <div className="profile">Profile</div>
      <div className="nav">
        <NavItem
          text="My Portfolio"
          path=""
          img={portfolio}
          className="dashboard"
        ></NavItem>
        <NavItem text="Wallet" path="yurfyf" img={wallet}></NavItem>
        <NavItem text="Favourites" path="kuigyu" img={favourites}></NavItem>
        <NavItem text="History" path="kuigkuggj" img={history}></NavItem>
        <NavItem text="Settings" path="gfgj" img={settings}></NavItem>
      </div>
      <div className="other">Other</div>
      <StyledFlex>
        <div>
          <NavItem text="Light Mode" path="" img={lightmode}></NavItem>
        </div>
        <div>
          <StyledToggle>
            <div className="container">
              <div className="daynight">
                <label for="checkbox">
                  <input type="checkbox" name="" id="checkbox" />
                  <div className="toggle">
                    <div className="star1"></div>
                    <div className="star2"></div>
                  </div>
                </label>
              </div>
            </div>
          </StyledToggle>
        </div>
      </StyledFlex>

      <div className="card">
        <div className="eth-background">
          <img src={ethBackground} alt="" />
        </div>
        <div className="name">Your Balance</div>
        <div className="number">1,034.02</div>
        <div className="ethIcon">
          <img src={ethIcon} alt="" /> <span>ETH</span>
        </div>
        <div className="btn-top-up">
          <button>
            <div className="btn-content">
              <img
                src={plusIcon}
                style={{ background: "#5429ff", width: "20px", height: "20px" }}
                alt=""
              />
              <span>Top Up Balance</span>
              <img src={nextIcon} alt="" />
            </div>
          </button>
        </div>
      </div>
    </StyledSideBar>
  );
};
