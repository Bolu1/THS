import axios from "axios";
import React, { useState, useEffect } from "react";
import { timeStampToDate, timeToTime } from "../../utils/helpers";
import { useRouter } from "next/router";

function TimeSlot({
  id,
  rowRef,
  handleClick,
}: {
  id: number;
  rowRef: React.MutableRefObject<any>;
  handleClick: (string) => void;
}) {
  const [timeSlots, setTimeSlots] = useState([]);

  const fetchTimeSlots = async () => {
    const { data } = await axios.get(`/api/providers/${id}`);
    console.log(data.data);
    setTimeSlots(data.data);
    return data.data;
  };

  const router = useRouter();

  useEffect(() => {
    fetchTimeSlots();
  }, []);

  return (
    <div className="w-full flex gap-x-[30px] items-center">
      <div
        ref={rowRef}
        className="flex mt-2 overflow-y-scroll scroll w-[80%] gap-x-[20px] "
      >
        {timeSlots.map((time, index) => {
          return (
            <div
              key={time.id}
              onClick={() => router.push(`/provider/${time.id}`)}
              className="rounded-full px-[12px] text-customgreen min-w-[190px] justify-center flex gap-x-[4px] py-[8px] border cursor-pointer"
            >
              <span className="font-medium">
                {timeStampToDate(time.timestamp)},
              </span>
              <span>{timeToTime(time.timestamp)}</span>
            </div>
          );
        })}
      </div>
      <div className="flex gap-x-[10px] ">
        <button
          onClick={() => handleClick("left")}
          className="w-[44px] h-[44px] flex rounded-full justify-center items-center border border-gray-200"
        >
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
        </button>
        <button
          onClick={() => handleClick("right")}
          className="w-[44px] h-[44px] flex justify-center items-center rounded-full border border-gray-200"
        >
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
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default TimeSlot;
