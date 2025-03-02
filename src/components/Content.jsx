import Topics from "./Topics";
import React from "react";

const topics = [
  {
    head: "Week 1-4",
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
    head: "Week 5-8",
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
    head: "Week 5-8",
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

function Content() {
  return (
    <>
      {topics.map((topic, i) => (
        <React.Fragment key={i}>
          <div className={`border-1 border-light-gray px-4 py-6 my-4`}>
            <h3 className="text-xl">{topic.head}</h3>
            <p className="text-gray-600 text-[20px] my-3">
              Advanced story telling techniques for writers:
              <br />
              Persons, Characters & Plots
            </p>
            <Topics topic={topic} />
          </div>
          {i !== topics.length - 1 && <hr />}
        </React.Fragment>
      ))}
    </>
  );
}

export default Content;
