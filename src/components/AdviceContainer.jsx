import { useEffect, useState } from "react";
import { advice } from "../services/ApiCall";
import patternDividerDk from "/src/assets/pattern-divider-desktop.svg";
import patternDividerMb from "/src/assets/pattern-divider-mobile.svg"

export const AdviceContainer = () => {
  const [fetchData, setFetchData] = useState([]);

  const fetchAPI = async () => {
    setFetchData(await advice());
  };

  useEffect(() => {
    fetchAPI()

  }, []);

  console.log(fetchData);

  return (
    <div className="bg-[#323a49] flex flex-col items-center w-2/3  max-lg:h-1/3 h-auto rounded-lg p-[1rem]">
      <p className="text-[#52ffa8]">ADVICE # {fetchData?.slip?.id} </p>
      <h1 className="text-white font-extrabold mt-6">"{fetchData?.slip?.advice}"</h1>
      <div>
        <img className="mt-6 w-auto max-lg:hidden" src={patternDividerDk} alt="mobile divider" />
        <img className="mt-6 w-auto lg:hidden" src={patternDividerMb} alt="mobile divider" />
      </div>

      <button className="-mb-10 mt-8" onClick={fetchAPI}>
        <div className="bg-[#52ffa8] hover:shadow-[0px_0px_2rem_0px_#52ffa8] flex flex-center rounded-full p-3">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
              fill="#202733"
            />
          </svg>
        </div>
      </button>
    </div>
  );
};
