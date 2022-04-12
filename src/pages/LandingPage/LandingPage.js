import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { MainScreen, KeyFeatures, WhatPeopleSay, WhyWe, AboutUs } from './components'
const LandingPage = () => {
  return (
    <React.Fragment>
      <MainScreen />
      <WhyWe />
      <KeyFeatures />
      <AboutUs />
      <WhatPeopleSay />
    </React.Fragment>
  );
};

export default withRouter(LandingPage);
