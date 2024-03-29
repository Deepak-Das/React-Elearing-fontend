import { useMutation } from "@tanstack/react-query";
import { GetProp, UploadProps } from "antd";
import { useForm } from "antd/es/form/Form";
import React, { useState } from "react";
import { TeacherModel } from "../model/TeacherModel";
import moment from "moment";
import { RcFile } from "antd/es/upload";
import { saveTeacher } from "../service/TeacherService";

const useCrudeTeacher = ({
  apiFun,
}: {
  apiFun: (data: TeacherModel) => Promise<void>;
}) => {
  type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

  const [uploadLoading, setUploadLoadin] = useState(false);
  const [base64ImgData, setBase64Image] = useState("");
  // const [multiPartFile, setMultipartFile] = useState<RcFile | undefined>(
  //   undefined
  // );

  const getBase64 = (img: FileType, callback: (data: string) => void) => {
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.addEventListener("load", () => callback(reader.result as string));
  };

  const handleChange: UploadProps["onChange"] = (info) => {
    if (info.file.status === "uploading") {
      setUploadLoadin(true);
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj as FileType, (data) => {
        setUploadLoadin(false);
        setBase64Image(data);
        // console.log("base64: ", data);
        // console.log();
        // setMultipartFile(info.file.originFileObj);

        // console.log(multiPartFile);

        setBase64Image(data);
        console.log(base64ImgData);
      });
    }
  };

  const [form] = useForm();

  const { mutate, isError, isPending, isSuccess } = useMutation({
    mutationKey: ["Save Teacher"],
    mutationFn: apiFun,
  });

  const onFinish = (values: any) => {
    const val = values as TeacherModel;

    // const jsonBody = { ...values, profilePicture: multiPartFile };
    // console.log(val.dob);
    // val.dob = moment(val.dob).format("YYYY-MM-DD");

    mutate({ ...val, profilePicture: base64ImgData });
    setBase64Image("");
    form.resetFields();
  };

  return {
    getBase64,
    onFinish,
    base64ImgData,
    setBase64Image,
    form,
    mutate,
    isError,
    isPending,
    isSuccess,
    uploadLoading,
    setUploadLoadin,
    handleChange,
  };
};

export default useCrudeTeacher;
