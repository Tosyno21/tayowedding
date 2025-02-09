import React from "react";
import Image from "next/image";
import { hero } from "@/public";

const Home = () => {
  return (
    <div className="overflow-hidden h-[80vh] desktop:h-screen relative">
      <Image src={hero} alt={"hero"} className="object-cover h-screen" />
      <p className="text-white text-h2 absolute top-[50%] right-[50%] translate-x-[50%]">
        #MadeInAAUA
      </p>
    </div>
  );
};

export default Home;
