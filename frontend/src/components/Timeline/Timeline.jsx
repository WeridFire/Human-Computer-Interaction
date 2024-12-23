import React, { useEffect, useState, useRef } from "react";

const Timeline = ({ allPosts }) => {
  // Parse the JSON string to get the posts
  const parsedPosts = JSON.parse(allPosts);
  const [activeIndex, setActiveIndex] = useState(-1);
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const elements = timelineRef.current.querySelectorAll(".timeline-item");

      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;

        if (inView) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-row justify-center gap-2 mx-8">
      {/* Vertical line */}
      <div className="w-1 bg-gray-300 min-h-full" style={{ zIndex: 0 }}>
        <div
          className="bg-blue-500 w-1 transition-all duration-500 ease-in-out"
          style={{ height: `${((activeIndex + 1) / parsedPosts.length) * 100}%` }}
        ></div>
      </div>

      <div ref={timelineRef} className="flex flex-col items-center space-y-8 py-12">
        {parsedPosts.map((post, index) => (
          <div
            key={post.frontmatter.title}
            className="relative flex items-center w-full max-w-md"
          >
            {/* Circle for checkpoint */}
            <div
              className={`rounded-full border-4 transition-all duration-300 ease-in-out ${
                activeIndex >= index ? "bg-blue-500 border-blue-500 size-6" : "bg-white border-gray-300 opacity-0 size-0"
              }`}
              style={{ position: "absolute", left: "-1.5rem" }}
            ></div>

            <div
              className={`timeline-item w-5/6 p-6 rounded-lg shadow-md border transition-transform duration-300 ease-in-out ${
                activeIndex >= index ? "scale-105 border-blue-500 opacity-100 translate-x-10" : "scale-100 border-gray-200 opacity-0"
              }`}
              style={{
                transitionProperty: "opacity, transform",
                transitionDuration: "0.5s",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              <div className="text-sm text-gray-500">{post.frontmatter.date}</div>
              <div className="text-xl text-transparent font-bold bg-gradient-to-r from-white to-cyan-700 bg-clip-text leading-snug -tracking-4">{post.frontmatter.title}</div>
              <div className="text-gray-300">{post.frontmatter.description}</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {Object.entries(post.frontmatter.data).map(([label, link]) => (
                  <a
                    key={label}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
