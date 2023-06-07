import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledAdminPage = styled.div`
  .left {
    width: 10%;
    float: left;
    background: #e5e5e5;
    height: 900px;
    padding: 60px;
  }
  .logo {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 34px;
    line-height: 40px;

    color: #1e2832;
  }
  .menu {
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding-top: 100px;
  }
  a {
    text-decoration: none;
  }
  .right {
    width: 90%;
    float: right;
    height: 100%;
    background-color: blue;
  }
`;
export const AdminPage = () => {
  return (
    <StyledAdminPage>
      <div className="left">
        <div className="logo">Lisa Admin</div>
        <div className="menu">
          <NavLink>Dashboard</NavLink>
          <NavLink>Products</NavLink>
          <NavLink>Customers</NavLink>
          <NavLink>Orders</NavLink>
          <NavLink>Shipments</NavLink>
          <NavLink>Transactions</NavLink>
          <NavLink>Settings</NavLink>
          <NavLink>Logout</NavLink>
        </div>
      </div>
      <div className="right"></div>
    </StyledAdminPage>
  );
};
