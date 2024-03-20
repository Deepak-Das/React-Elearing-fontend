import { Button, DatePicker, Form, Input, Select, Switch } from "antd";
import React, { useEffect } from "react";

import dayjs from "dayjs";
import teacherTeam from "../assets/teachers.png";
import useCrudeTeacher from "../hooks/useCrudeTeacher";
import { updateTeacher } from "../service/TeacherService";
import { BASE_URL } from "../service/axios";
import { useAppSelector } from "../state/hook";
import UploadProfile from "./UploadProfile";
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

const EditTeacher: React.FC = () => {
  const editTeacher = useAppSelector((state) => state.editState.teacher);
  const {
    onFinish,
    base64ImgData,
    setBase64Image,
    form,
    uploadLoading,
    handleChange,
  } = useCrudeTeacher({ apiFun: updateTeacher });

  useEffect(() => {
    const cDoj = editTeacher?.doj;
    console.log("Edit Teacher ", {
      ...editTeacher,
      doj: dayjs(cDoj),
    });
    setBase64Image(BASE_URL + "/file/" + editTeacher?.profilePicture || "");
    form.setFieldsValue({
      ...editTeacher,
      doj: dayjs(cDoj),
      dob: dayjs(editTeacher?.dob),
    });
  }, []);

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
            base64Data={base64ImgData}
            loading={uploadLoading}
            handleChange={handleChange}
          />
        </Form.Item>

        <Form.Item
          label="Teacher ID"
          name="teacherId"
          // rules={[{ required: true, message: "Please input!" }]}
        >
          <Input
            className="placeholder:text-black placeholder:font-medium"
            readOnly={true}
            type="number"
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
