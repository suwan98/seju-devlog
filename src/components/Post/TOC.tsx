"use client";

import {useEffect, useState} from "react";
import getInterSectionObserver from "@/utils/getInterSectionObserver";
import {Link} from "react-scroll";

function TOC() {
  const [currentId, setCurrentId] = useState<string>("");
  const [headingElements, setHeadingElements] = useState<Element[]>([]);
  useEffect(() => {
    const observer = getInterSectionObserver(setCurrentId);
    const headingEls = Array.from(
      document.querySelectorAll("h1[id],h2[id],h3[id]")
    );
    setHeadingElements(headingEls);
    headingEls.map((header) => {
      observer.observe(header);
    });
  }, []);

  return (
    <>
      <div className="fixed top-0  left-[calc(100%-28rem)] tablet:left-[calc(100%-20rem)] mt-[20rem] mobile:hidden ">
        <ul className="flex flex-col items-end gap-2">
          {headingElements.map((heading) => {
            return (
              <li
                key={heading.id}
                className="list-none cursor-pointer text-lg text-opacity-60 text-primaryColor hover:underline hover:text-opacity-1 dark:text-secondaryColor">
                <Link
                  to={heading.id}
                  smooth={true}
                  duration={500}
                  className={`${
                    heading.id === currentId ? "text-blue-400 font-bold" : null
                  }`}>
                  {heading.textContent}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default TOC;
