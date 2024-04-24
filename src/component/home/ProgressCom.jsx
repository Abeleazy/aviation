import React, { useState, useEffect } from "react";
import ProgressCard from "../cards/ProgressCard";
import axios from "axios";

function ProgressCom() {
  const [manifest, setManifest] = useState(0);
  const [newManifest, setNewManifest] = useState(0);
  const [totalRemittance, setTotalRemittance] = useState(0);
  const getAllManifest = async () => {
    const { data } = await axios.get(
      "https://testaviationmedicals.azurewebsites.net/api/Airline/getallairlinedata"
    );

    if (data.success) {
      const newM = data.data.filter((e) => Date(e.dateCreated) === Date.now());
      setManifest(data.data.length);
      console.log(newManifest);
      setNewManifest(newM.length);
    }
  };

  const getTotalRemittance = async () => {
    const { data } = await axios.get(
      "https://testaviationmedicals.azurewebsites.net/api/Airline/totalamount"
    );

    if (data.success) {
      setTotalRemittance(data.data);
    }
  };

  useEffect(() => {
    getAllManifest();
    getTotalRemittance();
  }, []);
  return (
    <div className="row">
      <ProgressCard
        count={manifest.toString()}
        name="Total Manifest"
        isCurrecy={false}
        totalSale={
          newManifest > 0
            ? "+ " + newManifest.toString()
            : newManifest.toString()
        }
        color="#0A82FD"
        progressSettings={{
          value: manifest,
          maxValue: manifest,
          style: {
            strokeLinecap: "round",
            textSize: "18px",
            pathTransitionDuration: 0.5,
            trailColor: "#CEE6FF",
            backgroundColor: "#3e98c7",
          },
        }}
      />
      <ProgressCard
        count={totalRemittance.toString()}
        isCurrecy={true}
        name="Total Remittance"
        totalSale={totalRemittance.toString()}
        color="#EF5DA8"
        progressSettings={{
          value: totalRemittance,
          maxValue: totalRemittance,
          style: {
            trailColor: "#FCDFEE",
          },
        }}
      />
      <ProgressCard
        count="0"
        name="Total Customers"
        isCurrecy={false}
        totalSale="+ 3.5%"
        color="#27AE60"
        progressSettings={{
          value: totalRemittance,
          maxValue: totalRemittance,
          style: {
            trailColor: "#D4EFDF",
          },
        }}
      />
      <ProgressCard
        count="0"
        name="Total Claims"
        isCurrecy={false}
        totalSale="+ 3.5%"
        color="#9B51E0"
        progressSettings={{
          value: 77.5,
          maxValue: 100,
          style: {
            trailColor: "#EBDCF9",
          },
        }}
      />
    </div>
  );
}

export default ProgressCom;
