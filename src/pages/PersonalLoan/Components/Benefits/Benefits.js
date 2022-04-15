import React from 'react'

export default function Benefits(props) {

    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1 fnt-sty-nunito">BENEFITS</h2>
                            <h1 className="title-font sm:text-4xl text-3xl mb-10 font-bold text-indigo-600 fnt-sty-nunito">BENEFITS OF PERSONAL LOAN</h1>
                            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">This is an unsecured loan, which means you do not need to provide a collateral to borrow. Banks and financial institutions can offer this loan at a lower interest rate, if you have a good credit score.</p>
                    </div>
                    <div className="flex flex-wrap -m-4 sm:mx-24">
                        <div className="xl:w-1/2 md:w-1/2 p-4">
                            <div className="bg-gray-100 p-6 rounded-lg">
                                <img className="h-40 rounded w-full object-cover object-center mb-6" src="/img/Personal-Loan/restriction.png" alt="content" />
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">LIMITATION</h3>
                                <h2 className="text-lg text-gray-900 font-bold title-font mb-4">No limitation on end use</h2>
                                <p className="leading-relaxed text-base">The first and the most important benefit of personal loan is that unlike home loan it can be used for any purpose. There are no limitations on the end use of the personal loan. You have any urgent requirement of funds; personal loan can be one of the easiest ways to get cash.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/2 md:w-1/2 p-4">
                            <div className="bg-gray-100 p-6 rounded-lg">
                                <img className="h-40 rounded w-full object-cover object-center mb-6" src="/img/Personal-Loan/stopwatch.png" alt="content" />
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">QUICK</h3>
                                <h2 className="text-lg text-gray-900 font-bold title-font mb-4">Quick disbursal</h2>
                                <p className="leading-relaxed text-base">If you meet the eligibility criteria and have a good credit score, you can get personal loan in 72 hours time. Infact some of the banks provide the facility of online approval of personal loans for existing customers.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/2 md:w-1/2 p-4">
                            <div className="bg-gray-100 p-6 rounded-lg">
                                <img className="h-40 rounded w-full object-cover object-center mb-6" src="/img/Personal-Loan/flexibility.png" alt="content" />
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Flexibility</h3>
                                <h2 className="text-lg text-gray-900 font-bold title-font mb-4">Flexibility to choose the tenure</h2>
                                <p className="leading-relaxed text-base">The tenure of the loan goes up to 7 years therefore you have the flexibility to choose a tenure which suits you best. Longer tenure means lower EMI and vice versa. Therefore you can decide you can decide tenure after calculating the EMI. Use our EMI Calculator to calculate the EMI.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/2 md:w-1/2 p-4">
                            <div className="bg-gray-100 p-6 rounded-lg">
                                <img className="h-40 rounded w-full object-cover object-center mb-6" src="/img/Personal-Loan/tax-calculate.png" alt="content" />
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">TAX</h3>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Tax benefit</h2>
                                <p className="leading-relaxed text-base">If you use the personal loan for the construction, renovation of house or making down payment for the house, you can avail the tax deduction of up to Rs 2 lakh under Section 24B for the interest part in a financial year. But remember that you will have to provide enough documents to prove that the money has been utilized for that purpose only.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
