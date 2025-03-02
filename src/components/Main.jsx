import Comments from "./Comments";
import CourseMaterial from "./CourseMaterial";
import SideContent from "./SideContent";
import Video from "./Video";

function Main() {
  return (
    <div>
      <main className="grid lg:grid-cols-6 container mx-auto p-4 gap-x-12">
        <Video />
        <SideContent />
        <CourseMaterial />
        <Comments />
      </main>
    </div>
  );
}

export default Main;
