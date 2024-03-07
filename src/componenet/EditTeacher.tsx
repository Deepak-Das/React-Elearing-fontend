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

const EditTeacher: React.FC = () => {
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
            Add New Teacher
          </h3>
        </div>

        <Form.Item label="Upload Img">
          <UploadProfile
            imgUrl="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp"
            base64Data={base64ImgData}
          />
        </Form.Item>

        <Form.Item
          label="Teacher ID"
          name="teacherId"
          // rules={[{ required: true, message: "Please input!" }]}
        >
          <Input
            placeholder="1234"
            className="placeholder:text-black placeholder:font-medium"
            readOnly={true}
            disabled={true}
          />
        </Form.Item>

        <Form.Item
          label="First Name"
          name="firstName"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="InputNumber"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Date of birth"
          name="dob"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Date of Joining"
          name="doj"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Experience in yrs."
          name="exp"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input style={{ width: "100%" }} type="number" />
        </Form.Item>

        <Form.Item
          label="Language"
          name="languageId"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Select
            options={[
              { label: "Hindi", value: "Hindi" },
              { label: "English", value: "English" },
              { label: "Bengali", value: "Bengali" },
            ]}
          />
        </Form.Item>

        <Form.Item label="Block" name="isBlock">
          <Switch className="bg-gray-300" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 11, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      <img src={teacherTeam} className=" p-6" alt="" />
    </div>
  );
};
export default EditTeacher;
