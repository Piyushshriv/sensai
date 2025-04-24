"use client";

import React from "react";
import MDEditor from "@uiw/react-md-editor";

const CoverLetterPreview = ({ content }) => {
  // Check if content exists before rendering the editor
  const markdownContent = content || "No content available.";

  return (
    <div className="py-4">
      <MDEditor value={markdownContent} preview="preview" height={700} />
    </div>
  );
};

export default CoverLetterPreview;
