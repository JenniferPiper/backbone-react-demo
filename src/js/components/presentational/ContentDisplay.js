'use strict';

import React from 'react';

const ContentDisplay = (props) => (
  <div className='content-display'>
<h1>You submitted:</h1>
<h2>{props.title}</h2>
<p>{props.entered_text}</p>
  </div>
);

export default ContentDisplay;