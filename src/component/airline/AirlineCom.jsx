import React, { useEffect, useState } from "react";
import { users } from "../../data/users";
import AirlineCard from "../cards/AirlineCard";
import Pagination from "../teams/Pagination";
import axios from "axios";

function AirlineCom({ airlines }) {
  // const [airlines, setAirlines] = useState([]);

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
