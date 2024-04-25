import React, { useState, useEffect } from "react";
import Layout from "../../../component/home-two/Layout";
import BreadCrumb from "../../../component/home-two/BreadCrumb";
import Wrapper from "../../../component/teams/Wrapper";
import AddNewMember from "../../../component/form/AddNewMember";
import BodyWrapper from "../../../component/teams/BodyWrapper";
import Pagination from "../../../component/teams/Pagination";
import useMenu from "../../../hooks/useMenu";
import axios from "axios";
import { useParams } from "react-router-dom";
import BeneficiaryCard from "../../../component/cards/BeneficiaryCard";
import AddNewBeneficiary from "../../../component/form/AddNewBeneficiary";

function Beneficiary() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const { id } = useParams();
  const [benefiaries, setBeneficiaries] = useState([]);
  useMenu();
  const getBeneficiaries = async () => {
    const { data } = await axios.get(
      `${baseUrl}/Shareholder/get-benefiary-by-shareholdeId?ShareholderId=${id}`
    );

    if (data.success) {
      console.log(data.data);
      setBeneficiaries(data.data);
    }
  };

  useEffect(() => {
    getBeneficiaries();
  }, []);
  return (
    <>
      {/* <Layout> */}
      {/* <BreadCrumb title="Shareholders" link="/contracts" />
      <Wrapper> */}
      {/* <h3 className="crancy-teams__title mg-btm-20">Our Team</h3> */}
      <AddNewBeneficiary />
      <BodyWrapper>
        {benefiaries?.map((profile) => (
          <BeneficiaryCard profile={profile} key={profile.id} />
        ))}
      </BodyWrapper>
      {/* <Pagination />
      </Wrapper> */}
      {/* </Layout> */}
    </>
  );
}

export default Beneficiary;
