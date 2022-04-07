import React from "react";
import { VscBook } from "react-icons/vsc";
const ResourceCard = () => {
  return (
    <div className="ring-1 p-6  m-6 flex justify-center items-center flex-col ">
      <VscBook className="text-7xl  basis-full" />
      <p className="text-2xl font-bold basis-full text-center">
        Soft Resources
      </p>
    </div>
  );
};

export default ResourceCard;
