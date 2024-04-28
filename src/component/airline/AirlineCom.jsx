import React, { useEffect, useState } from "react";
import { users } from "../../data/users";
import AirlineCard from "../cards/AirlineCard";
import Pagination from "../teams/Pagination";
import axios from "axios";

function AirlineCom({ airlines, query }) {
  // const [airlines, setAirlines] = useState([]);

  const filertAirlines = airlines.filter((e) =>
    e.name.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div className="row">
      {filertAirlines?.map((airline) => (
        <AirlineCard airline={airline} key={airline.id} />
      ))}
      {/* <Pagination className={"crancy-pagination__v3"} /> */}
    </div>
  );
}

export default AirlineCom;
