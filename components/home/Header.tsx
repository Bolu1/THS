/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unknown-property */
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Header: NextPage = () => {
  return (
    <div className="border h-[6rem] flex justify-between items-center px-12">
      <div className="text-customgreen text-lg font-bold">Schedule Appointment</div>

      <div className="flex items-center gap-x-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7 text-gray-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>

        <div className="flex items-center gap-x-2">
          <img
            className="object-cover w-12 h-12 rounded-full"
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100"
            alt="profile"
          />

          <div>
            <h1 className=" font-semibold text-gray-700">Mia John</h1>

            <p className="text-sm text-gray-500 ">miajohn@merakiui.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
