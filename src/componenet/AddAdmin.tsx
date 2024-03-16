import React, { useState } from "react";
import {
  Button,
  DatePicker,
  Form,
  GetProp,
  Input,
  Modal,
  Select,
  Switch,
  Upload,
  UploadFile,
  UploadProps,
  message,
} from "antd";

import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

import teacherTeam from "../assets/teachers.png";
import { useForm } from "antd/es/form/Form";
import UploadProfile from "./UploadProfile";
// import { useForm, Controller } from "react-hook-form";

const { RangePicker } = DatePicker;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const uploadButton = (
  <button style={{ border: 0, background: "none" }} type="button">
    <PlusOutlined />
    <div style={{ marginTop: 8 }}>Upload</div>
  </button>
);

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

// =====================

const ChangePassword: React.FC = () => {
  const [form] = useForm();
  const onFinish = (values: any) => {
    const jsonBody = { ...values, base64: base64ImgData };
    console.log(jsonBody);
    form.resetFields();
  };

  const base64ImgData = "";

  return (
    <div className="p-4 m-6 rounded-lg grid grid-cols-3 justify-center items-center bg-white">
      <Form
        {...formItemLayout}
        variant="filled"
        className="col-span-2"
        onFinish={onFinish}
        form={form}
      >
        <div className="w-full flex justify-center items-center p-4">
          <h3 className="text-lg font-medium uppercase underline">
            Change Password
          </h3>
        </div>

        <Form.Item
          label="Old-Password"
          name="old-password"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input type="password" style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="New-Password"
          name="new-password"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input type="password" style={{ width: "100%" }} />
        </Form.Item>
      </Form>

      <video width="750" height="500" controls>
        <source
          src="http://localhost:9090/api/file/2355a4eb-0331-431e-9a24-3b582631ff42.mp4"
          type="video/mp4"
        />
      </video>

      {/* <img src={teacherTeam} className=" p-6" alt="" /> */}
    </div>
  );
};
export default ChangePassword;
