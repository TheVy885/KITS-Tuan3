import styled from "styled-components";
// import { Header } from "../Header";
import { Layout, Menu, theme } from "antd";
const { Header, Content, Footer, Sider } = Layout;
const StyledPrimaryLayout = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  padding-top: 30px;
  padding-left: 30px;
  padding-right: 30px;
  background-color: #f0f0f0;
  width: 100%;
  /* height: 100%; */
`;

export const PrimaryLayout = () => {
  return <StyledPrimaryLayout>
    <Content>

    </Content>
    {/* <Header></Header> */}
  </StyledPrimaryLayout>;
};
