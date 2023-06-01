import DOMPurify from "dompurify";

const HTMLRenderer = ({ htmlContent }) => {
  const sanitizedHTML = DOMPurify.sanitize(htmlContent);

  return <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />;
};

export default HTMLRenderer;
