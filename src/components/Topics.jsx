import Lesson from "./Lesson";

function Topics({ topic }) {
  return (
    <ul className="content-weeks">
      {topic.content.map(({ lesson, mins, question }, i) => (
        <Lesson key={i} lesson={lesson} mins={mins} question={question} />
      ))}
    </ul>
  );
}

export default Topics;
