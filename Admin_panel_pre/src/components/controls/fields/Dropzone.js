import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDropzone } from "react-dropzone";

import { ReactComponent as CloseIcon } from "../../../assets/images/icons/Close-Icon.svg";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  minidth: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
  position: "relative",
};

const Dropzone = (props) => {
  const {
    label,
    file,
    onDrop,
    maxFiles,
    isMultiple,
    setImages = () => {},
  } = props;
  const [myFiles, setMyFiles] = useState([]);

  useEffect(() => {
    setMyFiles(file);
  }, [file]);

  const { getRootProps, getInputProps, fileRejections } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
    maxFiles: maxFiles,
    multiple: isMultiple,
  });

  const removeFile = (file) => {
    const newFiles = [...myFiles];
    newFiles.splice(newFiles.indexOf(file), 1);
    setMyFiles(newFiles);
    setImages(newFiles);
  };

  const fileRejectionItems = fileRejections.map(({ file, errors }) => {
    return (
      <li key={file.path}>
        <ul>
          {errors.map((e) => (
            <li key={e.code}>{e.message}</li>
          ))}
        </ul>
      </li>
    );
  });

  const thumbs = myFiles?.map((file) => (
    <div style={thumb} key={file?.name}>
      <div style={thumbInner}>
        <img
          src={file?.preview}
          alt="img"
          style={img}
          // onLoad={() => {
          //   URL.revokeObjectURL(file?.preview);
          // }}
        />
        <button
          onClick={() => removeFile(file)}
          type="button"
          style={{
            height: "10px",
            width: "10px",
            border: "none",
            position: "absolute",
            backgroundColor: "inherit",
          }}
        >
          <div
            style={{
              marginLeft: "-20px",
              marginTop: "-20px",
            }}
          >
            <CloseIcon />
          </div>
        </button>
      </div>
    </div>
  ));

  useEffect(() => {
    return () => myFiles?.forEach((file) => URL.revokeObjectURL(file?.preview));
  }, [myFiles]);

  return (
    <Form.Group>
      <label style={{ fontWeight: "bolder" }}>{label}</label>
      <div
        style={{ height: "48px", marginTop: "7px" }}
        {...getRootProps({ className: "dropzone form-control" })}
      >
        <input {...getInputProps()} />
        <p>Click here or drag image here to upload image.</p>
      </div>
      <aside style={thumbsContainer}>
        {thumbs}
        {
          <ul style={{ color: "red" }}>
            {fileRejectionItems.length > 0
              ? `Maximum ${maxFiles} images can be selected.`
              : null}
          </ul>
        }
      </aside>
    </Form.Group>
  );
};

export default Dropzone;
