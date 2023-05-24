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
import { NavLink } from "react-router-dom";
const StyledSideBar = styled.div`
  background-color: white;
  height: 100vh;
  padding: 32px;
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
  width: 100%;
  height: 100px;
  background-color: black;
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
  background-color: 
#F0F0F0;
}

.slider::before {
  content: "";
  position: absolute;
  top: 13px;
  left: 16px;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  box-shadow: inset 28px -4px 0px 0px
#F0F0F0;
  background-color: var(--dark);
  transition: 0.3s;
}

input:checked ~ .slider::before {
  transform: translateX(95px);
  background-color: black;
  box-shadow: none;
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
`;
const NavItem = ({ text, path, img }) => {
  return (
    <StyledNavItem>
      <img src={img} alt="nav-icon"></img>
      <NavLink to={path}>{text}</NavLink>
    </StyledNavItem>
  );
};
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
          path="/"
          img={dashboard}
          className="dashboard"
        ></NavItem>
        <NavItem text="Market" path="/" img={marketIcon}></NavItem>
        <NavItem text="Active Bids" path="/" img={bidIcon}></NavItem>
      </div>
      <div className="profile">Profile</div>
      <div className="nav">
        <NavItem
          text="My Portfolio"
          path="/"
          img={portfolio}
          className="dashboard"
        ></NavItem>
        <NavItem text="Wallet" path="/" img={wallet}></NavItem>
        <NavItem text="Favourites" path="/" img={favourites}></NavItem>
        <NavItem text="History" path="/" img={history}></NavItem>
        <NavItem text="Settings" path="/" img={settings}></NavItem>
      </div>
      <div className="other">Other</div>
      <NavItem text="Light Mode" path="/" img={lightmode}>
       
       
      </NavItem>
      <div className="toggle-switch">
          <label>
            <input type="checkbox" />
            <span class="slider"></span>
          </label>
        </div>
    </StyledSideBar>
  );
};
