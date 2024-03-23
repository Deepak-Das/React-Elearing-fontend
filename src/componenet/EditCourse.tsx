import { Button, DatePicker, Form, Input, Select, Switch, message } from "antd";
import React, { useEffect } from "react";

import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useParams } from "react-router";
import teacherTeam from "../assets/teachers.png";
import { useUpdateCourse } from "../hooks/useCrudeCourse";
import { getCourseById } from "../service/CourseService";
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

const EditCourse: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const { courseId } = useParams();
  const { data } = useQuery({
    queryKey: ["singleCourse"],
    queryFn: () => getCourseById({ courseId }),
  });

  const {
    onFinish,
    base64ImgData,
    form,
    isPending,
    isSuccess,
    uploadLoading,
    handleChange,
    categories,
    language,
  } = useUpdateCourse();

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
      ...data,
      createDate: dayjs(data?.createDate),
    });
  }, []);

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
            Edit course
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
export default EditCourse;
