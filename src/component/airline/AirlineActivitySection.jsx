import React, { useState, useEffect } from "react";
import SelectInput from "../form/SelectInput";
import SingleOrder from "../cards/SingleOrder";
import orders from "../../data/orders";
import calendarIcon from "../../assets/img/calendar-icon.svg";
import SelectBox from "../form/SelectBox";
import Pikaday from "../pikaday";
import axios from "axios";
import moment from "moment";

function AirlineActivitySection({ className, id }) {
  const [page, setPage] = useState(1);
  const [show, setShow] = useState(4);
  const [query, setQuery] = useState("");
  const [queryStatus, setQueryStatus] = useState("");
  const [filter, setFilter] = useState(null);
  const [filterManifest, setFilterManifest] = useState([]);

  const [airlines, setAirlines] = useState(["All Airline"]);

  const [manifests, setManifests] = useState([]);
  const baseurl = import.meta.env.VITE_BASE_URL;

  // let filterManifest = manifests.filter(
  //   (e) =>
  //     e.airlineName.toLowerCase().includes(query.toLowerCase()) &&
  //     e.status.toLowerCase().includes(queryStatus.toLowerCase())
  // );

  const handleStatusFilter = (value) => {
    if (value.toLowerCase() === "All Transaction".toLowerCase()) {
      setQueryStatus("");
    } else {
      setQueryStatus(value);
    }
  };

  const getAllManifests = async () => {
    const { data } = await axios.get(`${baseurl}/Airline/getallairlinedata`);

    if (data.success) {
      setManifests(data.data);
      setFilterManifest(data.data);
    }
  };

  useEffect(() => {
    console.log(filter);
    const filtering = moment().subtract(filter, "days");
    const filterByDate = manifests.filter((item) =>
      moment(item.dateCreated).isSameOrAfter(filtering)
    );
    setFilterManifest(filterByDate);
    console.log(filterByDate);
  }, [filter]);

  useEffect(() => {
    const filterData = manifests.filter((e) =>
      e.airlineName.toLowerCase().includes(query.toLowerCase())
    );

    setFilterManifest(filterData);
  }, [query]);

  const handleChange = (value) => {
    if (value.toLowerCase() === "All Airline".toLowerCase()) {
      setQuery("");
    } else {
      setQuery(value);
    }
  };

  const getAirlines = async () => {
    const { data } = await axios.get(`${baseurl}/airline/get-airline`);
    if (data.success) {
      for (let i = 0; i < data.data.length; i++) {
        const element = data.data[i].name;
        const newE = airlines;
        newE.push(element);
        setAirlines(newE);
      }
    }
  };

  useEffect(() => {
    getAllManifests();
    getAirlines();
  }, []);
  return (
    <div
      className={`w-full ${className ? className : "crancy-table"} mg-top-30`}
    >
      <div className="crancy-table__heading">
        <h3 className="crancy-table__title mb-0">Recent Activity</h3>
        <SelectInput
          options={[
            { value: 7, key: "Last 7 Days" },
            { value: 15, key: "Last 15 Days" },
            { value: 30, key: "Last Month" },
            { value: 365, key: "Last Year" },
            { value: "", key: "Custom" },
          ]}
          handleChange={setFilter}
        />
      </div>
      <div className="tab-content w-full" id="myTabContent">
        <div
          className="tab-pane fade show active w-full"
          id="table_1"
          role="tabpanel"
          aria-labelledby="table_1"
        >
          {/* <!-- Table Filter --> */}
          <div className="crancy-table-filter mg-btm-20">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                {/* <!-- Single Filter --> */}
                <div className="crancy-table-filter__single crancy-table-filter__location">
                  <label htmlFor="crancy-table-filter__label">Airline</label>
                  <SelectBox
                    datas={airlines}
                    action={handleChange}
                    img={<i className="fa-solid fa-chevron-down"></i>}
                  />
                </div>
                {/* <!-- End Single Filter --> */}
              </div>
              {/* <div className="col-lg-3 col-md-6 col-12"> */}
              {/* <!-- Single Filter --> */}

              {/* <div className="crancy-table-filter__single crancy-table-filter__amount">
                  <label htmlFor="crancy-table-filter__label">Amount</label>
                  <SelectBox
                    datas={["$2,000", "$4,000", "$3,000", "$4,000", "$5,000"]}
                    img={<i className="fa-solid fa-chevron-down"></i>}
                  />
                </div> */}
              {/* <!-- End Single Filter --> */}
              {/* </div> */}
              <div className="col-lg-3 col-md-6 col-12">
                {/* <!-- Single Filter --> */}
                <div className="crancy-table-filter__single crancy-table-filter__trans-date">
                  <label htmlFor="crancy-table-filter__label">
                    Transaction Date
                  </label>
                  <div className="crancy-table-filter__group">
                    <Pikaday />
                    <span className="crancy-table-filter__icon">
                      <img src={calendarIcon} />
                    </span>
                  </div>
                </div>
                {/* <!-- End Single Filter --> */}
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                {/* <!-- Single Filter --> */}
                <div className="crancy-table-filter__single crancy-table-filter__trans">
                  <label htmlFor="crancy-table-filter__label">
                    Transaction Type
                  </label>
                  <SelectBox
                    datas={[
                      "All transaction",
                      "Completed",
                      "Pending",
                      "Successful",
                      "Failed",
                    ]}
                    action={handleStatusFilter}
                    img={<i className="fa-solid fa-chevron-down"></i>}
                  />
                </div>
                {/* <!-- End Single Filter --> */}
              </div>
            </div>
          </div>
          {/* <!-- End Table Filter --> */}

          {/* <!-- crancy Table --> */}
          <div className="w-full overflow-hidden">
            <table
              id="crancy-table__main"
              className="crancy-table__main crancy-table__main-v1 w-screen  overflow-x-scroll"
            >
              {/* <!-- crancy Table Head --> */}
              <thead className="py-5">
                <tr className="bg-[#F1F1F1] px-4 py-2">
                  <th className="py-3 px-4 min-w-38">Policy No</th>
                  <th className="py-3 px-4 min-w-38">Airline</th>
                  <th className="py-3 px-4 min-w-38">Date</th>
                  <th className="py-3 px-4 min-w-38">Customer</th>
                  <th className="py-3 px-4 min-w-38">Take Off</th>
                  <th className="py-3 px-4 min-w-38">Destination</th>
                  <th className="py-3 px-4 min-w-38">Status</th>
                </tr>
              </thead>
              {/* <!-- crancy Table Body --> */}
              <tbody className="">
                {filterManifest?.map((manifest, index) => {
                  const current = page * show;
                  const previous = current - show;
                  if (
                    previous > 0 &&
                    index + 1 > previous &&
                    index + 1 <= current
                  ) {
                    return <SingleOrder order={manifest} key={manifest.id} />;
                  } else if (page == 1) {
                    return (
                      index < page * show && (
                        <SingleOrder order={manifest} key={manifest.id} />
                      )
                    );
                  }
                })}
              </tbody>
              {/* <!-- End crancy Table Body --> */}
            </table>
          </div>
          <div className="crancy-table-bottom">
            <div id="crancy-table__main_filter" className="dataTables_filter">
              <label>
                Search:
                <input
                  type="search"
                  className="form-control form-control-sm"
                  placeholder=""
                  aria-controls="crancy-table__main"
                />
              </label>
            </div>
            <div className="dataTables_length" id="crancy-table__main_length">
              <label>
                Show result:
                <select
                  name="crancy-table__main_length"
                  aria-controls="crancy-table__main"
                  className="form-select form-select-sm"
                  onChange={(e) => setShow(e.target.value)}
                  defaultValue={4}
                >
                  <option value="4">4</option>
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                </select>
              </label>
            </div>
            <div
              className="dataTables_paginate paging_simple_numbers"
              id="crancy-table__main_paginate"
            >
              <ul className="pagination">
                <li
                  className={`paginate_button page-item previous ${
                    page === 1 ? "disabled" : ""
                  }`}
                  id="crancy-table__main_previous"
                  onClick={() => page > 1 && setPage(page - 1)}
                >
                  <a
                    aria-controls="crancy-table__main"
                    data-dt-idx="previous"
                    tabIndex="0"
                    className="page-link"
                  >
                    <i className="fas fa-angle-left"></i>
                  </a>
                </li>
                {Array.from(
                  Array(Math.ceil(filterManifest.length / show)).keys("n")
                ).map((id, index) => (
                  <li
                    className={`paginate_button page-item ${
                      page === index + 1 ? "active" : ""
                    }`}
                    onClick={() => setPage(index + 1)}
                    key={index + "key"}
                  >
                    <a
                      aria-controls="crancy-table__main"
                      data-dt-idx="0"
                      tabIndex="0"
                      className="page-link"
                    >
                      {index + 1}
                    </a>
                  </li>
                ))}
                <li
                  className={`paginate_button page-item next ${
                    page === orders.length % show < 1 ? "disabled" : ""
                  }`}
                  id="crancy-table__main_next"
                  onClick={() =>
                    page < Math.ceil(orders.length / show) && setPage(page + 1)
                  }
                >
                  <a
                    aria-controls="crancy-table__main"
                    data-dt-idx="next"
                    tabIndex="0"
                    className="page-link"
                  >
                    <i className="fas fa-angle-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- End crancy Table --> */}
        </div>
      </div>
    </div>
  );
}

export default AirlineActivitySection;
