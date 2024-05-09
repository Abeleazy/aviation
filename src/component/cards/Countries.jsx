import React, { useState, useEffect } from "react";
import SelectInput from "../form/SelectInput";
import afghanistan from "../../assets/img/country-1.png";
import saudiArabia from "../../assets/img/country-5.png";
import bangladesh from "../../assets/img/country-2.png";
import unitedStates from "../../assets/img/country-4.png";
import axios from "axios";

function Countries() {
  const [airlines, setAirline] = useState([]);

  const getAllAirlines = async () => {
    const { data } = await axios.get(
      "https://testaviationmedicals.azurewebsites.net/api/Airline/totalamount-grouped-by-airline"
    );

    if (data.success) {
      setAirline(data.data);
    }
  };

  useEffect(() => {
    getAllAirlines();
  }, []);
  return (
    <div className="flex flex-1 crancy-sidebar__widget last:ml-5 h-full">
      <div className="crancy-sidebar__single w-full h-full">
        {/* <!-- Sidebar Heading --> */}
        <div className="crancy-sidebar__heading">
          <h4 className="crancy-sidebar__title">Airlines</h4>

          <SelectInput
            options={[
              "View All",
              "Last 7 Days",
              "Last 15 Days",
              "Last 30 Days",
              "Last Month",
              "Last Year",
            ]}
          />
        </div>

        {/* <!-- Sidebar Creator Lists --> */}
        <div className="crancy-sidebar__creators">
          <div className="tab-content" id="nav-tabContent">
            {/* <!-- Single Tab --> */}
            <div
              className="tab-pane fade show active"
              id="seller_tab-1"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <ul className="crancy-sidebar__creatorlist">
                {airlines?.map((airline) => (
                  <li>
                    <div className="crancy-sidebar__creator">
                      <img src={afghanistan} alt="#" />
                      <a href="#">
                        <span className="crancy-sidebar__creator-link">
                          {airline.airlineName}
                        </span>
                        <b className="crancy-sidebar__creator-name">
                          <span>&#8358;</span>
                          <span>{airline.totalAmount.toString()}</span>
                        </b>
                      </a>
                    </div>
                  </li>
                ))}
                {/* <li>
                  <div className="crancy-sidebar__creator">
                    <img src={saudiArabia} alt="#" />
                    <a href="#">
                      <span className="crancy-sidebar__creator-link">
                        Saudi Arabia
                      </span>
                      <b className="crancy-sidebar__creator-name">$5.34k</b>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="crancy-sidebar__creator">
                    <img src={bangladesh} alt="#" />
                    <a href="#">
                      <span className="crancy-sidebar__creator-link">
                        Bangladesh
                      </span>
                      <b className="crancy-sidebar__creator-name">$3.34k</b>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="crancy-sidebar__creator">
                    <img src={unitedStates} alt="#" />
                    <a href="#">
                      <span className="crancy-sidebar__creator-link">
                        United States
                      </span>
                      <b className="crancy-sidebar__creator-name">$3.34k</b>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="crancy-sidebar__creator">
                    <img src={saudiArabia} alt="#" />
                    <a href="#">
                      <span className="crancy-sidebar__creator-link">
                        Ireland
                      </span>
                      <b className="crancy-sidebar__creator-name">$8.34k</b>
                    </a>
                  </div>
                </li> */}
              </ul>
            </div>
            {/* <!-- Single Tab --> */}
          </div>
        </div>
        {/* <!-- End Sidebar Creator Lists --> */}
      </div>
    </div>
  );
}

export default Countries;
