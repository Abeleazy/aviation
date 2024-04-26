import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";

function TaskCard({ task }) {
  const { id, shareHolderName, identity, amount, transactionDate } = task;
  return (
    <div className="col-xxl-3 col-lg-6 col-md-6 col-12">
      {/* <!-- Single Task --> */}
      <div
        className={`crancy-tasksingle  crancy-color1__opacity--bg mg-top-25`}
      >
        <h4 className="crancy-tasksingle__title">
          <Link to="#">{shareHolderName}</Link>
        </h4>
        <p className="crancy-tasksingle__assign">
          Amount :<span className={"crancy-pcolor"}> {amount}</span>
        </p>
        <p className="crancy-tasksingle__assign">
          Date :
          <span className={"crancy-pcolor"}>
            {" "}
            {moment(transactionDate).format("MMM Do YYYY")}
          </span>
        </p>
        {/* <div
          className={`crancy-tasksingle__label ${
            status === "Done"
              ? "crancy-progress__done"
              : status === "Hold"
              ? "crancy-progress__hold"
              : status === "Cancel"
              ? "crancy-progress__cancel"
              : "crancy-progress__in"
          }`}
        >
          {status === "Progress" ? `Working ${status}` : `Project ${status}`}
        </div>
        <p className="crancy-tasksingle__text">Team Member</p>
        <div className="crancy-tasksingle__group">
          {teamMembers?.map((teamMember, index) => (
            <Link to="#" key={index + "key"}>
              <img src={teamMember} alt="author-img" />
            </Link>
          ))}
        </div> */}
      </div>
      {/* <!-- End Single Task --> */}
    </div>
  );
}

export default TaskCard;
