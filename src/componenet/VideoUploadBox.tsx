import React, { Dispatch, SetStateAction } from "react";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { message, Upload } from "antd";
import { RcFile } from "antd/es/upload";

const { Dragger } = Upload;

const props: UploadProps = {
  name: "file",
  multiple: false,
  maxCount: 1,
  // action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  beforeUpload: (info) => {
    const videoExt = [".mpg", ".mp2", ".mpeg", ".mpe", ".mpv", ".mp4"]; // you can add more extention

    let isVideo = false;

    videoExt.map((ext) => (isVideo = info.name.includes(ext)));
    if (!isVideo) {
      message.error(`${info.name} file upload failed.`);
    }

    return !isVideo;
  },
  // onChange(info) {
  //   // const { status } = info.file;
  //   // if (status !== "uploading") {
  //   //   console.log(info.file, info.fileList);
  //   // }
  //   // if (status === "done") {
  //   //   message.success(`${info.file.name} file uploaded successfully.`);
  //   // } else if (status === "error") {
  //   //   message.error(`${info.file.name} file upload failed.`);
  //   // }

  //   console.log(info.file);
  // },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

interface Props {
  setVideoFile: Dispatch<SetStateAction<RcFile | File | any>>;
}

const VideoUploadBox: React.FC<Props> = ({ setVideoFile }) => (
  <Dragger
    {...props}
    onChange={(info) => {
      console.log(info.file);

      setVideoFile(info.file);
    }}
  >
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibited from uploading
      company data or other banned files.
    </p>
  </Dragger>
);

export default VideoUploadBox;
