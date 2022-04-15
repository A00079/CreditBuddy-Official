import React from 'react'

export default function StepsInSavingAccount(props) {

    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 pb-28 mx-auto">
                <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1 fnt-sty-nunito">SAVINGS ACCOUNTS </h2>
                    <h1 className="title-font sm:text-4xl text-3xl mb-10 font-bold text-indigo-600 fnt-sty-nunito">TYPES OF SAVINGS ACCOUNTS
                    </h1>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 sm:mx-8">
                        {/* <div className="p-4 md:w-full flex text-left text-indigo-600 font-bold">
                            NOTE:
                        </div> */}
                        <div className="p-4 md:w-full flex">
                            <div className="w-5 h-5 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-3 h-3" viewBox="0 0 24 24">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                            </div>
                            <div className="flex-grow pl-6">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Regular Savings Account </h2>
                                <p className="leading-relaxed text-base">This is the simplest and most common type of Savings Account. With a regular Savings Account, you will have to maintain a minimum account balance. This account is perfect for your day-to-day banking needs.</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-full flex">
                            <div className="w-5 h-5 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-3 h-3" viewBox="0 0 24 24">
                                    <circle cx="6" cy="6" r="3"></circle>
                                    <circle cx="6" cy="18" r="3"></circle>
                                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                </svg>
                            </div>
                            <div className="flex-grow pl-6">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Zero Balance or Basic Savings Account </h2>
                                <p className="leading-relaxed text-base">This is similar to the regular Savings Account, but unlike that account, you are not required to maintain any minimum balance for this account. It does, however, come with an ATM/Debit Card for your daily transactions.</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-full flex">
                            <div className="w-5 h-5 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-3 h-3" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div className="flex-grow pl-6">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Women’s Savings Account</h2>
                                <p className="leading-relaxed text-base">This is a regular Savings Account customized to fit the requirements of women. A minimum balance is, of course, required. But the account holders get certain benefits for shopping and other transactions.</p>
                                
                            </div>
                        </div>

                        <div className="p-4 md:w-full flex">
                            <div className="w-5 h-5 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-3 h-3" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div className="flex-grow pl-6">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Kids’ Savings Account</h2>
                                <p className="leading-relaxed text-base">This is a Savings Account tailor-made for parents who want to put away a certain sum of money for their children. Also, should the parent decide to allow the child access to the account through the debit card, then this is a good way to inculcate money management skills in childre.</p>
                                
                            </div>
                        </div>

                        <div className="p-4 md:w-full flex">
                            <div className="w-5 h-5 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-3 h-3" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div className="flex-grow pl-6">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Senior Citizens’ Savings Account </h2>
                                <p className="leading-relaxed text-base">Provided solely for senior citizens’ requirements, this type of Savings Account usually comes with health and investment related benefits. Further, account holders get insurance benefits and preferential rates on fixed deposits.</p>
                            </div>
                        </div>

                        <div className="p-4 md:w-full flex">
                            <div className="w-5 h-5 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-3 h-3" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div className="flex-grow pl-6">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Family Savings Account  </h2>
                                <p className="leading-relaxed text-base">Another variant of the regular Savings Account, this type of account allows an entire family to enjoy the benefits from one Savings Account.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
