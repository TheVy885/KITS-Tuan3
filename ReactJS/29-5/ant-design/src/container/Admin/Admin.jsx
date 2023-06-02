import {
  Button,
  Space,
  Col,
  Divider,
  Row,
  Statistic,
  Card,
  Layout,
  Menu,
  theme,
  Switch,
} from "antd";
import { Column } from "@ant-design/plots";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Pie, measureTextWidth } from "@ant-design/plots";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import React from "react";
import styled from "styled-components";
import { PieCustomer } from "component/Pie";
import { Helmet } from "react-helmet";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { UserPage } from "container/User";
import { NavLink } from "react-router-dom";
import { TokenPrice } from "component/TokenPrice";
import { MoneyAllocation } from "component/MoneyAllocation";
import { Profit } from "component/profit";

const StyledAdminPage = styled.div`
  margin: 0;
  padding: 0;
  width: 80%;
  float: right;
  justify-content: center;
`;

//
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Navigation One", "sub1", <MailOutlined />, [
    getItem("Admin", "admin"),
    getItem("User", "user"),
    getItem("Option 3", "3"),
    getItem("Option 4", "4"),
  ]),
  getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Submenu", "sub3", null, [
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
  ]),
  getItem("Navigation Three", "sub4", <SettingOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
];

//
const { Header, Content, Footer, Sider } = Layout;
// const ListMenu = ["Dashboard", "User", "Customer", "Orders", "Coupon"];
// const items = [
//   UserOutlined,
//   VideoCameraOutlined,
//   UploadOutlined,
//   BarChartOutlined,
//   CloudOutlined,
//   AppstoreOutlined,
//   TeamOutlined,
//   ShopOutlined,
// ].map((icon, index) => ({
//   key: String(index + 1),
//   icon: React.createElement(icon),
//   label: `${ListMenu.splice(0, 1)} `,
// }));

const StyledContent = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  /* padding: 50px; */
  .card {
    display: flex;
    flex-direction: column;
  }
  .card-content {
    display: flex;
  }
  .token-price {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 52px;
    /* identical to box height, or 162% */

    /* System/Monotone/M1 */

    color: #4a4a65;
  }
  .grid-container {
    display: grid;
    grid-template-columns: auto auto;
  }
`;
const style = {
  background: "#FFFFFF",
  padding: "8px 0",
};
const StyledPie = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  /* width: 500px; */
`;

export const AdminPage = () => {
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();

  const [theme, setTheme] = useState("dark");
  const [current, setCurrent] = useState("1");
  const changeTheme = (value) => {
    setTheme(value ? "dark" : "light");
  };
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    window.location.assign(e.key);
  };

  const data = [
    {
      type: "Tháng 1",
      sales: 38,
    },
    {
      type: "Tháng 2",
      sales: 52,
    },
    {
      type: "Tháng 3",
      sales: 61,
    },
    {
      type: "Tháng 4",
      sales: 145,
    },
    {
      type: "Tháng 5",
      sales: 48,
    },
    {
      type: "Tháng 6",
      sales: 37,
    },
    {
      type: "Tháng 7",
      sales: 78,
    },
    {
      type: "Tháng 8",
      sales: 66,
    },
    {
      type: "Tháng 9",
      sales: 45,
    },
    {
      type: "Tháng 10",
      sales: 86,
    },
    {
      type: "Tháng 11",
      sales: 85,
    },
    {
      type: "Tháng 12",
      sales: 58,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "sales",
    label: {
      position: "middle",
      // 'top', 'bottom', 'middle',
      style: {
        fill: "#FFFFFF",
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "abc",
      },
      sales: {
        alias: "Số lượng đơn hàng",
      },
    },
  };

  return (
    <Layout hasSider>
      <Helmet>
        <title>Admin Page</title>
        <meta name="description" content="" />
      </Helmet>

      <br />
      <br />
      <Menu
        theme={theme}
        onClick={onClick}
        style={{
          width: 256,
          height: 1000,
        }}
        defaultOpenKeys={["sub1"]}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />

      <StyledContent style={{ width: "100%" }}>
        <Content
          style={{ width: "100%" }}
          // style={{
          //   margin: "24px 16px 0",
          //   overflow: "initial",
          // }}
        >
          {/* <div
            style={{
              padding: 24,
              textAlign: "center",
              background: colorBgContainer,
            }}
          >
            <p>long content</p>
            {
              // indicates very long content
              Array.from(
                {
                  length: 100,
                },
                (_, index) => (
                  <React.Fragment key={index}>
                    {index % 20 === 0 && index ? "more" : "..."}
                    <br />
                  </React.Fragment>
                )
              )
            }
          </div> */}

          {/* <Divider orientation="left">Số lượng sản phẩm</Divider>
          <Row
            gutter={{
              xs: 8,
              sm: 16,
              md: 24,
              lg: 32,
            }}
          >
            <Col className="gutter-row" span={6}>
              <div className="card" style={style}>
                <Col>Tổng doanh thu</Col>
                <Col style={{ fontSize: "20px" }}>¥ 126,560</Col>
                <div className="card-content">
                  <Col span={12}>
                    <Card bordered={false}>
                      <Statistic style={{ fontSize: "12px" }}
                        title="Hàng Tuần"
                        value={12}
                        precision={2}
                        valueStyle={{
                          color: "#3f8600",
                          fontSize: "16px"
                        }}
                        prefix={<ArrowUpOutlined />}
                        suffix="%"
                      />
                    </Card>
                  </Col>
                  <Col span={12}>
                    <Card bordered={false}>
                      <Statistic style={{ fontSize: "12px" }}
                        title="Hàng năm"
                        value={11}
                        precision={2}
                        valueStyle={{
                          color: "#cf1322",
                          fontSize: "16px"
                        }}
                        prefix={<ArrowDownOutlined />}
                        suffix="%"
                      />
                    </Card>
                  </Col>
                </div>
                <Col>Daily sales were ¥12,423</Col>
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div style={style}>col-6</div>
            </Col>
          </Row> */}

          {/* <h1>Số lượng Khách Hàng</h1> */}
          {/* <PieCustomer /> */}
          {/* <h1>Số lượng Đơn Hàng</h1> */}
          {/* <Column {...config} /> */}

          <h1 className="token-price">Token Price</h1>
          <TokenPrice />

          <div class="grid-container">
            <div class="grid-item">
              <h1 className="token-price">Money Allocation</h1>
              <MoneyAllocation />
            </div>
            <div class="grid-item">
            <h1 className="token-price">Profit</h1>
            <Profit/>
            </div>
          </div>
        </Content>
      </StyledContent>
      <Footer
        style={{
          textAlign: "center",
        }}
      ></Footer>
    </Layout>
  );
};
