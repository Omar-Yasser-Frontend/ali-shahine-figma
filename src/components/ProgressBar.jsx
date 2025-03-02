import { useEffect, useRef, useState } from "react";

function ProgressBar() {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="mt-[49px] mb-[67px]">
      <div className="w-full h-2 bg-light-gray rounded-full">
        <span
          ref={ref}
          className={`block duration-1000 ${
            isVisible ? "w-[63%]" : "w-0"
          } h-full bg-greem rounded-full progress relative`}
        >
          <span className="label flex items-center justify-center">you</span>
          <span className="percentage text-gray-600 text-xs">63%</span>
        </span>
      </div>
    </div>
  );
}

export default ProgressBar;
