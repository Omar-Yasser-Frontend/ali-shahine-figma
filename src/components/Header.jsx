import Cheveron from "/chevron-right-svgrepo-com.svg";

function Header() {
  return (
    <div className="bg-light-blue">
      <header className="container mx-auto px-4">
        <p className="py-4 flex gap-1">
          <span className="text-gray-800">Home</span>{" "}
          <img width="20px" height={"20px"} src={Cheveron} alt="" />{" "}
          <span className="text-gray-800">Courses</span>{" "}
          <img width="20px" height={"20px"} src={Cheveron} alt="" />{" "}
          <span className="text-gray-800">Course Details</span>{" "}
        </p>

        <h1 className="font-semibold text-3xl">Starting CEO as your Home</h1>
      </header>
    </div>
  );
}

export default Header;
