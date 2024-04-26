import React, { useState, useEffect } from "react";
import TaskCard from "../../../component/cards/TaskCard";
import { projects } from "../../../data/projects";
import Pagination from "../../../component/teams/Pagination";
import { useParams } from "react-router-dom";
import axios from "axios";

function Projects() {
  const [histories, setHistories] = useState([]);
  const { id } = useParams();
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const getHistories = async () => {
    const { data } = await axios.get(
      `${baseUrl}/Transaction/get-shareholdersharing-by-Id?ShareholderId=${id}`
    );

    if (data.success) {
      console.log(data.data);
      setHistories(data.data);
    }
  };

  useEffect(() => {
    getHistories();
  });
  return (
    <div
      className="tab-pane fade show active"
      id="tab_3"
      role="tabpanel"
      aria-labelledby="nav-home-tab"
    >
      {/* <!-- Task Area --> */}
      <div className="crancy-taskarea mg-top-30">
        <h3 className="crancy-taskarea__title m-0">History</h3>
        <div className="row">
          {histories?.map((history) => (
            <TaskCard task={history} key={history.id} />
          ))}
        </div>

        <Pagination />
      </div>
      {/* <!-- End Task Area --> */}
    </div>
  );
}

export default Projects;
