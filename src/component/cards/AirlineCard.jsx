import React from "react";
import toggleIcon from "../../assets/img/toggle-icon.svg";
import { Link } from "react-router-dom";

function AirlineCard({ airline }) {
  const { id, idenity, name, email, phoneNumber, adress, roleId } = airline;
  return (
    <div className="col-xxl-3 col-lg-4 col-md-6 col-12">
      <div className="crancy-single-user mg-top-30">
        <div className="crancy-toggle">
          <Link to={`/airlines/${idenity}`}>
            <img src={toggleIcon} alt="" />
          </Link>
        </div>
        <div className="crancy-single-user__head">
          {/* <img src={img} alt="" /> */}
          <h4 className="crancy-single-user__title">
            {name}
            <span>{adress}</span>
          </h4>
          {/* <p className="crancy-single-user__label">{position}</p> */}
        </div>
        <div className="crancy-single-user__info">
          <ul className="crancy-single-user__list">
            <li>
              Email: <Link to="#">{email}</Link>
            </li>
            <li>
              Phone: <Link to="#">{phoneNumber}</Link>
            </li>
          </ul>
        </div>
        {/* <Link to="/inbox" className="crancy-btn__default">
          Message
        </Link> */}
      </div>
    </div>
  );
}

export default AirlineCard;
