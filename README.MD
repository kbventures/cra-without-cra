# Setting Up Basic No Creacte React App React Template


## Required installations

install ubuntu   
install git   
install nvm   
install vscode   

## Step By Step Guide From Terminal

### Initial Setup

From Terminal:  
`mkdir new-react-app`  
`cd new-react-app`  
`npm init -y`  
`touch .gitignore`  
`mkdir public`  

.ignore add: node_module

### Install Webpack

`touch webpack.config.js`  
`npm install -save-dev webpack webpack-cli`  


Modify package.json:

`
  "scripts": {
    ...,
    "build": "webpack"
  },
`
  
`
npm run build
`

##### Notice Two Errors:

###### Fix 1:

webpack.config.js:

`
module.exports = {
  mode: 'development',
};
`

###### Fix 2: 

`
mkdir src
touch ./src/index.js
`

This is the main entry point for webpack.

`
npm run build
`

Notice dist folder & ./dist/main.js is created
This is the main bunbled file.


#### Install Webpack server

`
npm i --save-dev webpack-server webpack-dev-server
`


In package.json:

`“start”: “webpack serve”`  
`npm run start`  


You can see the content of main.js here [http://localhost:8080/main.js](http://localhost:8080/main.js)

#### Add HTML Webpack Plugin

`npm install --save-dev html-wepback-plugin`  


Add to webpack.config.js:

`const HtmlWebpackPlugin = require('html-webpack-plugin');`  


This generates and index.html and add bundle.js files.


Add plugin in webpack.config.js


`const HtmlWebpackPlugin = require('html-webpack-plugin');`

`
module.exports = {
    mode: 'development',
    plugins: [
      new HtmlWebpackPlugin({
        template:
          './public/index.html',
      }),
    ],
  };
`    

`
npm run start
`

Notice errors!

Solution: 

`
touch ./public/index.html
`

Add this code to ./public.index.html


`<!DOCTYPE html><html><head><h1>This is the HTML file</h1></head><body></body></html>`


`npm run start`

Open browser in localhost:8080 and check the developer console. Notice this was injected:

`
<script defer src="main.js"></script></head>

`

The webpack plugin added it!!!

Add console.log(“My First Web App”); ./src/index.js


Go to the localhost page, inspect and select Console, and see the output as shown below.
You can see My First Web App

#### Link Javascript with HTML

Showing content of the javascript file on the browser through the HTML file:

Add to ./public/index.html

`
'<div id="fromjs"></div>'
`

Add Code which Interacts With HTML DOM in ./src/index.js:

`
document.querySelector('#fromjs').innerHTML = '<h1>From index.js</h1>';
`

Check result.


### Add react And react-dom

Terminal: 

`npm install --save-dev react react-dom`

Index.js:

`
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  'Hello from index.js',
  document.querySelector(
    '#fromjs'
  )
);
`


