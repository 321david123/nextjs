import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Script from 'next/script';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Script async src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=64a6075f43011bbeb7a0db92" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></Script>
    <Script async src='https://ruedatec.com/js/webflow.js' ></Script> */}
    <App />
  </React.StrictMode>
);
