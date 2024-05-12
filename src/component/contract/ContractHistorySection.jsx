import React, { useState, useEffect } from "react";
import SelectInput from "../form/SelectInput";
import orders from "../../data/orders";
import calendarIcon from "../../assets/img/calendar-icon.svg";
import SelectBox from "../form/SelectBox";
import Pikaday from "../pikaday";
import axios from "axios";
import moment from "moment";
import ContractOrder from "../cards/ContractOrder";
import { useParams } from "react-router-dom";

const ContractHistorySection = ({ className, id }) => {
  const [page, setPage] = useState(1);
  const [show, setShow] = useState(4);
  const [query, setQuery] = useState("");
  const [queryStatus, setQueryStatus] = useState("");
  const [filter, setFilter] = useState(null);
  const [filterManifest, setFilterManifest] = useState([]);
  const [tDate, setTDate] = useState(null);
  const [histories, setHistories] = useState([]);

  const { id: pId } = useParams();

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

  const getHistories = async () => {
    const { data } = await axios.get(
      `${baseurl}/Transaction/get-shareholdersharing-by-Id?ShareholderId=${pId}`
    );

    if (data.success) {
      console.log(data.data);
      setHistories(data.data);
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

  useEffect(() => {
    const filtering = moment(tDate, "ddd MMM DD YYYY HH:mm:ss [GMT]Z").format(
      "YYYY-MM-DD"
    );
    if (filterManifest.length > 0) {
      const filterByDate = filterManifest.filter((item) =>
        moment(filtering).isSame(moment(item.dateCreated).format("YYYY-MM-DD"))
      );
      setFilterManifest(filterByDate);
      console.log(filterByDate);
      console.log(tDate);
      console.log(filtering);
    } else {
      const filterByDate = manifests.filter((item) =>
        moment(filtering).isSame(moment(item.dateCreated).format("YYYY-MM-DD"))
      );
      setFilterManifest(filterByDate);
      console.log(filterByDate);
      console.log(tDate);
      console.log(filtering);
    }
    // console.log(filtering);
  }, [tDate]);

  const handleChange = (value) => {
    if (value.toLowerCase() === "All Airline".toLowerCase()) {
      setQuery("");
    } else {
      setQuery(value);
    }
  };

  useEffect(() => {
    getHistories();
  }, []);
  return (
    <div
      className={`w-full ${className ? className : "crancy-table"} mg-top-30`}
    >
      <div className="tab-content w-full" id="myTabContent">
        <div
          className="tab-pane fade show active w-full"
          id="table_1"
          role="tabpanel"
          aria-labelledby="table_1"
        >
          {/* <!-- crancy Table --> */}
          <div className="w-full overflow-x">
            <table
              id="crancy-table__main"
              className="crancy-table__main crancy-table__main-v1  overflow-x-scroll"
            >
              {/* <!-- crancy Table Head --> */}
              <thead className="py-5">
                <tr className="bg-[#F1F1F1] px-4 py-2">
                  <th className="py-3 px-4 min-w-38">Name</th>
                  <th className="py-3 px-4 min-w-38">Amount</th>
                  <th className="py-3 px-4 min-w-38">Date</th>
                </tr>
              </thead>
              {/* <!-- crancy Table Body --> */}
              <tbody className="">
                {histories?.map((history, index) => {
                  const current = page * show;
                  const previous = current - show;
                  if (
                    previous > 0 &&
                    index + 1 > previous &&
                    index + 1 <= current
                  ) {
                    return <ContractOrder order={history} key={history.id} />;
                  } else if (page == 1) {
                    return (
                      index < page * show && (
                        <ContractOrder order={history} key={history.id} />
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
};

export default ContractHistorySection;
