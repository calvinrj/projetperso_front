import React, { useState } from "react";
import axios from "axios";

function ImageUpload() {
  const [files, setfiles] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();

    const data = new FormData();
    for(let i=0; i<files.length; i++) {

        data.append("file", files);
    }

    data
      .post("//localhost:5000/upload", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onInputChange = (event) => {
    setfiles(event.target.files);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="file" onChange={onInputChange} />

        <input type submit value="Upload" />
      </form>
    </div>
  );
}

export default ImageUpload;
