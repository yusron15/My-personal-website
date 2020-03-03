import React, { useEffect, useState } from "react";
import FileViewer from "react-file-viewer";

export default () => {
  const [fileUrl, setFileUrl] = useState("");
  const fetchPrivacyPolicy = async () => {
    try {
      let result = await fetch(
        // "https://api-topgrowthfutures.kool.co.id/api/filebuckets?filter[where][type]='privacyPolicy'"
        "http://localhost:3000/api/filebuckets?filter[where][type]=privacyPolicy"
      );

      result = await result.json();

      console.log(result);

      await setFileUrl(result[0].fileUrl);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPrivacyPolicy();
  }, []);

  return (
    <div
      className="file-viewer"
      style={{
        backgroundColor: "grey",
        width: "100%",
        height: "100%"

        // display: "flex",
        // justifyContent: "center"
      }}
    >
      {fileUrl && <FileViewer fileType={"pdf"} filePath={fileUrl} />}
    </div>
  );
};
