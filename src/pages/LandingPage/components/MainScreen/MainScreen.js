/* This example requires Tailwind CSS v2.0+ */
import React from 'react'
import { Link } from 'react-router-dom';

export default function MainScreen() {
    return (
        <React.Fragment>
            <section className="text-gray-600 body-font pb-24">
                <div className="container mx-auto flex px-5 py-2 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img
                            className="object-cover object-center rounded"
                            src="./img/LandingScreen/home-page-illustration.png"
                            alt="home-icon"
                        />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-5 sm:mb-12 font-bold fnt-sty-nunito text-gray-900">We Offer You
                            <br className="lg:inline-block" /><span className='text-indigo-600'>The best Finance Analysis</span>
                        </h1>
                        {/* <p className="mb-8 fnt-sty-nunito text-sm text-gray-600">Your Personal Finance investment.</p> */}
                        <div className="grid grid-cols-12 sm:grid-cols-10 gap-2 w-full">
                            <div className="cursor-pointer col-span-6 sm:col-span-2 flex flex-col py-3 rounded-md w-full h-full">
                                <Link to='/credit-card'>
                                    <div className="cursor-pointer col-span-6 sm:col-span-2 flex flex-col py-3  bg-white shadow-lg border border-gray-300 rounded-md w-full h-full hover:shadow-2xl hover:border-yellow-300 hover:bg-yellow-50">
                                        <div className='contebt-img'>
                                            <img src='./img/Credit-Card/credit-card.png' className='mx-auto h-16 w-16 object-fit object-center' />
                                        </div>
                                        <div className='content-label'>
                                            <p className='text-gray-600 font-bold text-sm text-center'>Credit Card</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="cursor-pointer col-span-6 sm:col-span-2 flex flex-col py-3 rounded-md w-full h-full">
                                <Link to='/personal-loan'>
                                    <div className="cursor-pointer col-span-6 sm:col-span-2 flex flex-col py-3  bg-white shadow-lg border border-gray-300 rounded-md w-full h-full hover:shadow-2xl hover:border-yellow-300 hover:bg-yellow-50">
                                        <div className='contebt-img'>
                                            <img src='./img/Personal-Loan/personalloan.png' className='mx-auto h-16 w-16 object-fit object-center' />
                                        </div>
                                        <div className='content-label'>
                                            <p className='text-gray-600 font-bold text-sm text-center'>Personal Loan</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="cursor-pointer col-span-6 sm:col-span-2 flex flex-col py-3 rounded-md w-full h-full">
                                <Link to='/home-loan'>
                                    <div className="cursor-pointer col-span-6 sm:col-span-2 flex flex-col py-3  bg-white shadow-lg border border-gray-300 rounded-md w-full h-full hover:shadow-2xl hover:border-yellow-300 hover:bg-yellow-50">
                                        <div className='contebt-img'>
                                            <img src='./img/Home-Loan/home-loan.png' className='mx-auto h-16 w-16 object-fit object-center' />
                                        </div>
                                        <div className='content-label'>
                                            <p className='text-gray-600 font-bold text-sm text-center'>Home Loan</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="cursor-pointer col-span-6 sm:col-span-2 flex flex-col py-3 rounded-md w-full h-full">
                                <Link to='/demat-account'>
                                    <div className="cursor-pointer col-span-6 sm:col-span-2 flex flex-col py-3  bg-white shadow-lg border border-gray-300 rounded-md w-full h-full hover:shadow-2xl hover:border-yellow-300 hover:bg-yellow-50">
                                        <div className='contebt-img'>
                                            <img src='./img/Demat-Account/demat-acct.png' className='mx-auto h-16 w-16 object-fit object-center' />
                                        </div>
                                        <div className='content-label'>
                                            <p className='text-gray-600 font-bold text-sm text-center'>Demat Account</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="cursor-pointer col-span-6 sm:col-span-2 flex flex-col py-3 rounded-md w-full h-full">
                                <Link to='/saving-account'>
                                    <div className="cursor-pointer col-span-6 sm:col-span-2 flex flex-col py-3  bg-white shadow-lg border border-gray-300 rounded-md w-full h-full hover:shadow-2xl hover:border-yellow-300 hover:bg-yellow-50">
                                        <div className='contebt-img'>
                                            <img src='./img/Saving-Account/savings.png' className='mx-auto h-16 w-16 object-fit object-center' />
                                        </div>
                                        <div className='content-label'>
                                            <p className='text-gray-600 font-bold text-sm text-center'>Saving Account</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
