import { Button, Layout } from "antd";
import React, { useState } from "react";
const { Header, Sider, Content } = Layout;
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../../state/hook";
import { toggle } from "../../state/slice-creater/sideMenuToggleSlice";

const DHeader = () => {
  const dispatch = useAppDispatch();
  const collapsed = useAppSelector((state) => state.sideToggle.collapse);

  return (
    <Header style={{ padding: 0, background: "#fff" }}>
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => dispatch(toggle())}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />
    </Header>
  );
};

export default DHeader;
