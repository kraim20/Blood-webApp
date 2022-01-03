import React, { useState } from "react";
import axios from "axios";

function FileUpload() {

    const [fileData, setFileData] = useState("");
    const getFile = (e) => {
        setFileData(e.target.files[0]);
        console.log("data-file", fileData)
    };

    const uploadFile = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("file", fileData);
        axios({
            method: "POST",
            url: "http://localhost:5000/upload",
            data: data,
        }).then((res) => {
            alert(res.data.message);
            
            

        });
    };
    return (
        <div>
            <input type="file" name="file" class="py-2 mt-2 text-base leading-normal" onChange={getFile} required />
            <input type="submit" name="upload" value="Upload" class="cursor-pointer" onSubmit={ uploadFile } />
        </div>
    );
}

export default FileUpload;