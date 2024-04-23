import React from "react";
import Layout from "../../component/home-two/Layout";
import BreadCrumb from "../../component/home-two/BreadCrumb";
import Wrapper from "../../component/user/Wrapper";
import SearchBar from "../../component/user/SearchBar";
import UsersCom from "../../component/user/UsersCom";
import Sidebar3 from "../../component/user/Sidebar3";
import useMenu from "../../hooks/useMenu";
import AirlineCom from "../../component/airline/AirlineCom";

function Airline() {
  useMenu();
  return (
    <Layout>
      <BreadCrumb title="Users" link="/user" />
      <Wrapper>
        <div className="col-lg-9 col-12">
          <SearchBar />
          <AirlineCom />
        </div>
        <Sidebar3 />
      </Wrapper>
    </Layout>
  );
}

export default Airline;
