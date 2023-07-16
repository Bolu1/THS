import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { IProvider } from "../../Interface/provider.interface";
import ProviderInformation from "./ProvderInformation";
import CheckBox from "../home/CheckBox";

const Body = ({ providers }: { providers: Array<IProvider> }) => {
  const [isAcceptedTerms, setIsAcceptedTerms] = useState<boolean>(false);

  return (
    <div className="flex justify-between  px-12 mt-[2rem]">
      <div className="text-customgreen font-bold w-1/2">
        <p className="text-[3rem] mt-[3rem] font-medium">
          Select your doctor and
          <br />
          appointment time.
        </p>
      </div>

      <div className="max-w-[60%] pr-20">
        <div className="space-y-8 ">
          <ProviderInformation
            setIsAcceptedTerms={setIsAcceptedTerms}
            isAcceptedTerms={isAcceptedTerms}
          />
        </div>

        <div className="flex items-center gap-x-2 mt-[2rem]">
        <CheckBox setIsAcceptedTerms={setIsAcceptedTerms} isAcceptedTerms={isAcceptedTerms}/> 
        <p>
          I clarify that i have read and accept the <span className="text-green-600">terms</span> of Temple
        </p>
        </div>

        <div className="flex justify-end mt-[3rem]">
          {isAcceptedTerms ? (
            <button className="px-10 py-3 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-customgreen rounded-full focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              Schedule Appointment
            </button>
          ) : (
            <button
              disabled={true}
              className="px-10 py-3 cursor-not-allowed font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-400 rounded-full focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              Schedule Appointment
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
