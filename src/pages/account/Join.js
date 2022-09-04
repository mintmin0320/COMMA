import React, { useEffect, useRef, useState } from 'react';

import JoinPage from '../../components/account/JoinPage';
import ScrollIndiactor from '../../components/ScrollIndicator';

const Join = () => (
  <React.Fragment>
    <ScrollIndiactor/>
    <JoinPage/>
  </React.Fragment>
);

export default Join;