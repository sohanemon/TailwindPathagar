import React, { useEffect, useState } from "react";
// import "./carousel.css";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import { AiOutlineLine } from "react-icons/ai";
const Carousel = ({ data }) => {
  useEffect(() => {
    setTimeout(() => {
      next();
    }, 5000);
  });
  const [Current, setCurrent] = useState(0);
  const length = data.length;
  if (!Array.isArray(data) || data.length <= 0) return null;
  const next = () => {
    setCurrent(Current === length - 1 ? 0 : Current + 1);
  };
  const prev = () => {
    setCurrent(Current === 0 ? length - 1 : Current - 1);
  };

  return (
    <div className="slider relative flex justify-center items-center overflow-hidden rounded-lg">
      <FaAngleDoubleLeft
        className="larrow absolute top-1/2 left-8 z-10 cursor-pointer text-3xl text-slate-800"
        onClick={prev}
      />
      <FaAngleDoubleRight
        className="rarrow absolute top-1/2 right-8 z-10 cursor-pointer text-3xl text-slate-800"
        onClick={next}
      />
      {data.map((e, i) => (
        <div
          className={
            i === Current
              ? "slide active scale-105 duration-[2s] ease-in rounded-2xl"
              : "slide"
          }
          key={i}
        >
          {i === Current && (
            <img
              src={e.image}
              className="image max-h-96  w-screen object-cover"
              alt=""
            />
          )}
        </div>
      ))}
      <div className="absolute flex bottom-10 z-10 cursor-pointer text-3xl text-slate-80">
        {data.map((e, i) =>
          Current === i ? (
            <GoPrimitiveDot className={`p-1 text-3xl`} />
          ) : (
            <AiOutlineLine className={`p-1 text-3xl`} />
          )
        )}
      </div>
    </div>
  );
};

export default Carousel;
