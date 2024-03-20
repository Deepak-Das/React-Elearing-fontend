import { Button, DatePicker, Form, Input, Select, Switch, message } from "antd";
import React, { useEffect } from "react";

import teacherTeam from "../assets/teachers.png";
import useCrudeTeacher from "../hooks/useCrudeTeacher";
import { saveTeacher } from "../service/TeacherService";
import UploadProfile from "./UploadProfile";

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

const AddTeacher: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const {
    onFinish,
    base64ImgData,
    form,
    isError,
    isPending,
    isSuccess,
    uploadLoading,
    handleChange,
  } = useCrudeTeacher({ apiFun: saveTeacher });

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
          name="languageId"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Select
            options={[
              { label: "Hindi", value: 1 },
              { label: "English", value: 2 },
              { label: "Bengali", value: 3 },
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
