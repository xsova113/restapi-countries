"use client";

import { DataType } from "@/types";
import { useEffect, useState } from "react";
import { FilterInput, SearchCountries } from "./";
import axios from "axios";

const UserInput = () => {
  const [data, setData] = useState<DataType[]>();
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    axios.get("data.json").then((res) => setData(res.data));
  }, []);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center max-sm:items-start md:mt-24 mt-20 gap-12 container_padding">
      <SearchCountries
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
      <FilterInput data={data} />
    </div>
  );
};

export default UserInput;
