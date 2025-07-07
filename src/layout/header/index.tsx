import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, theme } from "antd";
import { useStore } from "@/store";

import stytles from "./index.module.less";

const { Header, Sider, Content } = Layout;

export default function NavHeader() {
  const { collapsed, updateCollapsed } = useStore();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const toggleCollapsed = () => updateCollapsed();
  return (
    <>
      <Header style={{ padding: 0, background: colorBgContainer }}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={toggleCollapsed}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />
      </Header>
    </>
  );
}
