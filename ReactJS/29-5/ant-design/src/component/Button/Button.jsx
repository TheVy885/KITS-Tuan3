import { Button, Space } from "antd";
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
import { Layout, Menu, theme } from "antd";
import React from "react";
import styled from "styled-components";
import { PieCustomer } from "component/Pie";
const { Header, Content, Footer, Sider } = Layout;
const ListMenu= ["Dashboard", "User", "Customer", "Orders", "Coupon"];
const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `${ListMenu.splice(0,1)} `,
}));

const StyledContent = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  /* padding: 50px; */
`;

const StyledPie = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  /* width: 500px; */
`;

export const AdminPage = () => {

  
  const {
    token: { colorBgContainer },
  } = theme.useToken();

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
    // <Space className="site-button-ghost-wrapper" wrap>
    //   <Button type="primary" ghost>
    //     Primary
    //   </Button>
    //   <Button ghost>Default</Button>
    //   <Button type="dashed" ghost>
    //     Dashed
    //   </Button>
    //   <Button type="primary" danger ghost>
    //     Danger
    //   </Button>
    // </Space>

    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
        />
      </Sider>
      <Layout
        className="site-layout"
        style={{
          marginLeft: 200,
        }}
      >
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <StyledContent>
          <Content
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
          <h1 >Số lượng Khách Hàng</h1>
          <PieCustomer/>
          <h1>Số lượng Đơn Hàng</h1>
            <Column {...config} />
          </Content>
        </StyledContent>
        <Footer
          style={{
            textAlign: "center",
          }}
        ></Footer>
      </Layout>
    </Layout>
  );
};

  
