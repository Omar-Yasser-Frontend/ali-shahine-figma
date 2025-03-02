import { CiGlobe } from "react-icons/ci";
import { FaBookReader } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import { TbBooks } from "react-icons/tb";

function CourseMaterial() {
  return (
    <div className="col-span-4 mt-15">
      <h2 className="text-[27px] mb-5 head-responsive">Course Material</h2>
      <div className="flex gap-23 shadow-xl px-[37px] py-5">
        <ul className="flex-1 px-3">
          <li className="flex w-full gap-1 text-xl py-3">
            <MdOutlineAccessTime />
            <span className="font-light">Duration</span>
            <span className="block ml-auto">3 weeks</span>
          </li>
          <li className="flex w-full gap-1 text-xl py-3 border-t-1 border-light-gray">
            <TbBooks />
            <span className="font-light">Lessons</span>
            <span className="block ml-auto">8</span>
          </li>
          <li className="flex w-full gap-1 text-xl py-3 border-t-1 border-light-gray">
            <FaBookReader />
            <span className="font-light">Enrolled</span>
            <span className="block ml-auto">65 students</span>
          </li>
          <li className="flex w-full gap-1 text-xl py-3 border-t-1 border-light-gray">
            <CiGlobe />
            <span className="font-light">language</span>
            <span className="block ml-auto">English</span>
          </li>
        </ul>
        <ul className="flex-1 px-3 hidden md:block">
          <li className="flex w-full gap-1 text-xl py-3">
            <MdOutlineAccessTime />
            <span className="font-light">Duration</span>
            <span className="block ml-auto">3 weeks</span>
          </li>
          <li className="flex w-full gap-1 text-xl py-3 border-t-1 border-light-gray">
            <TbBooks />
            <span className="font-light">Lessons</span>
            <span className="block ml-auto">8</span>
          </li>
          <li className="flex w-full gap-1 text-xl py-3 border-t-1 border-light-gray">
            <FaBookReader />
            <span className="font-light">Enrolled</span>
            <span className="block ml-auto">65 students</span>
          </li>
          <li className="flex w-full gap-1 text-xl py-3 border-t-1 border-light-gray">
            <CiGlobe />
            <span className="font-light">language</span>
            <span className="block ml-auto">English</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CourseMaterial;
