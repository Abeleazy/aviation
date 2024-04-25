import React, { useState, useEffect } from "react";
import Layout from "../../component/home-two/Layout";
import BreadCrumb from "../../component/home-two/BreadCrumb";
import Wrapper from "../../component/teams/Wrapper";
import AddNewMember from "../../component/form/AddNewMember";
import BodyWrapper from "../../component/teams/BodyWrapper";
import TeamCard from "../../component/cards/TeamCard";
import { teams } from "../../data/teams";
import Pagination from "../../component/teams/Pagination";
import useMenu from "../../hooks/useMenu";
import axios from "axios";

function Teams() {
  const [contracts, setContracts] = useState([]);
  useMenu();
  const getContracts = async () => {
    const { data } = await axios.get(
      "https://testaviationmedicals.azurewebsites.net/api/Shareholder/get-shareholder"
    );

    if (data.success) {
      console.log(data.data);
      setContracts(data.data);
    }
  };

  useEffect(() => {
    getContracts();
  }, []);
  return (
    <Layout>
      <BreadCrumb title="Shareholders" link="/contracts" />
      <Wrapper>
        <h3 className="crancy-teams__title mg-btm-20">Our Team</h3>
        <AddNewMember />
        <BodyWrapper>
          {contracts?.map((profile) => (
            <TeamCard profile={profile} key={profile.id} />
          ))}
        </BodyWrapper>
        <Pagination />
      </Wrapper>
    </Layout>
  );
}

export default Teams;
