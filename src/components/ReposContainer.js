import React from "react";
import { Route } from "react-router-dom";
import Overview from "./Overview";
import Repos from "./Repos";
import Followers from "./Followers";

const ReposContainer = () => {
  return (
    <div className="reposContainer">
      <Route path="/overview" component={Overview} />
      <Route path="/repos" component={Repos} />
      <Route path="/followers" component={Followers} />
    </div>
  );
};

export default ReposContainer;