import { LockClosedIcon } from '@heroicons/react/solid'
import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../lotties/about-us.json';
import { Link } from 'react-router-dom';
import firebase from '../../utils/firebase';
import { withRouter } from "react-router";

const SignIn = (props) => {
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
        try {
            firebase.auth().signInWithEmailAndPassword(input.email, input.password)
                .then(result => {
                    localStorage.setItem('operationType',result.operationType);
                    localStorage.setItem('email',result.user.email);
                    localStorage.setItem('uid',result.user.uid);
                    alert('Login succesfully...');
                    props.history.push('/special-offers');
                }).catch(error => {
                    console.log("Error --->", error);
                });
        } catch (e) {
            console.log('Error --->', e.message);
            alert(e.message);
        }

    }
    return (
        <React.Fragment>
            <div className='flex sm:flex-row flex-col justify-center space-x-60 items-center py-10'>
                <div>
                    <Lottie
                        options={defaultOptions}
                        height={350}
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
                            <h2 className="mt-4 text-left text-2xl font-bold text-indigo-600">Sign In</h2>
                            <h2 className="mt-1 text-left text-xl font-bold text-gray-600">Find The Best Suited offered</h2>
                            <h2 className="mt-1 text-left text-md font-medium text-gray-500">Free Credit Score For You!</h2>
                        </div>
                        <div className="mt-4 space-y-6">
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div>
                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        onChange={handleInputChange}
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Email address"
                                    />
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
                                        autoComplete="current-password"
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Password"
                                    />
                                </div>
                            </div>
                            <div>
                                <button
                                    onClick={() => handleFormSubmit()}
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                        <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                    </span>
                                    Sign in
                                </button>
                                <p className='mt-2 text-sm font-bold text-indigo-600 cursor-pointer'>
                                    <span className='text-gray-600 cursor-pointer'>Don't have an account?</span><Link to='sign-up'> Sign Up</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ React.Fragment>
    )
}

export default withRouter(SignIn);