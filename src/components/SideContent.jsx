import Content from "./Content";
import CourseConent from "./CourseConent";
import ProgressBar from "./ProgressBar";

function SideContent() {
  return (
    <div className=" lg:row-span-4 lg:col-span-2 col-span-4 mt-15 lg:mt-0 order-3 lg:order-none">
      <div className="hidden lg:block">
        <h2 className="text-2xl font-semibold mb-3">Topics for This Course</h2>
        <ProgressBar />
        <Content />
      </div>
      <div className="lg:hidden">
        <h2 className="text-2xl font-semibold mb-3">Topics for This Course</h2>
        <ProgressBar />
        <CourseConent />
      </div>
    </div>
  );
}

export default SideContent;
