import { Button, Layout } from "antd";
import React, { useState } from "react";
const { Header, Sider, Content } = Layout;
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../../state/hook";
import { sideToggle } from "../../state/slice-creater/sideMenuToggleSlice";

const DHeader = () => {
  const dispatch = useAppDispatch();
  const collapsed = useAppSelector((state) => state.sideToggle.collapse);
  const title = useAppSelector((state) => state.headingText.title);

  return (
    <Header
      style={{ padding: 0, background: "#fff" }}
      className="flex items-center"
    >
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => dispatch(sideToggle())}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />
      <h1 className="text-2xl font-medium  text-slate-700">{title}</h1>
    </Header>
  );
};

export default DHeader;
