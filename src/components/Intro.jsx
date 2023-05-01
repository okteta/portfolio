import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl dark:text-white md:text-7xl mb-1 md:mb-3 font-bold">
        Eliza Riordan
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Novice C++ Programmer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        This is my entire bio, I am writing useless text here to show you how to
        <br /> <br /> break a paragraph within a paragraph tag itself to make
        your webpage look less{" "}
        <a
          href="https://google.com/"
          target="_blank"
          className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
          rel="noreferrer noopener"
        >
          Javscrtipt Cet
        </a>{" "}
      </p>
    </div>
  );
}

export default Intro;
