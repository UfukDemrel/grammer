import React, { useState } from "react";
import stars from "../../stars.svg";
import job from "../../job.svg";

function Unit2() {
  const [unitTwo, setUnitTwo] = useState(false);

  const handleToggle = () => {
    setUnitTwo((prevState) => !prevState);
  };
  return (
    <>
      <div
        onClick={handleToggle}
        className="flex justify-between p-2 gap-2 mt-3 cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <div>
            <img src={stars} alt="alt" />
          </div>
          <div className="block">
            <div className="font-bold text-xl">Unit 2</div>
            <div className="font-medium">Learn jobs and plural nouns</div>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <img src={job} alt="alt" />
        </div>
      </div>
      {unitTwo && (
        <div className="shadow-md p-2 rounded-lg">
          <div className="text-sm text-slate-700 w-11/12">
            Build upon your basic greetings knowledge and dive into more
            advanced phrases. Practice asking about well-being and expressing
            feelings.
          </div>
        </div>
      )}
      <hr />
    </>
  );
}

export default Unit2;
