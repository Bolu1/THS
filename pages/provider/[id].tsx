/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unknown-property */
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { IProvider } from "../../Interface/provider.interface";
import Header from "../../components/home/Header";
import Body from "../../components/appointment/Body";
import Loader from "../../components/utils/Loader";
import { useRouter } from "next/router";

const Provider: NextPage = () => {

  const [providers, setProviders] = React.useState<Array<IProvider>>([])
  const [loading, setLoading] = useState<boolean>(true)

  const router = useRouter();

  const fetch = async()=>{

    const {data} = await axios.get("/api/providers/get");
    console.log(data.data)
    setProviders(data.data);
    setLoading(false)
  }

  useEffect(() => {
      fetch()
  }, []);

  return (
    <div className="w-full">
        <Header />
        <div 
        onClick={()=>router.push("/")}
        className="flex text-customgreen  px-12 mt-[2rem] cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          <p className="font-semibold">Go Back</p>

        </div>
        {
          !loading?
          <Body providers={providers}/>
          :
          <Loader/>
        }
    </div>
  );
};

export default dynamic(() => Promise.resolve(Provider), { ssr: false });
