import Comment from "./Comment";

const fakeComments = [
  {
    date: "Oct 10, 2021",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eveniet natus explicabo fugit quis nisi!",
  },
  {
    date: "Oct 10, 2021",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eveniet natus explicabo fugit quis nisi!",
  },
  {
    date: "Oct 10, 2021",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eveniet natus explicabo fugit quis nisi!",
  },
];

function Comments() {
  return (
    <div className="col-span-4 mt-15 order-4 lg:order-none">
      <h2 className="text-[27px] font-semibold mb-5">Comments</h2>
      {fakeComments.map((comment, i) => (
        <Comment key={i} comment={comment} />
      ))}

      <form>
        <textarea
          placeholder="Write a comment"
          className="w-full h-48 text-xl p-4 shadow-xl resize-none rounded-lg focus:outline-none"
        ></textarea>
        <button className="px-4 py-3 bg-[#41b69d] rounded-lg text-white mt-5 cursor-pointer">
          Submit Review &rarr;
        </button>
      </form>
    </div>
  );
}

export default Comments;
