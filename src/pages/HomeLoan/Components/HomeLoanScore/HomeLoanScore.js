import React from 'react'

export default function Creditscore(props) {
    return (
        <React.Fragment>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-0 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h2 className="text-xs text-indigo-500 tracking-widest text-left font-medium title-font mb-1">BENEFITS HOME LOAN</h2>
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-left text-indigo-600">Benefits of Taking a Home Loan</h1>
                        <p className="lg:w-full leading-relaxed text-left text-base">This type of home loan provides financing for purchasing the plot of land where you would like to construct a house and for the construction, both within a single loan.</p>
                    </div>
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 lg:w-1/2 md:w-1/2 w-full ">
                            <div className="h-full flex items-center shadow-xl border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16  object-cover object-center flex-shrink-0  mr-4" src="/img/Home-Loan/tax-calculate.png" />
                                <div className="flex-grow">
                                    <h2 className="text-gray-700 title-font font-bold text-lg">Tax benefits</h2>
                                    <p className="text-gray-500">The foremost benefit of a home loan is the income tax deduction you can claim on the interest and principal repayments. You can claim up to Rs.1.5 lakh on principal repayments u/s 80C, up to Rs.2 lakh on interest repayments u/s 24B, up to Rs.2 lakh on interest repayment in special circumstances u/s 80EE and 80EEA, and up to Rs.1.5 lakh on stamp duty expenses u/s 80C.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/2 md:w-1/2 w-full">
                            <div className="h-full flex items-center shadow-xl border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16  object-cover object-center flex-shrink-0  mr-4" src="/img/Home-Loan/cost.png" />
                                <div className="flex-grow">
                                    <h2 className="text-gray-700 title-font font-bold text-lg">Lower interest rate</h2>
                                    <p className="text-gray-500">The home loan interest rate is much lower as compared to any other loan types available. If you come across a cash crunch, you may get a top-up on the existing home loan at a lower interest rate than a personal loan to solve the issue.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/2 md:w-1/2 w-full">
                            <div className="h-full flex items-center shadow-xl border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16  object-cover object-center flex-shrink-0  mr-4" src="/img/Home-Loan/property-insurance.png" />
                                <div className="flex-grow">
                                    <h2 className="text-gray-700 title-font font-bold text-lg">Due diligence of property</h2>
                                    <p className="text-gray-500">When you go through a bank to purchase a house, the bank will conduct thorough checks on the property from the legal perspective and check if all the documents produced are valid.

                                        This due diligence check from the bank’s end will reduce the risk of you being scammed. If the bank approves the property, that means you and your house are safe</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/2 md:w-1/2 w-full">
                            <div className="h-full flex items-center shadow-xl border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16  object-cover object-center flex-shrink-0  mr-4" src="/img/Home-Loan/cash-payment.png" />
                                <div className="flex-grow">
                                    <h2 className="text-gray-700 title-font font-bold text-lg">Long repayment tenure</h2>
                                    <p className="text-gray-500">Unlike any other loans, home loans come with longer repayment tenure, as much as 25-30 years. This is owing to the significant loan amount one will have to borrow to purchase a house.

                                        Spreading the loan amount and interest applicable over a longer tenure will reduce the monthly EMIs reducing the borrower’s burden.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
