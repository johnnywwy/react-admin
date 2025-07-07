import React, { useState } from "react";
import {
  HomeOutlined,
  LaptopOutlined,
  MailOutlined,
  SolutionOutlined,
  UsergroupDeleteOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu, type MenuProps } from "antd";
import { useStore } from "@/store";
import { Layout } from "antd";

const { Sider } = Layout;
import stytles from "./index.module.less";
import { useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  { key: "/dashboard", icon: <HomeOutlined />, label: "Dashboard" },
  {
    key: "/user",
    label: "用户模块",
    icon: <UsergroupDeleteOutlined />,
    children: [
      { key: "/userList", label: "用户列表", icon: <UserOutlined /> },
      { key: "/menuList", label: "菜单管理", icon: <MailOutlined /> },
      { key: "/roleList", label: "角色管理", icon: <SolutionOutlined /> },
      { key: "/deptList", label: "部门管理", icon: <LaptopOutlined /> },
    ],
  },
];

export default function SideMenu() {
  const navigate = useNavigate();
  const { collapsed, currentMenu, setCurrentMenu } = useStore();
  const menuClick = ({ key }: { key: string }) => {
    navigate(key);
    setCurrentMenu(key);
  };
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      className={stytles.wrapper}
    >
      <div className={stytles.logo} />
      <Menu
        defaultSelectedKeys={[currentMenu]}
        defaultOpenKeys={["/user"]}
        theme="dark"
        mode="inline"
        inlineCollapsed={collapsed}
        items={items}
        onClick={menuClick}
      />
    </Sider>
  );
}
