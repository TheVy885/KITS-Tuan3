import { NavLink } from "react-router-dom";
import styled from "styled-components";
import icon_dashboard from "../../assets/icon-dashboard.svg";
import icon_product from "../../assets/icon-product.svg";
import icon_customer from "../../assets/icon-users.svg";
import icon_orders from "../../assets/icon-cart.svg";
import icon_shipping from "../../assets/icon-shipping.svg";
import icon_transaction from "../../assets/icon-transaction.svg";
import icon_settings from "../../assets/icon-settings.svg";
import icon_logout from "../../assets/icon-logout.svg";
import icon_search from "../../assets/icon-search.svg";
import icon_more from "../../assets/icon-3dot.svg";
import icon_noti from "../../assets/icon-noti.svg";
import icon_user from "../../assets/icon-user.svg";
import { ChartRevenue } from "../../component/ChartRevenue/index";
import { GaugeChart } from "../../component/Gauge";
import icon_edit from "../../assets/icon-edit.svg";
import icon_down from "../../assets/icon-down.svg";

import { ReactComponent as icon_down1 } from "../../assets/icon-down.svg";
const StyledAdminPage = styled.div`
  .left {
    width: 10%;
    float: left;

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
  .menu div {
    display: flex;
    gap: 20px;
    align-items: center;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    color: #ff6f61;
  }
  .right {
    width: 78.4%;

    float: right;
    /* height: 100%; */
    /* background-color: blue; */
    padding: 50px;
    background: #e5e5e5;
    height: 1000px;
  }
  .header {
    display: flex;
    justify-content: space-between;
  }
  .overview {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;
    color: #535353;
  }
  .search-bar input {
    width: 502px;
    height: 55px;
    background: #ffffff;
    border-radius: 10px;
    border: none;
    padding-left: 50px;
    position: relative;
  }
  .search-bar {
    align-items: center;
  }
  .search img {
    position: absolute;
    top: 68px;
    left: 846px;
  }
  .user-noti {
    display: flex;
    gap: 40px;
    align-items: center;
  }
  .chart {
    padding-top: 30px;
  }
  .chart-top {
    display: flex;
    gap: 20px;
  }
  .chart-top-left {
    float: left;
    width: 60%;
    padding: 40px;
    height: 500px;
    background-color: white;
    border-radius: 20px;
  }
  .chart-top-right {
    float: right;
    width: 40%;
    background: white;
    padding: 40px;
    height: 500px;
    border-radius: 20px;
  }
  .header-chart-top-left {
    display: flex;
    justify-content: space-between;
  }
  .header-chart-top-right {
    display: flex;
    justify-content: space-between;
  }
  .right-header-chart-top-left {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    width: 90px;
    height: 30px;
    background: #fff8e5;
    background: #fff8e5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
  }
  .right-header-chart-top-left img {
    width: 10px;
    height: 10px;
  }
  .this-year {
    align-items: center;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;

    color: #6c6c6c;
    /* justify-content: center; */
  }

  .total-revenue {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #a7a7a7;
  }
  .customer {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 35px;

    color: #535353;
  }
  .info {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;

    color: #a7a7a7;

    text-align: left;
  }
  .money {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;

    color: #000000;
    padding-bottom: 20px;
  }
  .gauge-chart {
    /* width: 300px; */
    display: flex;
    justify-content: space-between;
  }
`;
export const AdminPage = () => {
  return (
    <StyledAdminPage>
      <div className="left">
        <div className="logo">Lisa Admin</div>
        <div className="menu">
          <div>
            <img src={icon_dashboard} alt="" />
            <NavLink>Dashboard</NavLink>
          </div>
          <div>
            <img src={icon_product} alt="" />
            <NavLink>Products</NavLink>
          </div>
          <div>
            <img src={icon_customer} alt="" /> <NavLink>Customers</NavLink>
          </div>
          <div>
            <img src={icon_orders} alt="" /> <NavLink>Orders</NavLink>
          </div>
          <div>
            <img src={icon_shipping} alt="" /> <NavLink>Shipments</NavLink>
          </div>
          <div>
            <img src={icon_transaction} alt="" />
            <NavLink>Transactions</NavLink>
          </div>
          <div>
            <img src={icon_settings} alt="" /> <NavLink>Settings</NavLink>
          </div>
          <div>
            <img src={icon_logout} alt="" />
            <NavLink>Logout</NavLink>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="header">
          <div className="overview">Overview</div>
          <div className="search">
            <div className="search-bar">
              <input type="text" placeholder="Search......" />
            </div>
            <img src={icon_search} alt="" />
          </div>
          <div className="user-noti">
            <img
              src={icon_more}
              alt=""
              style={{ width: "4px", height: "18px" }}
            />
            <img
              src={icon_noti}
              alt=""
              style={{ width: "20px", height: "16px" }}
            />
            <img
              src={icon_user}
              alt=""
              style={{ width: "65px", height: "65px" }}
            />
          </div>
        </div>
        <div className="chart">
          <div className="chart-top">
            <div className="chart-top-left">
              <div className="header-chart-top-left">
                <div className="left-header-chart-top-left">
                  <div className="total-revenue">Total Revenue</div>
                  <div className="money">$980,273.00</div>
                </div>
                <div className="right-header-chart-top-left">
                  <div className="this-year">THIS YEAR</div>
                  <img src={icon_down} alt="" />
                </div>
              </div>
              <ChartRevenue></ChartRevenue>
            </div>
            <div className="chart-top-right">
              <div className="header-chart-top-right">
                <div>
                  <div className="customer">Customers</div>
                  <div className="info">Information About your Customers</div>
                </div>
                <img src={icon_edit} alt="" />
              </div>
              <div className="gauge-chart">
                <div>
                  <GaugeChart></GaugeChart>
                </div>
                <div>
                  <GaugeChart></GaugeChart>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledAdminPage>
  );
};
