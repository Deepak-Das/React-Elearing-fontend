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

const EditCourse: React.FC = () => {
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
            Edit Course
          </h3>
        </div>

        <Form.Item label="Course Img">
          <UploadProfile
            base64Data={base64ImgData}
            imgUrl="https://www.jrebel.com/sites/default/files/image/2020-05/image-blog-revel-top-java-tools.jpg"
          />
        </Form.Item>

        <Form.Item
          label="Courser ID"
          name="corusreId"
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
          label="Course Name"
          name="coursename"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="fees"
          name="fees"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="rating"
          name="rating"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="ValidDate"
          name="validDate"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Category"
          name="categoryId"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Select
            options={[
              { label: "Graphy Desgin", value: "Graphy Desgin" },
              { label: "Java Devlopment", value: "Java Devlopment" },
              { label: "Web Devlopment", value: "Web Devlopment" },
            ]}
          />
        </Form.Item>

        <Form.Item label="Block" name="isBlock">
          <Switch className="bg-gray-300" value={false} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 11, span: 16 }}>
          <Button type="primary" htmlType="submit" className="bg-[#15395b]">
            Submit
          </Button>
        </Form.Item>
      </Form>

      <img src={teacherTeam} className=" p-6" alt="" />
    </div>
  );
};
export default EditCourse;
