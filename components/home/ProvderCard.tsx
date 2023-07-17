import React, { useEffect, useRef, useState } from "react";
import { IProvider } from "../../Interface/provider.interface";
import { useRouter } from "next/router";
import { time } from "console";
import TimeSlot from "./TimeSlots";
import axios from "axios";

function ProviderCard({ providerData }: { providerData: IProvider }) {

  const rowRef = useRef(null);
  const [isMove, setIsMove] = useState(false);
  const handleClick = (direction: string) => {
    setIsMove(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className=" px-[12px] py-[8px] py-4 relative rounded-lg group  space-x-6 bg-white bg-opacity-50 shadow-md ">
        <div className="flex  px-[12px] py-[8px] gap-x-3 ">
          <img
            src={providerData.photo}
            alt="art cover"
            loading="lazy"
            className="h-16 w-16 object-cover object-top rounded-full"
          />
          <div className=" pl-0 ">
            <div className="">
              <div className="space-y ">
                <h4 className="text-2xl font-semibold text-cyan-900">
                  {providerData.name}
                </h4>
                <h4 className="text- font-semibold text-cyan-900">
                  {providerData.expertise}
                </h4>
              </div>
            </div>
          </div>
        </div>
        <p className="text-customgreen">{providerData.information}</p>

        <div className="mt-4">
          <p className=" text-customgreen font-semibold">
            Next Available slots
          </p>
          <TimeSlot id={providerData.id} rowRef={rowRef} handleClick={handleClick}/>

          <p className="my-6 text-green-600">
            Check full profile and availability
          </p>
        </div>
        {providerData.appointment_type == "Virtual visit only" ? (
          <div className=" bg-green-100 absolute top-0 right-0 rounded-tr-lg px-9 py-1 text-green-600 font-bold">
            Virtual visit only
          </div>
        ) : (
          <div className=" bg-blue-100 absolute top-0 right-0 rounded-tr-lg px-9 py-1 text-blue-600 font-bold">
            In-person visit only
          </div>
        )}
      </div>
    </div>

  );
}

export default ProviderCard;