import { Breadcrumb } from "antd";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import { theme } from "antd";

export default function NavContent() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Content
      style={{
        margin: "0 16px 16px 16px",
        minHeight: 280,
        borderRadius: borderRadiusLG,
      }}
    >
      <Outlet />
    </Content>
  );
}
