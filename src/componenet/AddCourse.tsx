import { Button, DatePicker, Form, Input, Select, Switch, message } from "antd";
import React, { useEffect } from "react";

import teacherTeam from "../assets/teachers.png";
import { useAppSelector } from "../state/hook";
import UploadProfile from "./UploadProfile";
import dayjs from "dayjs";
import { useSaveCourse } from "../hooks/useCrudeCourse";
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

const AddCourse: React.FC = () => {
  const TeacherDetails = useAppSelector((state) => state.editState.teacher);
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
    categories,
    language,
  } = useSaveCourse();

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
    form.setFieldsValue({
      teacherId: TeacherDetails?.teacherId,
      firstName: TeacherDetails?.firstName,
      lastName: TeacherDetails?.lastName,
      createDate: dayjs(new Date()),
    });
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
            Add Name course
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
          // initialValue={TeacherDetails?.teacherId}
        >
          <Input
            className="placeholder:text-black placeholder:font-medium"
            readOnly={true}
            type="number"
          />
        </Form.Item>

        <Form.Item
          label="Teacher First"
          name="firstName"
          // rules={[{ required: true, message: "Please input!" }]}
          // initialValue={TeacherDetails?.firstName}
        >
          <Input
            className="placeholder:text-black placeholder:font-medium"
            readOnly={true}
          />
        </Form.Item>

        <Form.Item
          label="Teacher Last"
          name="lastName"
          // rules={[{ required: true, message: "Please input!" }]}
          // initialValue={TeacherDetails?.lastName}
        >
          <Input
            className="placeholder:text-black placeholder:font-medium"
            readOnly={true}
          />
        </Form.Item>

        <Form.Item
          label="Course Title"
          name="title"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input />
        </Form.Item>

        {/* <Form.Item
          label="fees"
          name="fees"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item> */}

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>

        {/* <Form.Item
          label="rating"
          name="rating"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item> */}

        <Form.Item
          label="Create Date"
          name="createDate"
          rules={[{ required: true, message: "Please input!" }]}
          // initialValue={dayjs(new Date())}
        >
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Category"
          name="categoryId"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Select
            options={
              // { label: "Graphy Desgin", value: "Graphy Desgin" },
              // { label: "Java Devlopment", value: "Java Devlopment" },
              // { label: "Web Devlopment", value: "Web Devlopment" },
              categories?.map((itme) => ({
                label: itme.category,
                value: itme.categoryId + 0,
              }))
            }
          />
        </Form.Item>

        <Form.Item
          label="Language"
          name="languageId"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Select
            options={
              // { label: "Graphy Desgin", value: "Graphy Desgin" },
              // { label: "Java Devlopment", value: "Java Devlopment" },
              // { label: "Web Devlopment", value: "Web Devlopment" },
              language?.map((itme) => ({
                label: itme.language,
                value: itme.languageId + 0,
              }))
            }
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
export default AddCourse;
