import React from "react";
import FileViewer from "react-file-viewer";

import FileFAQ from "../../../src/assets/FAQ.docx";

export default () => {
  return (
    <div
      className="file-viewer"
      style={{ height: "100%", width: "100%", backgroundColor: "grey" }}
    >
      <FileViewer
        fileType={"docx"}
        filePath={"https://topgrowth.sgp1.digitaloceanspaces.com/FAQ.docx"}
      />
    </div>
  );
};
