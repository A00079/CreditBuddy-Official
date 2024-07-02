import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPageLayout from "./layouts/LandingPageLayout";

import LandingPage from "./pages/LandingPage";
import CreditCard from "./pages/CreditCard";
import PersonalLoan from "./pages/PersonalLoan";
import HomeLoan from "./pages/HomeLoan";
import DematAccount from "./pages/DematAccount";
import SavingAccount from "./pages/SavingAccount";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ContactUs from "./pages/ContactUs";
import SpecialOffersCampaigns from "./pages/SpecialOffersCampaigns";
import SpecialOffers from "./pages/SpecialOffers";
import CampaignCustomer from "./pages/CampaignCustomer";

import { WithLayoutRoute } from "./routers";

function Routes() {
  return (
    <Router>
      <Switch>
        <WithLayoutRoute
          exact
          path="/"
          layout={LandingPageLayout}
          component={LandingPage}
        />
        <WithLayoutRoute
          exact
          path="/credit-card"
          layout={LandingPageLayout}
          component={CreditCard}
        />
        <WithLayoutRoute
          exact
          path="/personal-loan"
          layout={LandingPageLayout}
          component={PersonalLoan}
        />
        <WithLayoutRoute
          exact
          path="/home-loan"
          layout={LandingPageLayout}
          component={HomeLoan}
        />
        <WithLayoutRoute
          exact
          path="/demat-account"
          layout={LandingPageLayout}
          component={DematAccount}
        />
        <WithLayoutRoute
          exact
          path="/saving-account"
          layout={LandingPageLayout}
          component={SavingAccount}
        />
        <WithLayoutRoute
          exact
          path="/sign-in"
          layout={LandingPageLayout}
          component={SignIn}
        />
        <WithLayoutRoute
          exact
          path="/sign-up"
          layout={LandingPageLayout}
          component={SignUp}
        />
        <WithLayoutRoute
          exact
          path="/contact-us"
          layout={LandingPageLayout}
          component={ContactUs}
        />
        <WithLayoutRoute
          exact
          path="/special-campaign-offers"
          layout={LandingPageLayout}
          component={SpecialOffersCampaigns}
        />
        <WithLayoutRoute
          exact
          path="/special-offers"
          layout={LandingPageLayout}
          component={SpecialOffers}
        />
        <WithLayoutRoute
          exact
          path="/customer"
          layout={LandingPageLayout}
          component={CampaignCustomer}
        />
      </Switch>
    </Router>
  );
}

export default Routes;
