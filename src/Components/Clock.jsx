import React from "react";

const Clock = ({ time, title }) => {
  return (
    <div className="w-60 h-64 flex justify-center items-center gap-2.5 bg-[linear-gradient(180deg,rgba(245,247,255,0.80)_0%,rgba(214,220,255,0.80)_100%)] p-2.5">
      <div className="flex w-36 h-auto flex-col items-center gap-2">
        <div className=" w-full h-36 justify-center items-center gap-2.5 px-4 py-4">
          <p className="text-clr text-center text-8xl font-semibold leading-normal-">
            {time}
          </p>
        </div>
        <h3 className="text-clr text-center text-lg font-normal leading-normal">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Clock;
