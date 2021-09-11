import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../components/Navbar";
import MenScreen from "../pages/MenScreen";
import SearchScreen from "../pages/SearchScreen";
import WomenScreen from "../pages/WomenScreen";

const AppRouter = () => {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/men" component={MenScreen}></Route>
        <Route exact path="/women" component={WomenScreen}></Route>
        <Route exact path="/search" component={SearchScreen}></Route>

        {/* <Redirect to="/men" /> */}
      </Switch>
    </>
  );
};

export default AppRouter;