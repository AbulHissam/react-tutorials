import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { FormControl, MenuItem, Select } from "@mui/material";
import numeral from "numeral";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Infobox from "./components/Infobox";
import CasesByCountrieTable from "./components/CasesByCountrieTable";
import { sortData, formGraphData } from "./utils/util";
import LineGraph from "./components/LineGraph";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryName, setCountryName] = useState("Worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [type] = useState("cases");
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    // This is to fetch worldwide details
    const fetchCountryInfo = async () => {
      try {
        await fetch("https://disease.sh/v3/covid-19/all")
          .then((response) => response.json())
          .then((data) => {
            setCountryInfo(data);
          });
      } catch (err) {}
    };
    fetchCountryInfo();
  }, []);

  useEffect(() => {
    // This is to fetch list of countries and form table data
    const getCountriesList = async () => {
      try {
        await fetch("https://disease.sh/v3/covid-19/countries")
          .then((response) => response.json())
          .then((data) => {
            const countries = data.map((country) => ({
              name: country.country,
              value: country.countryInfo.iso2,
            }));
            setCountries(countries);
            const sortedData = sortData(data);
            setTableData(sortedData);
          });
      } catch (err) {}
    };
    getCountriesList();
  }, []);

  useEffect(() => {
    // This is to fetch historicla data of individual country
    const worldWideUrl =
      "https://disease.sh/v3/covid-19/historical/all?lastdays=30";
    const countryWideUrl = `https://disease.sh/v3/covid-19/historical/${country}?lastdays=30`;
    const url =
      country && country === "worldwide" ? worldWideUrl : countryWideUrl;
    const getGraphData = async () => {
      try {
        await fetch(url)
          .then((response) => response.json())
          .then((data) => {
            const formedData = formGraphData(data, country);
            setGraphData(formedData);
          });
      } catch (err) {}
    };
    getGraphData();
  }, [country]);

  const onCountryChange = async (event) => {
    // When a value is selected from dropdown
    const countryCode = event.target.value;
    const url =
      countryCode && countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    try {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setCountry(countryCode);
          setCountryInfo(data);
          setCountryName(data["country"]);
        });
    } catch (err) {
      console.log(err);
    }
  };
  //
  return (
    <div className="app container-xl ">
      <div className="mt-3"></div>
      <div className="row gap">
        <div className="col-lg-8 app__left">
          <div className="app__header">
            <h1>COVID-19 TRACKER</h1>
            <FormControl>
              <Select
                variant="outlined"
                value={country}
                onChange={onCountryChange}
              >
                <MenuItem value="worldwide">Worldwide</MenuItem>
                {countries.map((country) => (
                  <MenuItem key={country.name} value={country.value}>
                    {country.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div className="app__infobox">
            <Infobox
              className={"infobox infobox__cases"}
              title="Coronavirus cases"
              cases={numeral(countryInfo.todayCases).format("0 a")}
              total={numeral(countryInfo.cases).format("0.0a")}
            ></Infobox>

            <Infobox
              className={"infobox infobox__recovered"}
              title="Recovered"
              cases={numeral(countryInfo.todayRecovered).format("0 a")}
              total={numeral(countryInfo.recovered).format("0.0a")}
            ></Infobox>

            <Infobox
              className={"infobox infobox__deaths"}
              title="Deaths"
              cases={numeral(countryInfo.todayDeaths).format("0.a")}
              total={numeral(countryInfo.deaths).format("0.0a")}
            ></Infobox>
          </div>
          <Card className="linechart">
            <span className="graph-title">
              <strong>{countryName} cases for past 30 days</strong>
            </span>
            <LineGraph type={type} data={graphData} />
          </Card>
        </div>
        {/* <div className="mt-3"></div> */}
        <div className="col-lg-4 app__right">
          <Card>
            <Card.Body>
              <h3>Covid cases by country</h3>
              <CasesByCountrieTable countries={tableData} />
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
