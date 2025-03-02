import { IoIosTimer } from "react-icons/io";

function Exam({ switchShow }) {
  return (
    <div className="inset-0 bg-[rgb(65,88,188)] top-0 fixed z-[1000] p-4">
      <button
        className="text-2xl text-white cursor-pointer p-3"
        onClick={switchShow}
      >
        &larr;
      </button>
      <div className="w-fit py-2 px-4 bg-yellow-500 shadow-md shadow-yellow-500 text-white flex gap-1 mx-auto">
        <IoIosTimer size={20} /> 09:32
      </div>
      <ul className="flex justify-center items-center gap-3 mt-8">
        <li className="flex items-center justify-center w-10 aspect-square rounded-full border-1 border-white">
          1
        </li>
        <li className="flex items-center justify-center w-10 aspect-square rounded-full border-1 border-white active">
          2
        </li>
        <li className="flex items-center justify-center w-10 aspect-square rounded-full border-1 border-white">
          3
        </li>
        <li className="flex items-center justify-center w-10 aspect-square rounded-full border-1 border-white">
          4
        </li>
        <li className="flex items-center justify-center w-10 aspect-square rounded-full border-1 border-white">
          5
        </li>
      </ul>
      <div className="h-full grid py-4">
        <div className="bg-white w-[80vw] mx-auto p-6 font-semibold">
          <p>1.</p>
          <p>
            among the following status of india, which one has the oldest rock
            information in the country?
          </p>

          <form action="">
            <ul className="mt-4">
              <li className="shadow-md mb-4">
                <label htmlFor="1" className="w-full flex items-center ">
                  <span className="py-2 px-4 border-r-1 border-light-gray flex">
                    <input
                      type="checkbox"
                      id="1"
                      className="w-0 h-0"
                      name="exam"
                    />
                    <span className="w-4 h-4 border-2 border-light-gray block">
                      <span className="w-2 h-2 bg-light-gray rounded-full left-[2px] top-[2px] relative"></span>
                    </span>
                  </span>{" "}
                  <span className="py-2 px-4">Asam</span>
                </label>
              </li>
              <li className="shadow-md mb-4">
                <label htmlFor="2" className="w-full flex items-center ">
                  <span className="py-2 px-4 border-r-1 border-light-gray flex">
                    <input
                      type="checkbox"
                      id="2"
                      className="w-0 h-0"
                      name="exam"
                    />
                    <span className="w-4 h-4 border-2 border-light-gray block">
                      <span className="w-2 h-2 bg-light-gray rounded-full left-[2px] top-[2px] relative"></span>
                    </span>
                  </span>{" "}
                  <span className="py-2 px-4">Asam</span>
                </label>
              </li>
              <li className="shadow-md mb-4">
                <label htmlFor="3" className="w-full flex items-center ">
                  <span className="py-2 px-4 border-r-1 border-light-gray flex">
                    <input
                      type="checkbox"
                      id="3"
                      className="w-0 h-0"
                      name="exam"
                    />
                    <span className="w-4 h-4 border-2 border-light-gray block">
                      <span className="w-2 h-2 bg-light-gray rounded-full left-[2px] top-[2px] relative"></span>
                    </span>
                  </span>{" "}
                  <span className="py-2 px-4">Asam</span>
                </label>
              </li>
              <li className="shadow-md mb-4">
                <label htmlFor="4" className="w-full flex items-center ">
                  <span className="py-2 px-4 border-r-1 border-light-gray flex">
                    <input
                      type="checkbox"
                      id="4"
                      className="w-0 h-0"
                      name="exam"
                    />
                    <span className="w-4 h-4 border-2 border-light-gray block">
                      <span className="w-2 h-2 bg-light-gray rounded-full left-[2px] top-[2px] relative"></span>
                    </span>
                  </span>{" "}
                  <span className="py-2 px-4">Asam</span>
                </label>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Exam;
