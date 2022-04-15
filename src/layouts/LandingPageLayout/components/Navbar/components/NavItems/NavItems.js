import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Navitems() {

    return (
        <>
            <div className="relative">
                <Link to='/credit-card'>

                    <button
                        className="group rounded-md text-white inline-flex items-center md:text-sm text-base font-medium hover:text-gray-400 focus:outline-none mr-10 focus:text-indigo-500"
                    >
                        <span className="fnt-sty-nunito">Credit Card</span>
                    </button>
                </ Link>
                <button
                    className="loancontainer group rounded-md text-white inline-flex items-center md:text-sm text-base font-medium hover:text-gray-400 focus:outline-none"
                >
                    <span className="fnt-sty-nunito">Loans</span>
                    <svg
                        className="ml-2 h-5 w-5 text-white group-hover:text-gray-500 transition-all duration-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
                <div
                    className="loancontainerhiden z-50 transition-all duration-500 absolute z-10 -ml-4  transform px-2 w-screen max-w-xl sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                >
                    <div
                        className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                    >
                        <div className="relative flex bg-white px-2 py-3">
                            <div
                                className="-m-1 p-1 flex items-between rounded-lg hover:bg-gray-50"
                            >
                                <div className='flex-shrink-0 rounded-lg mt-3'>
                                    <img
                                        src="/img/Home-Loan/home-loan.png"
                                        className="flex-shrink-0 h-10 w-10"
                                    />
                                </div>
                                <Link to='/home-loan'>
                                    <div className="ml-4">
                                        <p className="text-base font-medium text-gray-900 fnt-sty-nunito">
                                            Home Loan
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500 fnt-sty-nunito">
                                            Get a better understanding of where your traffic is
                                            coming from.
                                        </p>
                                    </div>
                                </ Link>
                            </div>
                            <div
                                className="-m-1 p-1 flex items-start rounded-lg hover:bg-gray-50"
                            >
                                <div className='flex-shrink-0  rounded-lg mt-3'>
                                    <img
                                        src="/img/Personal-Loan/personalloan.png"
                                        className="flex-shrink-0 h-10 w-10"
                                    />
                                </div>
                                <Link to='/personal-loan'>

                                    <div className="ml-4">
                                        <p className="text-base font-medium text-gray-900 fnt-sty-nunito">
                                            Personal Loan
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500 fnt-sty-nunito">
                                            Speak directly to your customers in a more meaningful
                                            way.
                                        </p>
                                    </div>
                                </ Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative">
                <button
                    className="loancontainer group rounded-md text-white inline-flex md:text-sm items-center text-base font-medium hover:text-gray-400 focus:outline-none fnt-sty-nunito"
                >
                    <span>Investments</span>
                    <svg
                        className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition-all duration-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
                <div
                    className="loancontainerhiden z-50 absolute z-10 left-1/5 transform -translate-x-1/2 px-2 w-screen max-w-md sm:px-0"
                >
                    <div
                        className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                    >
                        <div
                            className="relative grid gap-8 bg-white px-5 py-6 sm:gap-8 sm:p-8"
                        >
                            <div
                                className="-m-5 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                                <img
                                    src="/img/Demat-Account/demat-acct.png"
                                    className="flex-shrink-0 h-10 w-10 mt-3"
                                />
                                <Link to='/demat-account'>

                                    <div className="ml-4">
                                        <p className="text-base font-medium text-gray-900 fnt-sty-nunito">
                                            Demat Account
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500 fnt-sty-nunito">
                                            Get all of your questions answered in our forums or
                                            contact support.
                                        </p>
                                    </div>
                                </ Link>
                            </div>
                            <div
                                className="-m-5 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                                <img
                                    src="/img/Saving-Account/savings.png"
                                    className="flex-shrink-0 h-10 w-10 mt-3"
                                />
                                <Link to='/saving-account'>

                                    <div className="ml-4">
                                        <p className="text-base font-medium text-gray-900 fnt-sty-nunito">
                                            Savings Account
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500 fnt-sty-nunito">
                                            Learn how to maximize our platform to get the most out
                                            of it.
                                        </p>
                                    </div>
                                </ Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
