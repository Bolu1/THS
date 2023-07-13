/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unknown-property */
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const Home: NextPage = () => {


  useEffect(() => {

  }, []);

  return (
    <div>
        Lets goooo
    </div>
  );
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });
