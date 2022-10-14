import React from "react";

export default function Filter({ getSearchValue, getRegionValue }) {
  const regions = [
    {
      label: "Filter by region",
      value: "",
    },
    {
      label: "Africa",
      value: "Africa",
    },
    {
      label: "Americas",
      value: "Americas",
    },
    {
      label: "Asia",
      value: "Asia",
    },
    {
      label: "Europe",
      value: "Europe",
    },
    {
      label: "Oceania",
      value: "Oceania",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between py-8 px-12 bg-slate-300 dark:bg-slate-700 text-slate-800  dark:text-white ">
      <form>
        <input
          className="rounded-md shadow-lg py-2 px-4 w-full md:w-auto  mb-8 md:mb-0 bg-slate-200 dark:bg-slate-600"
          type="search"
          placeholder="Search for a country"
          onChange={(e) => getSearchValue(e.target.value)}
        />
      </form>

      <div className="rounded-md shadow-lg py-2 px-4  bg-slate-200 dark:bg-slate-600">
        <select
          className="w-fit  bg-slate-200 dark:bg-slate-600"
          name="select"
          id="select"
          onChange={(e) => getRegionValue(e.target.value)}
        >
          {regions.map((region) => (
            <option
              key={region.label}
              value={region.value}
              className=" bg-slate-200 dark:bg-slate-600"
            >
              {region.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
