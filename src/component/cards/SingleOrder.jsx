import React from "react";
import usdIcon from "../../assets/img/usd-icon.png";
import moment from "moment";
import { truncateWords } from "../../utils/common/common";

function SingleOrder({ order }) {
  const {
    airlineName,
    airlineEmail,
    identity,
    name,
    takeOFF,
    destination,
    amount,
    status,
    policyNo,
    dateCreated,
    isProcessed,
    flightStatus,
  } = order;
  return (
    <tr className="even:bg-[#F9F9F9] hover:bg-[#F9F9F9] w-fit oveflow-scroll">
      <td className="w-64 py-3 px-4">
        <div className="crancy-table__product--id">
          <p className="crany-table__product--number text-primaryColor">
            {policyNo}
          </p>
        </div>
      </td>
      <td className="w-[40rem] py-3 px-4">
        <div className="crancy-table__product">
          {/* <div className="crancy-table__product-img">
            <img src={img} alt="#" />
          </div> */}
          <div className="crancy-table__product-content">
            <h4 className="crancy-table__product-title">{airlineName}</h4>
          </div>
        </div>
      </td>
      <td className="w-[40rem] py-3 px-4">
        <p className="">{moment(dateCreated).format("MMMM Do YYYY")}</p>
      </td>
      <td className="w-64 py-3 px-4">
        <h5 className="crancy-table__inner--title">{name}</h5>
      </td>
      <td className="w-64 py-3 px-4">
        <div className="crancy-table__amount crancy-table__text-two">
          {/* <img src={usdIcon} alt="#" /> */}
          <span className="crancy-table__text">{takeOFF}</span>
        </div>
      </td>
      <td className="w-64 py-3 px-4">
        <h5 className="crancy-table__inner--title">{destination}</h5>
      </td>
      <td className="w-64 py-3 px-4">
        <div
          className={`crancy-table__status ${
            status.toLowerCase() === "pending"
              ? "crancy-table__status--pending"
              : status.toLowerCase() === "cancel"
              ? "crancy-table__status--cancel"
              : ""
          }`}
        >
          {status}
        </div>
      </td>
    </tr>
  );
}

export default SingleOrder;
