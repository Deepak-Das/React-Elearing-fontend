import { GetProp, UploadProps } from "antd";
import { RcFile } from "antd/es/upload";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../state/hook";
import { setVDialoge } from "../state/slice-creater/toggleVideoUploadSlice";
import { useMutation } from "@tanstack/react-query";
import { UploadVideoThum } from "../service/videoService";
import { useParams } from "react-router";

const useUploadVideo = () => {
  type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];
  const { courseId } = useParams();

  const [uploadLoading, setUploadLoadin] = useState(false);
  const [base64ImgData, setBase64Image] = useState("");
  const [thumnailfile, setThumbnalFile] = useState<any>(null);
  const [videoFile, setVideoFile] = useState<any>(null);

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
        setThumbnalFile(info.file.originFileObj);

        setBase64Image(data);
        console.log(base64ImgData);
        console.log(info.file.originFileObj);
      });
    }
  };

  const { mutate } = useMutation({
    mutationKey: ["upload"],
    mutationFn: UploadVideoThum,
  });

  const collapsed = useAppSelector(
    (state) => state.videoUploadDialoge.collapse
  );
  const disPatch = useAppDispatch();

  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  const handleOk = () => {
    // setModalText("The modal will be closed after two seconds");

    const formData = new FormData();
    formData.append("thumbnail", thumnailfile);
    formData.append("video", videoFile);

    mutate({ courseId: courseId, data: formData });

    setConfirmLoading(true);
    setTimeout(() => {
      disPatch(setVDialoge(false));
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    disPatch(setVDialoge(false));
  };

  return {
    uploadLoading,
    base64ImgData,
    handleChange,
    handleOk,
    handleCancel,
    collapsed,
    confirmLoading,
    setThumbnalFile,
    setVideoFile,
  };
};

export default useUploadVideo;
