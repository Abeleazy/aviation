import React from "react";
import BreadCrumb from "../../component/home-two/BreadCrumb";
import Layout from "../../component/home-two/Layout";
import ActivitySection from "../../component/home/ActivitySection";
import InnerWrapper from "../../component/home-three/InnerWrapper";
import AnalyticsConversions from "../../component/home/AnalyticsConversions";
import useMenu from "../../hooks/useMenu";
import Sidebar from "../../component/home/Sidebar";
import AirlineActivitySection from "../../component/airline/AirlineActivitySection";

function Manifest() {
  useMenu();
  return (
    <Layout>
      <BreadCrumb title="Manifest" link="" />
      <div className="w-full">
        <InnerWrapper>
          {/* <AnalyticsConversions title="Market History" /> */}
          <AirlineActivitySection />
        </InnerWrapper>
        <Sidebar />
      </div>
    </Layout>
  );
}

export default Manifest;
