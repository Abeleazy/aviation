import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Menu from "../menu";
import Header from "../header";
import { useStore } from "../../utils/store/useStore";
import axios from "axios";
import AddBeneficiaryModal from "./AddBeneficiaryModal";
import AddContractModal from "./AddContractModal";

function Layout({ children }) {
  const [menu, setMenu] = useState(false);
  const { openBeneficiary, openContract } = useStore();
  const toggleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    if (menu) {
      document
        .getElementsByClassName("crancy-adashboard")[0]
        .classList.add("crancy-close");
    } else {
      document
        .getElementsByClassName("crancy-adashboard")[0]
        .classList.remove("crancy-close");
    }
  }, [menu]);

  return (
    <div id="crancy-dark-light" className="relative">
      <div className="crancy-body-area overflow-y">
        <Menu toggleMenu={toggleMenu} menu={menu} />
        <Header toggleMenu={toggleMenu} menu={menu} />
        <Outlet />
      </div>
      {openBeneficiary && <AddBeneficiaryModal />}
      {openContract && <AddContractModal />}
    </div>
  );
}

export default Layout;
