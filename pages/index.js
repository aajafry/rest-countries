import Head from "next/head";
import React, { useState } from "react";
import { Countries, Filter, Header } from "../components/index";

// import react theme
// import { useTheme } from "next-themes";

// define API URL
const URL = "https://restcountries.com/v3.1/all";

export default function Home({ data }) {
  const [countries, setCountries] = useState(data);
  const [queryCountry, setQueryCountry] = useState("");
  const [queryRegion, setQueryRegion] = useState("");
  const [removedCountry, setRemovedCountry] = useState("");

  // const { theme, setTheme } = useTheme("light");

  const filterCountries = (countries) => {
    const countriesData = countries.filter((country) => {
      if (queryCountry) {
        return country.name.common
          .toLowerCase()
          .includes(queryCountry.toLocaleLowerCase());
      } else if (queryRegion) {
        return country.region
          .toLowerCase()
          .includes(queryRegion.toLocaleLowerCase());
      } else if (removedCountry) {
        return country.name.common !== removedCountry.common;
      } else {
        return country;
      }
    });
    return countriesData;
  };

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

      {/* <Header theme={theme} setTheme={setTheme} /> */}
      

      <Filter
        getSearchValue={setQueryCountry}
        getRegionValue={setQueryRegion}
      />

      <div className=" grid grid-cols-1 md:grid-cols-4 gap-6 justify-center py-16 bg-slate-300 dark:bg-slate-700  ">
        <Countries
          countries={filterCountries(countries)}
          getRemovedCountry={setRemovedCountry}
        />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(URL);
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}
