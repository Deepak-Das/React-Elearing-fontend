import React, { useState } from "react";
import { Layout, Menu, Button, theme } from "antd";
import { useAppSelector } from "../../state/hook";
import { GiTeacher } from "react-icons/gi";
import { SiCoursera } from "react-icons/si";
import dash1 from "../../assets/dash1.png";
import dash2 from "../../assets/dash2.png";
import { useNavigate } from "react-router";

const { Header, Sider, Content } = Layout;

const Sidebar: React.FC = () => {
  const collapsed = useAppSelector((state) => state.sideToggle.collapse);
  const navigate = useNavigate();

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="demo-logo-vertical" />
      <div className="my-2 p-4 ">
        <img src={dash1} alt="" className="w-full mb-4 " />
        <hr />
      </div>

      <Menu
        theme="dark"
        mode="inline"
        onClick={(info) => {
          navigate(info.key);
        }}
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "Teachers",
            icon: <GiTeacher />,
            label: "Tacher",
            children: [
              {
                key: "add-teacher",
                label: "Add Teacher",
              },
              {
                key: "view-teachers",
                label: "View Teacher List",
              },
              {
                key: "teacher-details",
                label: "Teacher Details",
              },
            ],
          },
          {
            key: "Courser",
            icon: <SiCoursera />,
            label: "Cousers",
            children: [
              {
                key: "add-courser",
                label: "Add Courser",
              },
              {
                key: "view-courser",
                label: "View Courser List",
              },
              {
                key: "add-courser-video",
                label: "Add Coruser Video",
              },
            ],
          },
        ]}
      />
    </Sider>
  );
};

export default Sidebar;
