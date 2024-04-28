// ResumeButton.js

import React from "react";
import resume from "../../resume/resume.pdf";

const ResumeButton = ({ className }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Umar's resume.pdf"; // Change the filename if needed
    link.click();
  };

  return (
    <a
      style={{ cursor: "pointer" }}
      onClick={handleDownload}
      className={`${className} `}
    >
      Resume
    </a>
  );
};

export default ResumeButton;
