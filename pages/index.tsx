/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unknown-property */
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { IProvider } from "../Interface/provider.interface";
import Header from "../components/home/Header";
import Body from "../components/home/Body";
import Loader from "../components/utils/Loader";

export default function Home () {

  const [providers, setProviders] = React.useState<Array<IProvider>>([])
  const [loading, setLoading] = useState<boolean>(true)


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
        <>
        {
          !loading?
          <Body providers={providers} data-testid="dateInput"/>
          :
          <Loader/>
        }
        </>
    </div>
  );
};

// export default dynamic(() => Promise.resolve(Home), { ssr: false });
