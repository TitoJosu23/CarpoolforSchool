import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Footer } from "./component/footer";
import "../styles/registration.css";

import { Login } from "./pages/Login.js";
import { Registration } from "./pages/Registration.jsx";
import { Dashboard } from "./pages/Dashboard.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GuardianSchedule } from "./pages/GuardianSchedule.jsx";
import { UserDetails } from "./pages/UserDetails.jsx";
import { SchoolSearch } from "./pages/SchoolSearch.jsx";
import { GuardianSearch } from "./pages/GuardianSearch.jsx";
import injectContext from "./store/appContext";
import { AddAChild } from "./pages/AddAChild.jsx";
import { ViewChildren } from "./pages/ViewChildren.jsx";
import { ViewSchool } from "./pages/ViewSchool.jsx";
import { RequestRide } from "./pages/RequestRide.jsx";
import { ModalGuardianInformation } from "./pages/ModalGuardianInformation.js";
import { PendingRides } from "./pages/PendingRides.jsx";
import { Hidden } from "./pages/Hidden.jsx";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <ToastContainer />
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/registration">
              <Registration />
            </Route>
            <Route exact path="/home">
              <Dashboard />
            </Route>
            <Route exact path="/user/details">
              <UserDetails />
            </Route>
            <Route exact path="/guardian/schedule">
              <GuardianSchedule />
            </Route>
            <Route exact path="/guardian/details">
              <ModalGuardianInformation />
            </Route>
            <Route exact path="/guardian/search">
              <GuardianSearch />
            </Route>
            <Route exact path="/children">
              <ViewChildren />
            </Route>
            <Route exact path="/children/add">
              <AddAChild />
            </Route>
            <Route exact path="/ride">
              <RequestRide />
            </Route>
            <Route exact path="/school/search">
              <SchoolSearch />
            </Route>
            <Route exact path="/school/:id">
              <ViewSchool />
            </Route>
            <Route exact path="/rides/pending">
              <PendingRides />
            </Route>
            <Route exact path="/hidden">
              <Hidden />
            </Route>
            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
