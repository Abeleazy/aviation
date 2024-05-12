import React from "react";
import usdIcon from "../../assets/img/usd-icon.png";
import moment from "moment";
import { truncateWords } from "../../utils/common/common";

function ContractOrder({ order }) {
  const { id, shareHolderName, identity, amount, transactionDate } = order;
  return (
    <tr className="even:bg-[#F9F9F9] hover:bg-[#F9F9F9] w-fit oveflow-scroll">
      {/* <td className="w-64 py-3 px-4">
        <div className="crancy-table__product--id">
          <p className="crany-table__product--number text-primaryColor">
            {policyNo}
          </p>
        </div>
      </td> */}
      <td className="w-[40rem] py-3 px-4">
        <div className="crancy-table__product">
          {/* <div className="crancy-table__product-img">
            <img src={img} alt="#" />
          </div> */}
          <div className="crancy-table__product-content">
            <h4 className="crancy-table__product-title">{shareHolderName}</h4>
          </div>
        </div>
      </td>
      <td className="w-64 py-3 px-4">
        <h5 className="crancy-table__inner--title">{amount}</h5>
      </td>
      <td className="w-[40rem] py-3 px-4">
        <p className="">{moment(transactionDate).format("MMMM Do YYYY")}</p>
      </td>
    </tr>
  );
}

export default ContractOrder;
