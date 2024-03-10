import { Button, Layout } from "antd";
import React, { useState } from "react";
const { Header, Sider, Content } = Layout;
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../../state/hook";
import { sideToggle } from "../../state/slice-creater/sideMenuToggleSlice";
import { Logout } from "@mui/icons-material";

const DHeader = () => {
  const dispatch = useAppDispatch();
  const collapsed = useAppSelector((state) => state.sideToggle.collapse);
  const title = useAppSelector((state) => state.headingText.title);

  return (
    <Header
      style={{ padding: 0, background: "#fff", margin: 0 }}
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
      <div className="flex justify-between w-full pr-2">
        <h1 className="text-2xl font-medium  text-slate-700">{title}</h1>
        <Button type="primary" className="flex gap-2 items-center">
          {" "}
          <Logout /> Log Out
        </Button>
      </div>
    </Header>
  );
};

export default DHeader;
