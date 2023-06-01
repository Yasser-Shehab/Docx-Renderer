import React from "react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const DocRenderer = () => {
  const docx = "https://calibre-ebook.com/downloads/demos/demo.docx";
  const html = "https://www.w3schools.com/html/";
  const docs = [
    {
      uri: "https://docs.apollonia.health/Apollonia%20Invoice.docx",
      fileType: "docx",
      fileName: "demo.docx",
    },
    {
      uri: "https://docs.apollonia.health/Apollonia%20Invoice.pdf",
      fileType: "pdf",
      fileName: "demo.pdf",
    },
    {
      uri: "https://download1532.mediafire.com/79q562ilmnhgnwaT7WBNmwabL9CoOnZF2zCSU48kFH-adkXf1x3trRZXETtvq6WEU6X8Rz9qVHssT-hjmrTZ4NJBVS-GOWWPWFaznRoAONpVmo9_GhEwAb6iRXyjzpt5sgzW0t2hh95YYC0KtOpbWVfCU0KsSaL7hDLiTTJ_hA/yuu8azy0q2ykuxw/test.html",
      fileType: "html",
      fileName: "test.html",
    },
  ];

  return (
    <DocViewer
      documents={docs}
      pluginRenderers={DocViewerRenderers}
      style={{ height: "100vh", width: "60vw", margin: "0 auto" }}
    />
  );
};

export default DocRenderer;
