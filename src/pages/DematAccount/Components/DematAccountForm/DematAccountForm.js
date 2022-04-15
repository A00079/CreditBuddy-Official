import React, { useState } from 'react'
import Lottie from 'react-lottie';
import animationData from '../../../../lotties/demat-acct.json';
import { withRouter } from "react-router";
import axios from 'axios';
import firebase from '../../../../utils/firebase';

const DematAccountform = (props) => {
    const [input, setInput] = useState({});
    const [isOpenDrop, setIsOpenDrop] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Gender');
    const [isLoading, setIsLoading] = useState(false);

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
        setIsLoading(true);
        if (!!input.firstname && !!input.contact && !!input.lastname && !!input.email && !!input.birthdate && !!input.averageannualincome && !!input.gender) {
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
            console.log('Data ===>', data);
            firebase.child('user_form_demat_account').push(
                data,
                err => {
                    if (err) {
                        setIsLoading(false);
                        alert('Something Went Wrong...');
                    } else {
                        document.getElementById('firstname').value = "";
                        document.getElementById('lastname').value = "";
                        document.getElementById('contact').value = "";
                        document.getElementById('email').value = "";
                        document.getElementById('birthdate').value = "";
                        document.getElementById('averageannualincome').value = "";
                        setSelectedOption('Gender');
                        alert('Details saved successfully');
                        setIsLoading(false);
                    }
                })
        } else {
            setIsLoading(false);
            alert('All fields are mandatory.');
        }
    }
    return (
        <React.Fragment>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto flex flex-wrap items-center">
                    <div className="lg:w-1/2 md:w-1/2 md:pr-16 lg:pr-10 pr-0">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-indigo-600 fnt-sty-nunito fnt-sty-nunito">DEMAT ACCOUNT
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
                        <p className="mb-3 leading-relaxed fnt-sty-nunito">A Demat account is often referred to as a Dematerialized account. In other words, maintaining a Demat Account entail transforming or dematerializing your physical shares into an electronic representation. </p>
                        <p className="mb-3 leading-relaxed fnt-sty-nunito">A demat account is used to store electronic shares and securities of publicly listed firms. You can hold a wide range of investments in a Demat account, including bonds, equity shares, government securities, mutual funds, and exchange traded funds. A Demat account, like a bank account, is either credited or debited when you purchase or sell shares of a company. </p>
                        <p className="mb-3 leading-relaxed fnt-sty-nunito">It not only reduces superfluous paperwork, but it also helps to streamline the share trading process. Two institutions, National Securities Depository Limited (NSDL) and Central Depository Services Limited (CDSL), manage all Demat accounts in India (CDSL).</p>
                    </div>
                    <div className="lg:w-1/2 md:w-1/2 bg-gray-100 rounded-lg px-6 py-6 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 className="text-gray-500 text-lg font-bold title-font mb-1 fnt-sty-nunito">The Demat Account That Suits You!</h2>
                        <h2 className="text-gray-500 text-sm font-bold title-font mb-5 fnt-sty-nunito">Best Demat Account In India</h2>
                        <div className='w-full flex flex-col sm:flex-row justify-between sm:space-x-8'>
                            <div className="relative mb-2 w-full">
                                <label htmlFor="firstname" className="leading-7 text-sm font-semibold text-gray-600 fnt-sty-nunito">First Name</label>
                                <input onChange={handleInputChange} type="text" id="firstname" name="firstname" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-2 w-full">
                                <label htmlFor="lastname" className="leading-7 text-sm font-semibold text-gray-600 fnt-sty-nunito">Last Name</label>
                                <input onChange={handleInputChange} type="text" id="lastname" name="lastname" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className='w-full flex flex-col sm:flex-row justify-between sm:space-x-8'>
                            <div className="relative mb-2 w-full">
                                <label htmlFor="contact" className="leading-7 font-semibold text-sm text-gray-600 fnt-sty-nunito">Contact</label>
                                <input onChange={handleInputChange} type="number" id="contact" name="contact" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-2 w-full">
                                <label htmlFor="email" className="leading-7 font-semibold text-sm text-gray-600 fnt-sty-nunito">Email</label>
                                <input onChange={handleInputChange} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className='w-full flex flex-col sm:flex-row justify-between sm:space-x-8 mb-4'>
                            <div className="relative mb-2 w-full">
                                <label htmlFor="birthdate" className="leading-7 font-semibold text-sm text-gray-600 fnt-sty-nunito">Birth Date</label>
                                <input onChange={handleInputChange} type="date" id="birthdate" name="birthdate" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-2 w-full">
                                <label htmlFor="averageannualincome" className="leading-7 font-semibold text-sm text-gray-600 fnt-sty-nunito">Average Annual Income</label>
                                <input onChange={handleInputChange} type="number" id="averageannualincome" name="averageannualincome" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className='sm:w-1/2 w-full flex flex-col sm:flex-row justify-between sm:space-x-8 mb-4 sm:pr-4'>
                            <div className="relative w-full inline-block text-left">
                                <div>
                                    <button onClick={() => toggleOption('Gender')} type="button" className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-3 py-3 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                        {selectedOption}
                                        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                                <div className={isOpenDrop ? 'block' : 'hidden'}>
                                    <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                        <div className="py-1" role="none">
                                            <p onClick={() => toggleOption('Male')} className="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm fnt-sty-nunito" role="menuitem" tabIndex="-1" id="menu-item-0">Male</p>
                                            <p onClick={() => toggleOption('Female')} className="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm fnt-sty-nunito" role="menuitem" tabIndex="-1" id="menu-item-1">Female</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-42'>
                            <button onClick={() => saveData()} className="text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg fnt-sty-nunito">
                                {
                                    isLoading ?
                                        <svg className="w-5 h-5 text-white animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                                        :
                                        <div>Get Started</div>
                                }
                            </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-3 fnt-sty-nunito">Please make sure you enter correct details.Your details will be verified by us.</p>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default withRouter(DematAccountform);
