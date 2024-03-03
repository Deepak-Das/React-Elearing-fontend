import React, { useState } from "react";

import { Layout, theme } from "antd";
import Sidebar from "../componenet/common/Sidebar";
import DHeader from "../componenet/common/DHeader";
import { Outlet } from "react-router";

const { Content } = Layout;

const Dashboard: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="h-screen">
      <Sidebar />
      <Layout className="overflow-auto">
        <DHeader />
        <Outlet />
      </Layout>
    </Layout>
  );
};

export default Dashboard;
