import { LockClosedIcon } from '@heroicons/react/solid'
import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../lotties/about-us.json';
import firebase from '../../utils/firebase.js';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';

const SignUp = (props) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const [input, setInput] = React.useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    const handleFormSubmit = () => {
        console.log('firebase', firebase);
        try{
            firebase.auth().createUserWithEmailAndPassword(input.email, input.password)
            .then(result => {
                console.log('Registred...', result);
                alert('Registered succesfully...');
                props.history.push('/sign-in');
            }).catch(error => {
                console.log("Errors",error);
            });
        }catch(e){
            console.log('Error --->',e);
            console.log('Error --->', e.message);
            alert(e.message);
        }
        
    }
    return (
        <React.Fragment>
            <div className='flex sm:flex-row flex-col justify-center space-x-60 items-center py-8'>
                <div>
                    <Lottie
                        options={defaultOptions}
                        height={400}
                        width={350}
                    />
                </div>
                <div className="min-h-full flex items-center justify-center py-12 px-4">
                    <div className="max-w-md w-full space-y-6">
                        <div>
                            <img
                                className="h-12 w-auto"
                                src="/img/creditbuddy-logo.png"
                                alt="Workflow"
                            />
                            <h2 className="mt-4 text-left text-2xl font-bold text-indigo-600">Sign Up</h2>
                            <h2 className="mt-1 text-left text-xl font-bold text-gray-600">Find The Best Suited offered</h2>
                            <h2 className="mt-1 text-left text-md font-medium text-gray-500">Free Credit Score For You!</h2>
                        </div>
                        <div className="mt-4 space-y-3">
                            <div className="rounded-md shadow-sm -space-y-px flex flex-row space-x-3 justify-between items-center">
                                <div>
                                    <label htmlFor="firstname" className="sr-only">
                                        First Name
                                    </label>
                                    <input
                                        onChange={handleInputChange}
                                        id="firstname"
                                        name="firstname"
                                        type="firstname"
                                        autoComplete="firstname"
                                        required
                                        className="appearance-none relative block w-full rounded-md px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="First Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastname" className="sr-only">
                                        Last Name
                                    </label>
                                    <input
                                        onChange={handleInputChange}
                                        id="lastname"
                                        name="lastname"
                                        type="lastname"
                                        autoComplete="current-password"
                                        required
                                        className="appearance-none  relative block w-full rounded-md px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>
                            <div className="rounded-md mt-1 shadow-sm -space-y-px flex flex-row space-x-3 justify-between items-center">
                                <div>
                                    <label htmlFor="email" className="sr-only">
                                        Email
                                    </label>
                                    <input
                                        onChange={handleInputChange}

                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="appearance-none relative block w-full rounded-md px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Email"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phoneno" className="sr-only">
                                        Phone Number
                                    </label>
                                    <input
                                        onChange={handleInputChange}
                                        id="phoneno"
                                        name="phoneno"
                                        type="phoneno"
                                        autoComplete="current-password"
                                        required
                                        className="appearance-none  relative block w-full rounded-md px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Phone Number"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    onChange={handleInputChange}
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="password"
                                    required
                                    className="appearance-none relative block w-full rounded-md px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                            <div>
                                <button
                                    onClick={() => handleFormSubmit()}
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                        <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                    </span>
                                    Sign Up
                                </button>
                                <p className='mt-2 text-sm font-bold text-indigo-600'>
                                    <span className='text-gray-600'>Already have an account?</span><Link to='sign-in'> Sign in</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ React.Fragment>
    )
}

export default withRouter(SignUp);
