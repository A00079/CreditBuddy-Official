import React from "react";
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';

const Footer = (props) => {
  const currentYear = new Date().getFullYear();

  return (
    <React.Fragment>
      <footer className="text-gray-600 body-font bg-gray-900">
        <div className="px-0 py-6">
          
          <div
            className="container mx-auto px-5 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col"
          >
            <div
              className="w-64 flex-shrink-0 text-left md:mx-0 md:mx-auto md:text-center md:text-left lg:mx-auto lg:text-center xl:mx-auto xl:text-center"
            >
              <a
                className="flex title-font font-medium items-center md:justify-start justify-start text-gray-900"
              >
                <img
                  className="sm:w-48 w-48"
                  src="/img/LandingScreen/credit-logo.png"
                  alt=""
                />
              </a>
            </div>
            <div
              className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center"
            >
              <div className="lg:w-1/4 md:w-1/2 w-1/2 px-4">
                <nav className="list-none mb-10 cursor-pointer">
                  <Link to='/credit-card'>

                    <li className="mb-2">
                      <p className="text-gray-500 hover:text-gray-300  fnt-sty-nunito">Credit Card</p>
                    </li>
                  </Link>
                  <Link to='/personal-loan'>

                    <li>
                      <p className="text-gray-500 hover:text-gray-300 fnt-sty-nunito">Personal Loan</p>
                    </li>
                  </Link>
                  {/* <li>
                    <a className="text-gray-600 hover:text-gray-300">Third Link</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-300">Fourth Link</a>
                  </li> */}
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-1/2 px-4">
                {/* <h2
                  className="title-font font-medium text-white tracking-widest text-sm mb-3"
                >
                  CATEGORIES
            </h2> */}
                <nav className="list-none mb-10 cursor-pointer">
                  <Link to='/home-loan'>

                    <li>
                      <p className="text-gray-500 hover:text-gray-300 fnt-sty-nunito">Home Loan</p>
                    </li>
                  </Link>
                  <Link to='/demat-account'>

                    <li>
                      <p className="text-gray-500 hover:text-gray-300 fnt-sty-nunito">Demat Account</p>
                    </li>
                  </Link>
                  
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-1/2 px-4">
                {/* <h2
                  className="title-font font-medium text-white tracking-widest text-sm mb-3"
                >
                  CATEGORIES
            </h2> */}
                <nav className="list-none mb-10 cursor-pointer">
                  <Link to='/saving-account'>

                    <li>
                      <p className="text-gray-500 hover:text-gray-300 fnt-sty-nunito">Saving Account</p>
                    </li>
                  </Link>
                 
                </nav>
              </div>
              
            </div>
          </div>
          <div className="hidden md:block lg:block xl:block bg-gray-700 mt-6 p-2">
            <div className="flex justify-around">
              <div className="flex flex-row justify-center items-center">
                {/* <p className="text-gray-400 pl-5">Investors</p> */}
                <p className="text-gray-400 pl-5 fnt-sty-nunito">Privacy Policy</p>
                <p className="text-gray-400 pl-5 fnt-sty-nunito">Terms of Use</p>
                <p className="text-gray-400 pl-5 fnt-sty-nunito">Disclaimer</p>
                <p className="text-gray-400 pl-5 fnt-sty-nunito">Intellectual Policy</p>
                <p className="text-gray-400 pl-5 fnt-sty-nunito">Sitemap</p>
              </div>
              <div className="flex flex-row justify-end">
                <p className="text-gray-400 pl-5">
                  <img
                    src="/img/LandingScreen/facebook.png"
                    className="bg-gray-900 rounded p-2 w-8 h-8"
                  />
                </p>
                <p className="text-gray-400 pl-5">
                  <img
                    src="/img/LandingScreen/whatapp.png"
                    className="bg-gray-900 rounded p-2 w-8 h-8"
                  />
                </p>
                <p className="text-gray-400 pl-5">
                  <img
                    src="/img/LandingScreen/insta.png"
                    className="bg-gray-900 rounded p-2 w-8 h-8"
                  />
                </p>
                <p className="text-gray-400 pl-5">
                  <img
                    src="/img/LandingScreen/twitter.png"
                    className="bg-gray-900 rounded p-2 w-8 h-8"
                  />
                </p>
                <p className="text-gray-400 pl-5">
                  <img
                    src="/img/LandingScreen/linkin.png"
                    className="bg-gray-900 rounded p-2 w-8 h-8"
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="md:hidden lg:hidden xl:hidden">
            <div
              className="flex-grow flex flex-wrap bg-gray-700 mt-6 p-2 md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center"
            >
              <div className="lg:w-1/4 md:w-1/2 w-1/2 px-4 py-1">
                <p className="text-gray-400 pl-5 fnt-sty-nunito">Investors</p>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-1/2 px-4 py-1">
                <p className="text-gray-400 pl-5 fnt-sty-nunito">Privacy Policy</p>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-1/2 px-4 py-1">
                <p className="text-gray-400 pl-5 fnt-sty-nunito">Terms of Use</p>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-1/2 px-4 py-1">
                <p className="text-gray-400 pl-5 fnt-sty-nunito">Disclaimer</p>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-1/2 px-4 py-1">
                <p className="text-gray-400 pl-5 fnt-sty-nunito">Intellectual Policy</p>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-1/2 px-4 py-1">
                <p className="text-gray-400 pl-5 fnt-sty-nunito">Sitemap</p>
              </div>
              <div className="flex flex-row mx-auto mt-5 mb-3">
                <p className="text-gray-400 pl-5">
                  <img
                    src="/img/LandingScreen/facebook.png"
                    className="bg-gray-900 rounded p-2 w-8 h-8"
                  />
                </p>
                <p className="text-gray-400 pl-5">
                  <img
                    src="/img/LandingScreen/whatapp.png"
                    className="bg-gray-900 rounded p-2 w-8 h-8"
                  />
                </p>
                <p className="text-gray-400 pl-5">
                  <img
                    src="/img/LandingScreen/insta.png"
                    className="bg-gray-900 rounded p-2 w-8 h-8"
                  />
                </p>
                <p className="text-gray-400 pl-5">
                  <img
                    src="/img/LandingScreen/twitter.png"
                    className="bg-gray-900 rounded p-2 w-8 h-8"
                  />
                </p>
                <p className="text-gray-400 pl-5">
                  <img
                    src="/img/LandingScreen/linkin.png"
                    className="bg-gray-900 rounded p-2 w-8 h-8"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 border-t-2 border-gray-700">
          <div
            className="container mx-auto py-2 px-10 md:px-24 lg:px-24 xl:px-10 flex flex-wrap flex-col sm:flex-row"
          >
            <small
              className="text-gray-400 text-left md:text-left lg:text-left xl:text-left sm:text-left fnt-sty-nunito"
            >
              Office No.348/349 | 2nd floor | Orchard Corporate Park | ORM Wing B | Royal Palms Estate | Near Film City | Goregaon East | Mumbai | Maharashtra - 400065<br />
              All Rights Reserved. *No. 1 in terms of loan disbursal as per industry
              estimates.
            </small>
            <span
              className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-start md:justify-center lg:justify-center xl:justify-center sm:justify-start"
            >
              <a className="text-gray-500">
                <img src="/img/LandingScreen/india.png" className="w-12 h-12" />
              </a>
              <small className="ml-3 text-gray-200 items-center mt-3 fnt-sty-nunito">
                Made in India
              </small>
            </span>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default withRouter(Footer);
