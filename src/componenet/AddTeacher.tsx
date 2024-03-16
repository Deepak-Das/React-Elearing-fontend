import React, { useEffect, useState } from "react";
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
import moment from "moment";

import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

import teacherTeam from "../assets/teachers.png";
import { useForm } from "antd/es/form/Form";
import UploadProfile from "./UploadProfile";
import useSingleTeacher from "../hooks/useSingleTeacher";
// import { useForm, Controller } from "react-hook-form";

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

// =====================

const AddTeacher: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const dateFormat = "YYYY-MM-DD";

  const {
    onFinish,
    base64ImgData,
    setBase64Image,
    form,
    isError,
    isPending,
    isSuccess,
    uploadLoading,
    setUploadLoadin,
    handleChange,
  } = useSingleTeacher();

  useEffect(() => {
    {
      isPending &&
        messageApi.open({
          type: "warning",
          content: "wait while teacher is saving",
          duration: 5,
        });
    }

    {
      isSuccess &&
        messageApi.open({
          type: "success",
          content: "Teacher saved successfully",
          duration: 10,
        });
    }
  }, [isError, isPending, isSuccess]);

  return (
    <div className="p-4 m-6 rounded-lg grid grid-cols-3 justify-center items-center bg-white">
      {contextHolder}
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
            base64Data={base64ImgData}
            loading={uploadLoading}
            handleChange={handleChange}
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
          name="lastName"
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
          name="experience"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input style={{ width: "100%" }} type="number" />
        </Form.Item>

        <Form.Item
          label="Qualification"
          name="qualification"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Language"
          name="language"
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

        <Form.Item label="isBlock" name="isBlock">
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
export default AddTeacher;
