import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Divider } from "@material-ui/core";
import { withRouter } from 'react-router-dom';

const Footer = (props) => {

  const goTo = (route) => {
    props.history.push(route);
  }
  return (
    <React.Fragment>
      <footer className="bg-gray-900 text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
              <img
                className="h-8 w-auto sm:h-14"
                src="/img/DCS-Brand-Logo-Black.png"
                alt=""
              />
              {/* <span style={{ fontFamily: 'Luckiest Guy' }} className="ml-3 text-xl tracking-wider"><span style={{ fontFamily: 'Luckiest Guy' }} className="text-white tracking-wider">DCS<br /><span className="text-xs text-gray-500 font-bold">Computer Institute</span></span></span> */}
            </a>
            <p className="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-200 tracking-widest text-sm mb-3">Links</h2>
              <nav className="list-none mb-10">
                <li onClick={() => { goTo('/') }}>
                  <a className="text-gray-600 hover:text-gray-200 font-semibold cursor-pointer">Home</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-200 font-semibold cursor-pointer">Academics</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-200 font-semibold cursor-pointer">Our Professionals</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-200 font-semibold cursor-pointer">Testimonials</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-200 tracking-widest text-sm mb-3">Section</h2>
              <nav className="list-none mb-10">
                <li onClick={() => { goTo('/terms-and-conditions') }}>
                  <a className="text-gray-600 hover:text-gray-200 font-semibold cursor-pointer">Terms and Condition</a>
                </li>
                <li onClick={() => { goTo('/privacy-policy') }}>
                  <a className="text-gray-600 hover:text-gray-200 font-semibold cursor-pointer">Privacy Policy</a>
                </li>
                <li onClick={() => { goTo('/contact') }}>
                  <a className="text-gray-600 hover:text-gray-200 font-semibold cursor-pointer">Contact</a>
                </li>
              </nav>
            </div>
            {/* <div className="lg:w-1/2 md:w-1/2 w-full px-4">
              <p className="text-sm mt-2 text-gray-200 mb-4 w-full">Download the app form.</p>
              <div className="flex flex-row">
                <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
                    <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                  </svg>
                  <span className="ml-4 flex items-start flex-col leading-none">
                    <span className="text-xs text-gray-600 mb-1">GET IT ON</span>
                    <span className="title-font font-medium">Google Play</span>
                  </span>
                </button>
                <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 305 305">
                    <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                    <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                  </svg>
                  <span className="ml-4 flex items-start flex-col leading-none">
                    <span className="text-xs text-gray-600 mb-1">Download on the</span>
                    <span className="title-font font-medium">App Store</span>
                  </span>
                </button>
              </div>
            </div> */}
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-bold items-center md:justify-start justify-center">
              <img
                className="h-8 w-auto sm:h-14"
                src="/img/DCS-Brand-Logo-White.png"
                alt=""
              />
              {/* <span style={{ fontFamily: 'Luckiest Guy' }} className="ml-3 text-xl tracking-wider"><span style={{ fontFamily: 'Luckiest Guy' }} className="text-gray-600 tracking-wider">SkillTech</span></span> */}
            </a>
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2022 SkillTech —
              <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@team.candidleads@gmail.com</a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a className="text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default withRouter(Footer);
