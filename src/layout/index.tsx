import React from "react";
import { Layout } from "antd";
import stytles from "./index.module.less";
import NavHeader from "./header";

import SideMenu from "./menu";
import NavBreadcrumb from "./breadcrumb";
import NavContent from "./content";

const App: React.FC = () => {
  return (
    <Layout className={stytles.layout}>
      <SideMenu />
      <Layout>
        <NavHeader />
        <NavBreadcrumb />
        <NavContent />
      </Layout>
    </Layout>
  );
};

export default App;
