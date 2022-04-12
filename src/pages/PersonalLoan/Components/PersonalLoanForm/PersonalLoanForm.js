import React, { useState } from 'react'
import Lottie from 'react-lottie';
import animationData from '../../../../lotties/personal-loan.json';
import { withRouter } from "react-router";
import axios from 'axios';

const PersonalLoanform = (props) => {

    const [input, setInput] = useState({});
    const [isOpenDrop, setIsOpenDrop] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Gender');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    const toggleOption = (opVal) => {
        setIsOpenDrop(!isOpenDrop);
        setSelectedOption(opVal);
        setInput({ ...input, ['gender']: opVal });
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const saveData = () => {
        let data =
        {
            "firstName": input.firstname,
            "contact": input.contact,
            "lastName": input.lastname,
            "email": input.email,
            "birthDate": input.birthdate,
            "averageAnnualIncome": input.averageannualincome,
            "gender": input.gender
        }
        console.log('Data ===>',data);
        // axios.post('https://credit.candidleads.com/api/v1/details/adddetail?type=personalloan', data)
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    }
    return (
        <React.Fragment>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto flex flex-wrap items-center">
                    <div className="lg:w-1/2 md:w-1/2 md:pr-16 lg:pr-10 pr-0">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-indigo-600">Personal Loan
                        </h1>
                        <div className='sm:block hidden'>
                            <Lottie
                                options={defaultOptions}
                                height={250}
                                width={450}
                            />
                        </div>
                        <div className='sm:hidden block'>
                            <Lottie
                                options={defaultOptions}
                                height={100}
                                width={200}
                            />
                        </div>
                        <p className="mb-3 leading-relaxed">A personal loan is a loan that does not require collateral or security and is available with little paperwork.</p>
                        <p className="mb-3 leading-relaxed">This loan's cash can be used htmlFor any reasonable financial need. You must repay it in accordance with the terms agreed upon with the bank, just like any other loan.</p>
                        <p className="mb-3 leading-relaxed">Typically, this can range from a few months to a few years in simple equivalent monthly instalments.
                            You can use the funds from a personal loan however you choose - to fund a vacation, buy a gadget, pay htmlFor medical treatment, use htmlFor home renovation, spend on a wedding, finance your children's education, and so on.
                        </p>
                    </div>
                    <div className="lg:w-1/2 md:w-1/2 bg-gray-100 rounded-lg px-6 py-6 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 className="text-gray-500 text-lg font-bold title-font mb-1">The Card That Suits You!</h2>
                        <h2 className="text-gray-500 text-sm font-bold title-font mb-5">Best Credit Card In India</h2>
                        <div className='w-full flex flex-col sm:flex-row justify-between sm:space-x-8'>
                            <div className="relative mb-2 w-full">
                                <label htmlFor="firstname" className="leading-7 text-sm font-semibold text-gray-600">First Name</label>
                                <input onChange={handleInputChange} type="text" id="firstname" name="firstname" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-2 w-full">
                                <label htmlFor="lastname" className="leading-7 text-sm font-semibold text-gray-600">Last Name</label>
                                <input onChange={handleInputChange} type="text" id="lastname" name="lastname" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className='w-full flex flex-col sm:flex-row justify-between sm:space-x-8'>
                            <div className="relative mb-2 w-full">
                                <label htmlFor="contact" className="leading-7 font-semibold text-sm text-gray-600">Contact</label>
                                <input onChange={handleInputChange} type="number" id="contact" name="contact" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-2 w-full">
                                <label htmlFor="email" className="leading-7 font-semibold text-sm text-gray-600">Email</label>
                                <input onChange={handleInputChange} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className='w-full flex flex-col sm:flex-row justify-between sm:space-x-8 mb-4'>
                            <div className="relative mb-2 w-full">
                                <label htmlFor="birthdate" className="leading-7 font-semibold text-sm text-gray-600">Birth Date</label>
                                <input onChange={handleInputChange} type="date" id="birthdate" name="birthdate" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-2 w-full">
                                <label htmlFor="averageannualincome" className="leading-7 font-semibold text-sm text-gray-600">Average Annual Income</label>
                                <input onChange={handleInputChange} type="number" id="averageannualincome" name="averageannualincome" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className='w-full flex flex-col sm:flex-row justify-between sm:space-x-8 mb-4'>
                            <div className="relative w-full inline-block text-left">
                                <div>
                                    <button onClick={() => toggleOption()} type="button" className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-3 py-3 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                        {selectedOption}
                                        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                                <div className={isOpenDrop ? 'block' : 'hidden'}>
                                    <div className="origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                        <div className="py-1" role="none">
                                            <p onClick={() => toggleOption('Male')} className="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Male</p>
                                            <p onClick={() => toggleOption('Female')} className="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Female</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-42'>
                            <button onClick={() => saveData()} className="text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get Started</button>
                        </div>
                        <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default withRouter(PersonalLoanform);
