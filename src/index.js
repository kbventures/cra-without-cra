// Entry Point

import React from 'react'
import ReactDOM from 'react-dom'


// console.log('My First Web App');

// Will Work Without Babel
// ReactDOM.render(
//     'Hello from index.js',
//     document.querySelector(
//       '#fromjs'
//     )
//   );


// Will Only Work With Babel Module
ReactDOM.render(
  <h1>Hello from js</h1>,
  document.querySelector(
    '#fromjs'
  )
);
