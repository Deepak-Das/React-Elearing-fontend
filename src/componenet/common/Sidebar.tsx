import React, { useState } from "react";
import { Layout, Menu, Button, theme } from "antd";
import { useAppDispatch, useAppSelector } from "../../state/hook";
import { GiTeacher } from "react-icons/gi";
import { SiCoursera } from "react-icons/si";
import dash1 from "../../assets/dash1.png";
import dash2 from "../../assets/dash2.png";
import { useNavigate } from "react-router";
import { AdminPanelSettings } from "@mui/icons-material";
import { setHeading } from "../../state/slice-creater/headingTextSlice";

const { Header, Sider, Content } = Layout;

const Sidebar: React.FC = () => {
  const collapsed = useAppSelector((state) => state.sideToggle.collapse);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
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
                onClick: () => {
                  dispatch(setHeading("Add Teacher "));
                },
              },
              {
                key: "view-teachers",
                label: "View Teacher List",
                onClick: () => {
                  dispatch(setHeading("View Teacher List"));
                },
              },
              {
                key: "teacher-detail",
                label: "Teacher Detail",
                onClick: () => {
                  dispatch(setHeading("Teacher Detail"));
                },
              },
            ],
          },
          {
            key: "Courser",
            icon: <SiCoursera />,
            label: "Cousers",
            children: [
              {
                key: "add-course",
                label: "Add Courser",
              },
              {
                key: "view-courses",
                label: "View Course List",
              },
              {
                key: "add-video",
                label: "Add Course Video",
              },
            ],
          },
          {
            key: "Admin Profile",
            icon: <AdminPanelSettings />,
            label: "Admin Profile",
            children: [
              {
                key: "edit-admin",
                label: "Edit Profile",
              },
              {
                key: "change-password",
                label: "Change Password",
              },
            ],
          },
        ]}
      />
    </Sider>
  );
};

export default Sidebar;
