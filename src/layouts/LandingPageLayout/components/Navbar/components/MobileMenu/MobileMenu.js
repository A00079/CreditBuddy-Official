import React, { useEffect, useState } from 'react'

export default function Mobilemenu(props) {
    const [showmobileMenu, setMobileMenu] = useState(false);

    const handleMobileMenu = () => {
        setMobileMenu(!showmobileMenu);
    }

    useEffect(() =>{
        console.log('sjjj',props.mbmenu);
        setMobileMenu(props.mbmenu);
    },[props.mbmenu]);
    return (
        <React.Fragment>
            {
                showmobileMenu ?
                    <div
                        key='mobile-menu'
                        className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right block md:hidden"
                    >
                        <div
                            style={{ overflow: "scroll", height: "40rem" }}
                            className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white"
                        >
                            <div className="pt-5 pb-6 px-5 border-b-2 border-gray-200 border-dashed">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <img
                                            className="h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                            alt="Workflow"
                                        />
                                    </div>
                                    <div className="-mr-2">
                                        <button
                                            onClick={() => handleMobileMenu()}
                                            type="button"
                                            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <svg
                                                className="h-6 w-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <h4
                                        className="text-md p-2 pl-0 mb-2 text-left font-semibold text-gray-400 uppercase pt-1"
                                    >
                                        Loansaa <p className='text-gray-700'>{showmobileMenu}</p>
                                    </h4>
                                    <div className="flex flex-wrap -m-2">
                                        <div className="w-40">
                                            <div className="p-0">
                                                <div className="h-full flex items-center p-2 rounded-lg">
                                                    <img
                                                        alt="team"
                                                        className="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                                        src="https://dummyimage.com/80x80"
                                                    />
                                                    <div className="flex-grow">
                                                        <h2 className="text-gray-900 title-font text-sm font-bold">
                                                            Home Loan
                        </h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-40">
                                            <div className="p-0">
                                                <div className="h-full flex items-center p-2 rounded-lg">
                                                    <img
                                                        alt="team"
                                                        className="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                                        src="https://dummyimage.com/80x80"
                                                    />
                                                    <div className="flex-grow">
                                                        <h2 className="text-gray-900 title-font text-sm font-bold">
                                                            Personal Loan
                        </h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-40">
                                            <div className="p-0">
                                                <div className="h-full flex items-center p-2 rounded-lg">
                                                    <img
                                                        alt="team"
                                                        className="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                                        src="https://dummyimage.com/80x80"
                                                    />
                                                    <div className="flex-grow">
                                                        <h2 className="text-gray-900 title-font text-sm font-bold">
                                                            Used Car Loan
                        </h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-40">
                                            <div className="p-0">
                                                <div className="h-full flex items-center p-2 rounded-lg">
                                                    <img
                                                        alt="team"
                                                        className="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                                        src="https://dummyimage.com/80x80"
                                                    />
                                                    <div className="flex-grow">
                                                        <h2 className="text-gray-900 title-font text-sm font-bold">
                                                            Car Loan
                        </h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-40">
                                            <div className="p-0">
                                                <div className="h-full flex items-center p-2 rounded-lg">
                                                    <img
                                                        alt="team"
                                                        className="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                                        src="https://dummyimage.com/80x80"
                                                    />
                                                    <div className="flex-grow">
                                                        <h2 className="text-gray-900 title-font text-sm font-bold">
                                                            Educational Loan
                        </h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-2 pb-6 px-5 border-b-2 border-gray-200 border-dashed">
                                <div className="mt-2">
                                    <h4
                                        className="text-md p-2 pl-0 mb-2 text-left font-semibold text-gray-400 uppercase pt-1"
                                    >
                                        Investment
              </h4>
                                    <div className="flex flex-wrap -m-2">
                                        <div className="w-40">
                                            <div className="p-0">
                                                <div className="h-full flex items-center p-2 rounded-lg">
                                                    <img
                                                        alt="team"
                                                        className="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                                        src="https://dummyimage.com/80x80"
                                                    />
                                                    <div className="flex-grow">
                                                        <h2 className="text-gray-900 title-font text-sm font-bold">
                                                            Demat Account
                        </h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-40">
                                            <div className="p-0">
                                                <div className="h-full flex items-center p-2 rounded-lg">
                                                    <img
                                                        alt="team"
                                                        className="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                                        src="https://dummyimage.com/80x80"
                                                    />
                                                    <div className="flex-grow">
                                                        <h2 className="text-gray-900 title-font text-sm font-bold">
                                                            Saving Account
                        </h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-40">
                                            <div className="p-0">
                                                <div className="h-full flex items-center p-2 rounded-lg">
                                                    <img
                                                        alt="team"
                                                        className="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                                        src="https://dummyimage.com/80x80"
                                                    />
                                                    <div className="flex-grow">
                                                        <h2 className="text-gray-900 title-font text-sm font-bold">
                                                            Mutual Funds
                        </h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-40">
                                            <div className="p-0">
                                                <div className="h-full flex items-center p-2 rounded-lg">
                                                    <img
                                                        alt="team"
                                                        className="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                                        src="https://dummyimage.com/80x80"
                                                    />
                                                    <div className="flex-grow">
                                                        <h2 className="text-gray-900 title-font text-sm font-bold">
                                                            Fixed Deposit
                        </h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-2 pb-6 px-5 border-b-2 border-gray-200 border-dashed">
                                <div className="mt-2">
                                    <h4
                                        className="text-md p-2 pl-0 mb-2 text-left font-semibold text-gray-400 uppercase pt-1"
                                    >
                                        Learn & Resources
              </h4>
                                    <div className="flex flex-wrap -m-2">
                                        <div className="w-40">
                                            <div className="p-0">
                                                <div className="h-full flex items-center p-2 rounded-lg">
                                                    <img
                                                        alt="team"
                                                        className="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                                        src="https://dummyimage.com/80x80"
                                                    />
                                                    <div className="flex-grow">
                                                        <h2 className="text-gray-900 title-font text-sm font-bold">
                                                            Demat Account
                        </h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-40">
                                            <div className="p-0">
                                                <div className="h-full flex items-center p-2 rounded-lg">
                                                    <img
                                                        alt="team"
                                                        className="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                                        src="https://dummyimage.com/80x80"
                                                    />
                                                    <div className="flex-grow">
                                                        <h2 className="text-gray-900 title-font text-sm font-bold">
                                                            Saving Account
                        </h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-40">
                                            <div className="p-0">
                                                <div className="h-full flex items-center p-2 rounded-lg">
                                                    <img
                                                        alt="team"
                                                        className="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                                        src="https://dummyimage.com/80x80"
                                                    />
                                                    <div className="flex-grow">
                                                        <h2 className="text-gray-900 title-font text-sm font-bold">
                                                            Mutual Funds
                        </h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-40">
                                            <div className="p-0">
                                                <div className="h-full flex items-center p-2 rounded-lg">
                                                    <img
                                                        alt="team"
                                                        className="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                                        src="https://dummyimage.com/80x80"
                                                    />
                                                    <div className="flex-grow">
                                                        <h2 className="text-gray-900 title-font text-sm font-bold">
                                                            Fixed Deposit
                        </h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-40">
                                            <div className="p-0">
                                                <div className="h-full flex items-center p-2 rounded-lg">
                                                    <img
                                                        alt="team"
                                                        className="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                                        src="https://dummyimage.com/80x80"
                                                    />
                                                    <div className="flex-grow">
                                                        <h2 className="text-gray-900 title-font text-sm font-bold">
                                                            Demat Account
                        </h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="py-3 px-5 space-y-2">
                                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                    <a
                                        href="#"
                                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                                    >
                                        <div className="flex flex-row">
                                            <svg
                                                className="w-6 h-6 mr-1 text-indigo-800"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                            <p className="text-gray-900 title-font text-sm font-bold">
                                                Help Center
                  </p>
                                        </div>
                                    </a>
                                </div>
                                {/* <div>
                      <a
                        href="#"
                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                      >
                        Sign up
              </a>
                      <p className="mt-2 text-center text-base font-medium text-gray-500">
                        Existing customer?
                <a href="#" className="text-indigo-600 hover:text-indigo-500">
                          Sign in
                </a>
                      </p>
                    </div> */}
                            </div>
                        </div>
                    </div> : null
            }
        </React.Fragment>
    )
}
