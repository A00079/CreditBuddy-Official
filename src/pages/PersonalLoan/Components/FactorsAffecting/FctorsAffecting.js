import React from 'react'

export default function Fctorsaffecting(props) {

    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">FACTORS AFFECTING </h2>
                    <h1 className="title-font sm:text-4xl text-3xl mb-10 font-bold text-indigo-600">FACTORS AFFECTING PERSONAL LOAN
                    </h1>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 sm:mx-8">
                        {/* <div className="p-4 md:w-full flex text-left text-indigo-600 font-bold">
                            NOTE:
                        </div> */}
                        <div className="p-4 md:w-full flex">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                            </div>
                            <div className="flex-grow pl-6">
                                <h2 className="text-gray-700 text-lg title-font font-bold mb-2">Income</h2>
                                <p className="leading-relaxed text-base">
                                    Your income is the foremost deciding factor for your personal loan application. The greater your income, the higher your chances of being assigned lower personal loan interest rates. The bank needs to determine how easily you can repay the loan amount. To provide customers with a personal loan, the bank needs to trust them. This can only be possible when their income is above a certain minimum value.

                                </p>
                            </div>
                        </div>
                        <div className="p-4 md:w-full flex">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <circle cx="6" cy="6" r="3"></circle>
                                    <circle cx="6" cy="18" r="3"></circle>
                                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                </svg>
                            </div>
                            <div className="flex-grow pl-6">
                                <h2 className="text-gray-700 text-lg title-font font-bold mb-2">Credit history</h2>
                                <p className="leading-relaxed text-base">Before the loan is approved, a lender will usually evaluate your CIBIL score to understand your credit history. The credit score is a 3-digit numeric rank provided by the Credit Rating Agency to individuals based on their credit repayment history. A good credit score is an indication that you can manage the loan well and repay in time.</p>
                                
                            </div>
                        </div>
                        <div className="p-4 md:w-full flex">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div className="flex-grow pl-6">
                                <h2 className="text-gray-700 text-lg title-font font-bold mb-2">Organisation’s reputation</h2>
                                <p className="leading-relaxed text-base">Individuals working for a renowned organisation are more likely to receive a low interest on personal loans. Banks view employees working in renowned companies to have a fairly stable career and hence believe that they would make regular payments.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
