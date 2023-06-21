"use client";

import { DataType } from "@/types";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const AllCountries = () => {
  const [data, setData] = useState<DataType[]>();
  const params = useSearchParams();
  const searchedCountry = params.get("country");
  const searchedRegion = params.get("region");

  const filteredRegions =
    searchedRegion === null
      ? data
      : data?.filter((item) =>
          item.region
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(searchedRegion.toLowerCase().replace(/\s+/g, ""))
        );

  const filteredResults =
    searchedCountry === null
      ? filteredRegions
      : data?.filter((item) =>
          item.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(searchedCountry.toLowerCase().replace(/\s+/g, ""))
        );

  useEffect(() => {
    axios.get("data.json").then((res) => setData(res.data));
  }, []);

  return (
    <div className="grid md:grid-cols-4 mt-4 container_padding gap-16">
      {filteredResults?.map((item) => (
        <Link
          key={item.name}
          className="shadow-md"
          href={`/${item.name.toLowerCase().replace(/\s+/g, "")}`}
        >
          <div className="relative max-w-full h-32">
            <Image
              loading="lazy"
              src={item.flag}
              alt="flag"
              fill
              className="object-cover"
            />
          </div>
          <div className="py-6 px-4 element_dark_colour flex flex-col gap-4">
            <h1 className="font-bold">{item.name}</h1>
            <div className="flex flex-col text-sm gap-1 mb-4">
              <span>
                Population:{" "}
                <span className="opacity-70">{item.population}</span>
              </span>
              <span>
                Region: <span className="opacity-70">{item.region}</span>
              </span>
              <span>
                Capital: <span className="opacity-70">{item.capital}</span>
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AllCountries;
