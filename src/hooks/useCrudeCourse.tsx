import { useMutation, useQuery } from "@tanstack/react-query";
import { GetProp, UploadProps } from "antd";
import { useForm } from "antd/es/form/Form";
import { RcFile } from "antd/es/upload";
import { useState } from "react";
import { addCourse } from "../service/CourseService";
import {
  GetAllCategories,
  GetAllLanguage,
} from "../service/FieldSeclectService";
import { useAppSelector } from "../state/hook";

const useCrudeCourse = () => {
  type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];
  const teacherID = useAppSelector(
    (state) => state.editState.teacher
  )?.teacherId;

  const [uploadLoading, setUploadLoadin] = useState(false);
  const [base64ImgData, setBase64Image] = useState("");
  const [multiPartFile, setMultipartFile] = useState<RcFile | undefined>(
    undefined
  );

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
        // setMultipartFile(info.)

        setBase64Image(data);
        console.log(base64ImgData);
      });
    }
  };

  const [form] = useForm();

  const { mutate, isError, isPending, isSuccess } = useMutation({
    mutationKey: ["Save Teacher"],
    mutationFn: addCourse,
  });

  const onFinish = (values: any) => {
    // const val = values as TeacherModel;

    // const jsonBody = { ...values, profilePicture: multiPartFile };
    // console.log(val.dob);
    // val.dob = moment(val.dob).format("YYYY-MM-DD");
    const val = { ...values, courseImg: base64ImgData };

    console.log(val);

    mutate({ teacherId: teacherID!, data: val });
    setBase64Image("");
    form.resetFields();
  };

  const categories = useQuery({
    queryKey: ["Categories"],
    queryFn: GetAllCategories,
  });
  const languages = useQuery({
    queryKey: ["languages"],
    queryFn: GetAllLanguage,
  });

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
    categories: categories.data?.data,
    language: languages.data?.data,
  };
};

export default useCrudeCourse;
