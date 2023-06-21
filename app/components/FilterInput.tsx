"use client";

import { DataType } from "@/types";
import { Menu, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { Fragment } from "react";
import { BiChevronDown } from "react-icons/bi";
import { set } from "sanity";

const FilterInput = ({ data }: { data: DataType[] | undefined }) => {
  const router = useRouter();

  const handleClick = (region: string) => {
    const params = new URLSearchParams(window.location.search);
    if (region) {
      params.set("region", region);
    } else {
      params.delete("region");
    }

    const newPathname = window.location.pathname + "?" + params.toString();
    router.push(newPathname);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-48 justify-between rounded-md element_dark_colour bg-opacity-20 px-5 py-3 text-sm font-medium text-[#111517] dark:text-white shadow-md hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          Filter by Region
          <BiChevronDown
            className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="z-50 absolute max-h-72 overflow-y-scroll right-0 mt-2 w-48 origin-top-right rounded-lg element_dark_colour bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {Array.from(new Set(data?.map((item) => item.region))).map(
            (region) => (
              <div
                key={region}
                className="px-1 py-1 rounded-lg element_dark_colour"
              >
                <Menu.Item
                  as={"div"}
                  className={"text-[#111517] dark:text-white"}
                >
                  {({ active }) => (
                    <button
                      className={`${
                        active && "dark:bg-[#232e38] bg-gray-200"
                      } flex px-5 py-3 rounded-lg w-full transition`}
                      onClick={() => handleClick(region)}
                    >
                      {region}
                    </button>
                  )}
                </Menu.Item>
              </div>
            )
          )}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default FilterInput;
