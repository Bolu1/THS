/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unknown-property */
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { IProvider } from "../../Interface/provider.interface";
import ProviderCard from "./ProvderCard";


const Body = ({providers}: {providers:Array<IProvider>}) => {
  return (
    <div className="flex justify-between  px-12 mt-[2rem]">
      <div className="text-customgreen font-bold w-1/2">
        <div className="flex  ">
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

        <p className="text-[3rem] mt-[3rem] font-medium">
          Select your doctor and
          <br />
          appointment time
        </p>
      </div>

      <div className="max-w-[60%] px-12">
        <div className="flex justify-end  items-center gap-x-3 pb-[2rem]">
          <div className="">
            <p className="font-semibold">Date</p>
            <input type="date" className="border rounded-lg p-2" />
          </div>

          <div>
            <p className="font-semibold">Date</p>
            <input type="date" className="border rounded-lg p-2" />
          </div>

          <div>
            <p className="font-semibold">Date</p>
            <input type="date" className="border rounded-lg p-2" />
          </div>
        </div>
      {
        providers.map((item)=>(

            <ProviderCard key={item.id} data={item}/>

))}
      </div>
    </div>
  );
};

export default Body;
