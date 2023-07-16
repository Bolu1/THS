import React from "react";
import { IProvider } from "../../Interface/provider.interface";
import { useRouter } from "next/router";

function ProviderCard({data}: {data:IProvider}) {

  const router = useRouter();

  return (
    <div>
                <div className="p-4 py-4 relative rounded-lg group  space-x-6 bg-white bg-opacity-50 shadow-md ">
          <div className="flex p-4 gap-x-3 ">
            <img
              src={data.photo}
              alt="art cover"
              loading="lazy"
              className="h-16 w-16 object-cover object-top rounded-full"
            />
            <div className=" pl-0 ">
              <div className="">
                <div className="space-y ">
                  <h4 className="text-2xl font-semibold text-cyan-900">
                    {data.name}
                  </h4>
                  <h4 className="text- font-semibold text-cyan-900">
                    {data.expertise}
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <p className="text-customgreen">
            {data.information}
          </p>

          <div className="mt-4">
              <p className=" text-customgreen font-semibold">
                Next Available slots
              </p>

              <div className="flex mt-2">
                  <div onClick={()=> router.push(`/provider/${data.id}`)} className="rounded-full p-4 border cursor-pointer">
                      <p className="text-customgreen"><span className="font-medium">Today</span>, 19:20PM</p>
                  </div>
              </div>

              <p className="mt-4 text-green-600">Check full profile and availability</p>
          </div>
          {data.appointment_type == "Virtual visit only"?
          <div className=" bg-green-100 absolute top-0 right-0 rounded-tr-lg px-9 py-1 text-green-600 font-bold">Virtual visit only</div>
          :
          <div className=" bg-blue-100 absolute top-0 right-0 rounded-tr-lg px-9 py-1 text-blue-600 font-bold">In-person visit only</div>
        }
        </div>
    </div>
  );
}

export default ProviderCard;