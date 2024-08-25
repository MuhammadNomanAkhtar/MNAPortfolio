// ResumeButton.js

import React from "react";
import resume from "../../resume/resume.pdf";
import coverLetter from "../../coverLetter/coverLetter.pdf"

const CoverLetterButton = ({ className }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = coverLetter;
    link.download = "Noman's Cover Letter.pdf"; // Change the filename if needed
    link.click();
  };

  return (
    <a
      style={{ cursor: "pointer" }}
      onClick={handleDownload}
      className={`${className} `}
    >
      Cover Letter
    </a>
  );
};

export default CoverLetterButton;
