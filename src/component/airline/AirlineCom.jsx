import React, { useEffect, useState } from "react";
import { users } from "../../data/users";
import AirlineCard from "../cards/AirlineCard";
import Pagination from "../teams/Pagination";
import axios from "axios";

function AirlineCom() {
  const [airlines, setAirlines] = useState([]);
  const getAirlines = async () => {
    const { data } = await axios.get(
      "https://testaviationmedicals.azurewebsites.net/api/airline/get-airline"
    );
    if (data.success) {
      setAirlines(data.data);
    }
  };
  useEffect(() => {
    getAirlines();
  }, []);
  return (
    <div className="row">
      {airlines?.map((airline) => (
        <AirlineCard airline={airline} key={airline.id} />
      ))}
      {/* <Pagination className={"crancy-pagination__v3"} /> */}
    </div>
  );
}

export default AirlineCom;
