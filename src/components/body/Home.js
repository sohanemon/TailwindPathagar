import React from "react";
import Carousel from "./Carousel";
import { data } from "./CaroselData";

import Features from "./Features";
import ResourceCard from "./ResourceCard";
const Home = () => {
  return (
    <>
      {/* <Features/> */}
      <Carousel data={data} />
      <br />
      <ResourceCard />
    </>
  );
};

export default Home;
