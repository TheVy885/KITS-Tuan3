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
  Table,
  Tag,
  Form,
  Input,
  InputNumber,
  Modal,
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
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const StyledAdminPage = styled.div`
  margin: 0;
  padding: 0;
  width: 80%;
  float: right;
  justify-content: center;
`;

const { Header, Content, Footer, Sider } = Layout;
const ListMenu = ["Dashboard", "User", "Customer", "Orders", "Coupon"];
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
  label: `${ListMenu.splice(0, 1)} `,
}));

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

export const UserPage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const columns = [
    {
      title: "Key",
      dataIndex: "key",
      key: "key",
      //   render: (text) => <a>{text}</a>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    // {
    //   title: "Tags",
    //   key: "tags",
    //   dataIndex: "tags",
    //   render: (_, { tags }) => (
    //     <>
    //       {/* {tags.map((tag) => {
    //         let color = tag.length > 5 ? "geekblue" : "green";
    //         if (tag === "loser") {
    //           color = "volcano";
    //         }
    //         return (
    //           <Tag color={color} key={tag}>
    //             {tag.toUpperCase()}
    //             <Space></Space>
    //           </Tag>
    //         );
    //       })} */}
    //     </>
    //   ),
    // },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [dataTable, setDataTable] = useState(data);
  const onFinish = (user) => {
    console.log("Success:", data);

    const newData = dataTable.concat([
      {
        key: Math.floor(Math.random() * 100 + 1),
        name: user.name,
        age: user.age,
        address: user.address,
        // tag: user.tag,
      },
    ]);
    setDataTable(newData);
    console.log("newData", newData);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Layout hasSider>
      <Helmet>
        <title>User Page</title>
        <meta name="description" content="" />
      </Helmet>
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

        <Modal
          title="User Infomation"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer=""
        >
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Age"
              name="age"
              rules={[
                {
                  required: true,
                  message: "Please input your age!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Address"
              name="address"
              rules={[
                {
                  required: true,
                  message: "Please input your address!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            {/* <Form.Item
              label="Tag"
              name="tag"
              rules={[
                {
                  required: true,
                  message: "Please input your tag!",
                },
              ]}
            >
              <Input />
            </Form.Item> */}

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
        <StyledContent>
          <Content>
            <Button type="primary" onClick={showModal}>
              Add User
            </Button>
            <Table columns={columns} dataSource={dataTable} />;
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
