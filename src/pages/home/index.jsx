import React, { useEffect } from "react";
import ProgressCom from "../../component/home/ProgressCom";
import SalesCharts from "../../component/home/SalesCharts";
import AnalyticsConversions from "../../component/home/AnalyticsConversions";
import ActivitySection from "../../component/home/ActivitySection";
import Sidebar from "../../component/home/Sidebar";
import Layout from "../../component/home/Layout";
import BodyWrapper from "../../component/home/BodyWrapper";
import useMenu from "../../hooks/useMenu";
import AirlineActivitySection from "../../component/airline/AirlineActivitySection";

function Home() {
  useMenu();
  return (
    <Layout>
      <BodyWrapper>
        <ProgressCom />
        <SalesCharts />
        {/* <AnalyticsConversions /> */}
        <AirlineActivitySection />
      </BodyWrapper>
      <Sidebar />
    </Layout>
  );
}

export default Home;
