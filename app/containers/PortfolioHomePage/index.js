/*
 * PortfolioHomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import { Helmet } from 'react-helmet';


export default function PortfolioHomePage() {
  return (
    <div>
      <Helmet>
        <title>AlexanderTheGrape</title>
      </Helmet>
    </div>
  )
}
