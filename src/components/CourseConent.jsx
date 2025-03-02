import React from "react";
import ContentList from "./ContentList";

const topics = [
  {
    head: "Course Introduction",
    content: [
      { lesson: "Introduction" },
      { lesson: "Course Overview" },
      { lesson: "Course Overview", question: 0, mins: 10 },
      { lesson: "Course Exercise / Reference File" },
      { lesson: "Code Editor installation (Optional if you have one)" },
      { lesson: "Embedding PHP in HTML" },
    ],
  },
  {
    head: "Javascript Language Basic",
    content: [
      { lesson: "Defining Functions" },
      { lesson: "Functions Parameters" },
      { lesson: "Return Values From Functions", question: 2, mins: 15 },
      { lesson: "Global Variable and Scope" },
      { lesson: "Newer Way of creating a Constant" },
      { lesson: "Constants" },
    ],
  },
  {
    head: "Components and Databinding",
    content: [
      { lesson: "Defining Functions" },
      { lesson: "Functions Parameters" },
      { lesson: "Return Values From Functions", question: 2, mins: 15 },
      { lesson: "Global Variable and Scope" },
      { lesson: "Newer Way of creating a Constant" },
      { lesson: "Constants" },
    ],
  },
];

function CourseConent() {
  return (
    <>
      {topics.map((topic, i) => (
        <React.Fragment key={i}>
          <ContentList topic={topic} />
        </React.Fragment>
      ))}
    </>
  );
}

export default CourseConent;
