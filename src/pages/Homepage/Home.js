import React from "react";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import {
  InfoSection,
  Pricing,
  Subscription,
  TextSection,
} from "../../components";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <Pricing />
      <TextSection />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
      <Subscription />
    </>
  );
};

export default Home;
