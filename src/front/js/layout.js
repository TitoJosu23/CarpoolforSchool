import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { GuardianSignIn } from "./pages/GuardianSignIn.js";
import { UserSignup } from "./pages/UserSignup.jsx";
import { SchoolLogin } from "./pages/SchoolLogin";
import { SchoolSignUp } from "./pages/SchoolSignUp.js";
import { GuardianHome } from "./pages/GuardianHome";
import { LandingPage } from "./pages/LandingPage";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/school/create">
              <SchoolSignUp />
            </Route>
            <Route exact path="/school/login/">
              <SchoolLogin />
            </Route>
            <Route exact path="/guardian/login">
              <GuardianSignIn />
            </Route>
            <Route exact path="/user/create">
              <UserSignup />
            </Route>
            <Route exact path="/guardian/home">
              <GuardianHome />
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
