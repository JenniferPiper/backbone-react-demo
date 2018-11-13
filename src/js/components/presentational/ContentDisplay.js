'use strict';

import React from 'react';

const ContentDisplay = (props) => (
  <div className='content-display'>
<h2>{props.heading_text}</h2>
<h3>{props.title}</h3>
<p>{props.entered_text}</p>
  </div>
);

export default ContentDisplay;