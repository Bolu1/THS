/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unknown-property */
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  ICreateAppointment,
  IProvider,
  IProviderInformation,
} from "../../Interface/provider.interface";
import Header from "../../components/home/Header";
import Body from "../../components/appointment/Body";
import Loader from "../../components/utils/Loader";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Provider: NextPage = () => {
  const [providerId, setProviderId] = useState(0);
  const [provider, setProvider] = React.useState<IProviderInformation>();
  const [loading, setLoading] = useState<boolean>(true);
  const [isSubmitLoading, setIsSubmitLoading] = useState<boolean>(false);

  const router = useRouter();

  const fetch = async (id) => {
    const { data } = await axios.get(`/api/providers/availability/${id}`);
    console.log(data?.data[0]);
    setProvider(data?.data[0]);
    setLoading(false);
  };

  const submitHandler = async () => {
    try {
      setIsSubmitLoading(true);
      const payload: ICreateAppointment = {
        provider_id: provider.provider_id,
        duration: "30 mins", //hardcoded duration for all appointments
        reminder_email: "aleshpelumi@getMaxListeners.com",
        timestamp: provider.timestamp,
        availability_id: provider.id,
      };
      await axios.post(`/api/appointments/new`, payload);

      toast.success("Appointment created");
      setTimeout(() => router.push("/"), 2000);
      setIsSubmitLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    if (router.isReady) {
      const id = router.query.id as string;
      if (!id) return;
      setProviderId(parseInt(id));
      fetch(id);
    }
  }, [router.isReady]);

  return (
    <div className="w-full">
      <Header />
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        closeOnClick
      />
      <div
        onClick={() => router.push("/")}
        className="flex text-customgreen  px-12 mt-[2rem] cursor-pointer"
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
        <p className="font-semibold">Go back</p>
      </div>
      {!loading ? (
        <Body
          providers={provider}
          submitHandler={submitHandler}
          isSubmitLoading={isSubmitLoading}
        />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default dynamic(() => Promise.resolve(Provider), { ssr: false });
