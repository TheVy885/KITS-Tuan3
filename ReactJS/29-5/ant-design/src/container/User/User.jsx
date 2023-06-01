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
import { useDispatch, useSelector } from "react-redux";
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
import { users } from "store/Models/user";
import * as Excel from "exceljs";
import { saveAs } from 'file-saver';
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

//export excel
const workSheetName = 'Worksheet-1';
const workBookName = 'MyWorkBook';
const myInputId = 'myInput';
const columnsExcel = [
  { header: 'Key', key: 'key' },
  { header: 'ID', key: 'id' },
  { header: 'Name', key: 'name' },
  { header: 'Age', key: 'age' },
  { header: 'Address', key: 'address' }, 
];


export const UserPage = () => {
  const usersStore = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.users.fetchUsers();
  }, []);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  //giao diện table
  const columns = [
    {
      title: "Key",
      dataIndex: "key",
      key: "key",
      //   render: (text) => <a>{text}</a>,
    },
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
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
      // render: (address) => (
      //   <span>
      //     {address.city} {address.street}
      //   </span>
      // ),
    },
    {
      title: "Address",

      dataIndex: "address",
      key: "address",

    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>

          
          <button onClick={(e) => {onDelete(record,e);console.log(record)}}>Delete</button>
          <button type="primary" onClick={(e) => {showModalEdit(onFill(record));var data= record;console.log(record);}}>
              Edit
            </button>
        </Space>
      ),
    },
  ];
  const [form] = Form.useForm();
  function onFill(record){
    form.setFieldsValue({
      name:record.name,
      age:record.age,
      address:record.address,
      username: record.username,
      email:record.email
    })
 
  }
  


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleEditOk = () => {
    setIsModalEditOpen(false);
  };
  const handleEditCancel = () => {
    setIsModalEditOpen(false);
  };
  // const [dataTable, setDataTable] = useState(data);
  const onFinish = (user) => {
    // console.log("Success:", data);

    // const newData = dataTable.concat([
    //   {
    //     key: Math.floor(Math.random() * 100 + 1),
    //     name: user.name,
    //     age: user.age,
    //     address: user.address,
    //     // tag: user.tag,
    //   },
    // ]);
    // setDataTable(newData);
    // console.log("newData", newData);

    const newData = [
      ...usersStore.listUser,
      {
        key: Math.floor(Math.random() * 10000) + 1,
        id: Math.floor(Math.random() * 10000) + 1,
        name: user.name,
        username: user.username,
        address: user.address,
        age: user.age,
      },
    ];
    console.log(newData);
    dispatch.users.setListUser(newData);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // const newData=usersStore.listUser.filter(item=>item!==key)
  function onDelete( record,e) {
    e.preventDefault();
    console.log(record);
    const newData = usersStore.listUser.filter((item) => item.id !== record.id);

    dispatch.users.setListUser(newData);
  }
  function onEdit( record,e) {
    e.preventDefault();
    console.log(record);

    // const newData = usersStore.listUser.filter((item) => item.id !== record.id);

    // dispatch.users.setListUser(newData);
  }


  const showModalEdit = (e,record) => {
    setIsModalEditOpen(true);
    
    
  };
  const onFinishEdit = (user) => {
    // console.log("Success:", data);

    // const newData = dataTable.concat([
    //   {
    //     key: Math.floor(Math.random() * 100 + 1),
    //     name: user.name,
    //     age: user.age,
    //     address: user.address,
    //     // tag: user.tag,
    //   },
    // ]);
    // setDataTable(newData);
    // console.log("newData", newData);

    const newData = [
      ...usersStore.listUser,
      {
        key: Math.floor(Math.random() * 10000) + 1,
        id: Math.floor(Math.random() * 10000) + 1,
        name: user.name,
        username: user.username,
        address: user.address,
      },
    ];
    console.log(newData);
    dispatch.users.setListUser(newData);
  };


  const workbook = new Excel.Workbook();

  const saveExcel = async () => {
    try {
      const myInput = document.getElementById(myInputId);
      const fileName = workBookName;

      // creating one worksheet in workbook
      const worksheet = workbook.addWorksheet(workSheetName);

      // add worksheet columns
      // each columns contains header and its mapping key from data
      worksheet.columns = columnsExcel;

      // updated the font for first row.
      worksheet.getRow(1).font = { bold: true };

      // loop through all of the columns and set the alignment with width.
      worksheet.columns.forEach(column => {
        column.width = column.header.length + 100;
        column.alignment = { horizontal: 'center' };
      });

      // loop through data and add each one to worksheet
      usersStore.listUser.forEach(singleData => {
        worksheet.addRow(singleData);
      });

      // loop through all of the rows and set the outline style.
      worksheet.eachRow({ includeEmpty: false }, row => {
        // store each cell to currentCell
        const currentCell = row._cells;

        // loop through currentCell to apply border only for the non-empty cell of excel
        currentCell.forEach(singleCell => {
          // store the cell address i.e. A1, A2, A3, B1, B2, B3, ...
          const cellAddress = singleCell._address;

          // apply border
          worksheet.getCell(cellAddress).border = {
            top: { style: 'thin' },
            left: { style: 'thin' },
            bottom: { style: 'thin' },
            right: { style: 'thin' }
          };
        });
      });

      // write the content using writeBuffer
      const buf = await workbook.xlsx.writeBuffer();

      // download the processed file
      saveAs(new Blob([buf]), `${fileName}.xlsx`);
    } catch (error) {
      console.error('<<<ERRROR>>>', error);
      console.error('Something Went Wrong', error.message);
    } finally {
      // removing worksheet's instance to create new one
      workbook.removeWorksheet(workSheetName);
    }
  };
  // const [fields, setFields] = useState([
  //   {
  //     name: ['name'],
  //     value: 'Ant Design',
  //   },
  // ]);
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



        {/* edit user */}

        <Modal
          title="Edit User Infomation"
          open={isModalEditOpen}
          onOk={handleEditOk}
          onCancel={handleEditCancel}
          footer=""
        >
          <Form
          form={form}
            name="editUser"
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
            
            onFinish={onFinishEdit}
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
              // render ={(record)=>record.name
              
              // }
              
              
              
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
              label="Username"
              name="username"
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
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            
            {/* <CustomizedForm
        fields={fields}
        // onChange={(newFields) => {
        //   setFields(newFields);
        // }}
      /> */}

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
            &emsp;
            <Button  type="primary"  onClick={saveExcel}>Export</Button>
            {/* <Table columns={columns} dataSource={dataTable} />; */}
            <Table columns={columns} dataSource={usersStore.listUser} />;
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
