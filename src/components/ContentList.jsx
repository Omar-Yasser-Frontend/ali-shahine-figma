import { useState } from "react";
import Topics from "./Topics";

function ContentList({ topic }) {
  const [show, setShow] = useState(false);
  return (
    <div className={`border-1 border-light-gray my-4`}>
      <h3
        onClick={() => setShow((show) => !show)}
        className="text-xl border-b-1 border-light-gray px-4 py-6 cursor-pointer flex justify-between"
      >
        <span>{topic.head}</span> <span>{show ? "-" : "+"}</span>
      </h3>
      {show && <Topics topic={topic} />}
    </div>
  );
}

export default ContentList;
