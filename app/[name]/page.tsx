"use client";

import { DataType } from "@/types";
import axios from "axios";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";

const Country = () => {
  const [data, setData] = useState<DataType[]>();
  const router = useRouter();
  const params = useParams();

  const country = data?.find(
    (item) =>
      item.name.toLowerCase().replace(/\s+/g, "") ===
      params.name.replace("%C3%A5", "å")
  );

  useEffect(() => {
    axios.get("data.json").then((res) => setData(res.data));
  }, []);

  return (
    <section className="container_padding md:mt-28 mt-20 flex flex-col max-sm:items-start">
      <button
        className="flex w-28 justify-center py-1 pr-2 rounded-md items-center gap-2 shadow-md bg-white element_dark_colour"
        onClick={router.back}
      >
        <BsArrowLeft />
        Back
      </button>

      <div className="flex flex-col sm:flex-row sm:gap-24 gap-10 mt-20 items-center">
        <div className="relative sm:flex-1 h-80 max-sm:w-full max-sm:h-60">
          <Image
            priority
            src={country ? country.flag : "/"}
            alt="flag"
            fill
            className="object-cover"
          />
        </div>
        <div className="sm:flex-1 mx-auto">
          <h1 className="text-xl font-bold mb-8">{country?.name}</h1>
          <div className="flex flex-col sm:flex-row gap-10 md:gap-24">
            <div className="flex flex-col text-sm leading-loose">
              <span>
                Native Name:{" "}
                <span className="font-thin text-sm opacity-80">
                  {country?.nativeName}
                </span>
              </span>
              <span>
                Population:{" "}
                <span className="font-thin text-sm opacity-80">
                  {country?.population}
                </span>
              </span>
              <span>
                Region:{" "}
                <span className="font-thin text-sm opacity-80">
                  {country?.region}
                </span>
              </span>
              <span>
                Sub Region:{" "}
                <span className="font-thin text-sm opacity-80">
                  {country?.subregion}
                </span>
              </span>
              <span>
                Capital:{" "}
                <span className="font-thin text-sm opacity-80">
                  {country?.capital}
                </span>
              </span>
            </div>

            <div className="flex flex-col leading-loose text-sm">
              <span>
                Top Level Domain:{" "}
                <span className="font-thin text-sm opacity-80">
                  {country?.topLevelDomain}
                </span>
              </span>
              <span>
                Currencies:&nbsp;
                <span className="font-thin text-sm opacity-80">
                  {country?.currencies ? country.currencies[0].code : "NaN"}
                </span>
              </span>
              <span>
                Languages:&nbsp;
                {country?.languages.map((item) => (
                  <span
                    key={item.name}
                    className="font-thin text-sm opacity-80"
                  >
                    {item.name},&nbsp;
                  </span>
                ))}
              </span>
            </div>
          </div>
          <div className="flex mt-12 items-center">
            <span className="text-sm mr-2">Border Countries:</span>
            {country?.borders?.map((border) => (
              <div key={border}>
                <span className="shadow-sm border font-thin opacity-80 dark:border-transparent rounded-sm px-4 py-1 mr-2 element_dark_colour text-xs">
                  {border}
                </span>
              </div>
            ))}
            {!country?.borders && <span className="text-sm opacity-80">No border countries</span>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Country;
