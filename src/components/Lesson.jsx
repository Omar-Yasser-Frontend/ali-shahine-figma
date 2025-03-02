import { useState } from "react";
import { BsFileEarmarkText, BsLock } from "react-icons/bs";
import PDFView from "./PDFView";
import Exam from "./Exam";

function Lesson({ mins, lesson, question }) {
  const [showPDF, setShowPDF] = useState(false);
  const [showExam, setShowExam] = useState(false);
  const switchShowPDf = () => setShowPDF((show) => !show);
  const switchShowExam = () => setShowExam((show) => !show);

  return (
    <>
      <li
        className="flex items-center justify-between p-3 cursor-pointer"
        onClick={() => (!mins ? switchShowExam() : switchShowPDf())}
      >
        <div className="flex gap-1 font-light">
          <BsFileEarmarkText />
          {lesson}
        </div>
        <div>
          {mins ? (
            <div className="flex flex-wrap gap-1">
              <span className="p-1 bg-red-200 rounded-md">
                {question} Questoins
              </span>
              <span className="p-1 bg-blue-200 rounded-md">{mins} Minutes</span>
            </div>
          ) : (
            <BsLock />
          )}
        </div>
      </li>
      {showPDF && <PDFView switchShow={switchShowPDf} />}
      {showExam && <Exam switchShow={switchShowExam} />}
    </>
  );
}

export default Lesson;
