import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Countries({ countries, getRemovedCountry }) {
  return (
    <>
      {countries.map((country, index) => {
        const { flags, name, population, region, capital } = country;
        const firstName = name.common.split(" ")[0];
        return (
          <div key={index} className=" grid justify-center ">
            <div className="country__image">
              <Image
                unoptimized
                width={250}
                height={250}
                src={flags.png}
                alt={name.common}
                className="rounded-md shadow-lg object-cover"
              />
            </div>
            <div className="country__ditalse  py-8 px-8 -mt-8  rounded-md shadow-lg bg-slate-200 text-slate-600 dark:bg-slate-600 dark:text-gray-300">
              <h2 className=" text-2xl text-slate-900 dark:text-white">
                {name.common}
              </h2>
              <h4>
                Population : <span>{population}</span>
              </h4>
              <h4>
                Region : <span>{region}</span>
              </h4>
              <h4>
                Capital : <span>{capital}</span>
              </h4>
              <div className=" flex justify-between mt-8">
                <button className="py-2 px-4 rounded-md shadow-lg mr-1 duration-300 capitalize bg-slate-300 dark:bg-slate-800 hover:bg-transparent">
                  <Link href={`/country/${firstName}`}> View Details </Link>
                </button>
                <button
                  className="  py-2 px-4 rounded-md shadow-lg mr-1 duration-300 capitalize bg-slate-300 dark:bg-slate-800 hover:bg-transparent"
                  onClick={() => getRemovedCountry(name)}
                >
                  removed
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
