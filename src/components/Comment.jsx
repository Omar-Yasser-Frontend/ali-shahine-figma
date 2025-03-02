function Comment({ comment }) {
  const { comment: fakeComment, date } = comment;
  return (
    <div className="flex items-start p-[13px_25px_25px_0] gap-5">
      <div className="aspect-square w-25 bg-light-gray rounded-full"></div>
      <div>
        <p className="text-xl mb-2">Student Name Goes Here</p>
        <p className={"text-gray-700"}>{date}</p>
        <p className="text-xl mt-4 text-gray-700">{fakeComment}</p>
      </div>
    </div>
  );
}

export default Comment;
