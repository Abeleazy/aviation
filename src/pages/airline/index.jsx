import React, { useState, useEffect } from "react";
import Layout from "../../component/home-two/Layout";
import BreadCrumb from "../../component/home-two/BreadCrumb";
import Wrapper from "../../component/user/Wrapper";
import SearchBar from "../../component/user/SearchBar";
import UsersCom from "../../component/user/UsersCom";
import Sidebar3 from "../../component/user/Sidebar3";
import useMenu from "../../hooks/useMenu";
import AirlineCom from "../../component/airline/AirlineCom";
import axios from "axios";

function Airline() {
  const [airlines, setAirlines] = useState([]);
  // const [query, setQuery] = useState("");
  useMenu();

  const getAirlines = async () => {
    const { data } = await axios.get(
      "https://testaviationmedicals.azurewebsites.net/api/airline/get-airline"
    );
    if (data.success) {
      console.log(data.data);
      setAirlines(data.data);
    }
  };

  // const handleChange = (event) => {
  //   const query = event?.target?.value?.toLowerCase();
  //   console.log(query);
  //   const filteredAirlines = airlines.filter((airline) =>
  //     airline?.airlineName?.toLowerCase().includes(query)
  //   );
  //   console.log("filter", filteredAirlines);
  //   setAirlines(filteredAirlines);
  // };

  useEffect(() => {
    getAirlines();
  }, []);

  return (
    <Layout>
      <BreadCrumb title="Airlines" link="/airlines" />
      <Wrapper>
        <div className="col-lg-12 col-12">
          <SearchBar />
          <AirlineCom airlines={airlines} />
        </div>
        {/* <Sidebar3 /> */}
      </Wrapper>
    </Layout>
  );
}

export default Airline;
