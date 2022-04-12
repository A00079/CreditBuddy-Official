import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPageLayout from "./layouts/LandingPageLayout";

import LandingPage from "./pages/LandingPage";
import CreditCard from "./pages/CreditCard";
import PersonalLoan from "./pages/PersonalLoan";
import HomeLoan from "./pages/HomeLoan";
import DematAccount from "./pages/DematAccount";
import SavingAccount from "./pages/SavingAccount";


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
      </Switch>
    </Router>
  );
}

export default Routes;
