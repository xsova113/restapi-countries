import { useRouter } from "next/navigation";
import { HiMagnifyingGlass } from "react-icons/hi2";

interface SearchCountriesProps {
  setInputValue: (value: string) => void;
  inputValue: string;
}

const SearchCountries = ({
  setInputValue,
  inputValue,
}: SearchCountriesProps) => {
  const router = useRouter();

  const handleClick = (key: string) => {
    if (key === "Enter") {
      const params = new URLSearchParams(window.location.search);

      if (inputValue) {
        params.set("country", inputValue);
      } else {
        params.delete("country");
      }

      const newPathname = window.location.pathname + "?" + params.toString();
      router.push(newPathname);
    }
  };
  return (
    <div className="element_dark_colour bg-white px-7 rounded-lg w-full md:w-1/3 flex items-center shadow-md">
      <HiMagnifyingGlass size={20} className="mr-4" />
      <input
        type="text"
        className="w-full h-max py-4 outline-none element_dark_colour text-sm"
        placeholder="Search for a country..."
        onChange={(e) => setInputValue(e.currentTarget.value)}
        onKeyDown={(e) => handleClick(e.key)}
      />
    </div>
  );
};

export default SearchCountries;
