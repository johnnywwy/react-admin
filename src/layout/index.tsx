import React from "react";
import { Layout } from "antd";
import stytles from "./index.module.less";
import NavHeader from "./header";

import { useStore } from "@/store";
import SideMenu from "./menu";
import NavBreadcrumb from "./breadcrumb";
import NavContent from "./content";
const { Sider } = Layout;

const App: React.FC = () => {
  const { collapsed } = useStore();
  return (
    <Layout className={stytles.layout}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className={stytles.wrapper}
      >
        <SideMenu />
      </Sider>
      <Layout>
        <NavHeader />
        <NavBreadcrumb />
        <NavContent />
      </Layout>
    </Layout>
  );
};

export default App;
