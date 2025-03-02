import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Video() {
  return (
    <div className="col-span-4 relative">
      <video
        controls
        src="/0218.mp4"
        className="lg:w-full aspect-video top-0 left-0 z-50 lg:relative"
      ></video>
      <ul className="flex gap-3 mt-4">
        <li className="p-2 rounded-full border-[1px] border-[#5e5e5e] cursor-pointer">
          <FaFacebookF color="#5e5e5e" />
        </li>
        <li className="p-2 rounded-full border-[1px] border-[#5e5e5e] cursor-pointer">
          <FaTwitter color="#5e5e5e" />
        </li>
        <li className="p-2 rounded-full border-[1px] border-[#5e5e5e] cursor-pointer">
          <FaLinkedinIn color="#5e5e5e" />
        </li>
        <li className="p-2 rounded-full border-[1px] border-[#5e5e5e] cursor-pointer">
          <FaYoutube color="#5e5e5e" />
        </li>
      </ul>
    </div>
  );
}

export default Video;
