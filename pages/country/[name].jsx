import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Header } from "../../components";
// import react theme
import { useTheme } from "next-themes";

export default function Name({ countryData } = {}) {
  const { theme, setTheme } = useTheme("light");

  const {
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    languages,
    borders,
  } = countryData;

  return (
    <>
      <Head>
        <title>Rest Countries App</title>
        <meta
          name="description"
          content="Rest Countries App created by next js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header theme={theme} setTheme={setTheme} />
      <div className="h-screen bg-slate-300 dark:bg-slate-700">
        <Link href={"/"}>
          <button className="inline-block text-gray-700 dark:text-gray-300  bg-slate-200 dark:bg-slate-600 py-2 px-4 m-8 rounded-md shadow-lg hover:bg-slate-300 dark:hover:bg-slate-800 duration-300">
            Back To Home
          </button>
        </Link>

        <div className="country_details grid grid-flow-row md:grid-cols-2  gap-6 ml-8">
          <div className="country_details-img">
            <Image
              unoptimized
              width={300}
              height={300}
              src={flags.png}
              alt={name.common}
              className="rounded-md shadow-lg object-cover w-full"
            />
          </div>

          <div className="country_details-info text-gray-700 dark:text-white space-y-6">
            <h2 className=" text-2xl">{name.common}</h2>
            <div className=" grid grid-flow-row md:grid-cols-2 items-start">
              <div className=" space-y-2">
                <h4>
                  Native Name :{" "}
                  <span className="text-gray-700 dark:text-gray-400 font-semibold">
                    {" "}
                    {name.common}
                  </span>
                </h4>
                <h4>
                  Population :
                  <span className="text-gray-700 dark:text-gray-400 font-semibold">
                    {population}
                  </span>
                </h4>
                <h4>
                  Region :
                  <span className="text-gray-700 dark:text-gray-400 font-semibold">
                    {region}
                  </span>
                </h4>
                <h4>
                  Sub Region :
                  <span className="text-gray-700 dark:text-gray-400 font-semibold">
                    {subregion}
                  </span>
                </h4>
                <h4>
                  Capital :
                  <span className="text-gray-700 dark:text-gray-400 font-semibold">
                    {capital}
                  </span>
                </h4>
              </div>

              <div className="space-y-2">
                <h4>
                  Top Label Domain :
                  <span className="text-gray-700 dark:text-gray-400 font-semibold">
                    {" "}
                    {tld}
                  </span>
                </h4>
                {languages && (
                  <h4>
                    Languages :{" "}
                    <span className="text-gray-700 dark:text-gray-400 font-semibold">
                      {Object.values(languages).join("  ")}
                    </span>
                  </h4>
                )}
              </div>
            </div>
            {borders && (
              <div className=" overflow-y-auto">
                <h4 className="mb-4">Border Countries :</h4>
                {borders?.map((country) => (
                  <span
                    key={country}
                    className="font-semibold rounded-lg text-gray-700 dark:text-gray-300  bg-slate-200 dark:bg-slate-600 ml-2 py-2 px-4"
                  >
                    {country}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const countries = await response.json();

  return {
    paths:
      countries.map(
        (country) => `/country/${country.name.common.split(" ")[0]}`
      ) || [],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const response = await fetch(
    "https://restcountries.com/v3.1/name/" + params.name
  );
  const countryData = (await response.json())[0];

  return {
    props: { countryData },
  };
}
