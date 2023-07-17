import React from "react";
import { IProvider, IProviderInformation } from "../../Interface/provider.interface";
import { timeStampToDate, timeStampToDateWithMonth, timeToTime } from "../../utils/helpers";


interface IProps {
  isAcceptedTerms: boolean;
  setIsAcceptedTerms: React.Dispatch<React.SetStateAction<boolean>>;
  data: IProviderInformation
}

function ProviderInformation(props: IProps) {
  return (
    <div>
      <div className="p-4 py-4 relative rounded-lg group  space-x-6  w-[100%] bg-opacity-50 shadow-md ">
        <div className="flex p-4 gap-x-3 ">
          <img
            src={props.data.photo}
            alt="art cover"
            loading="lazy"
            className="h-16 w-16 object-cover object-top rounded-full"
          />
          <div className=" pl-0 ">
            <div className="">
              <div className="space-y ">
                <h4 className="text-2xl font-semibold text-cyan-900">
                  {props.data.name}
                </h4>
                <h4 className="text- font-semibold text-cyan-900">
                  {props.data.expertise}
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-[2rem] mb-[3rem]">
          <div className="w-2/6 space-y-4">
            <div className="flex gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>
              Date:
            </div>

            <div className="flex gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Duration:
            </div>

            <div className="flex gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
              Reminders:
            </div>

            <div className="flex gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                />
              </svg>
              Payment Details:
            </div>
          </div>

          <div className="w-5/6 space-y-4 text-customgreen font-medium">
            <div className="flex gap-x-3">

            {timeStampToDateWithMonth(props.data.timestamp)}. {timeToTime(props.data.timestamp)}
            </div>

            <div className="flex gap-x-3">
              30 Minutes
            </div>

            <div className="flex gap-x-3">
              test@gmail.com <span className="pl-12 text-green-500 ">Change</span>
            </div>

            <div className="flex gap-x-3">
              Mastercard ****2323-Exp 02/25 <span className="pl-12 text-green-500 ">Change</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProviderInformation;
