import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../../../../lotties/house-loan.json';

export default function Abouthousingfinance(props) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-indigo-600">About Housing Loan
                        </h1>
                        <p className="mb-3 leading-relaxed">A house loan, also known as a home loan, is a quantity of money borrowed from a financial institution or bank to acquire a home. Home loans have an adjustable or fixed interest rate as well as payment terms. </p>
                        <p className="mb-3 leading-relaxed">People typically take out a home loan to either purchase a house/flat or a plot of land for the construction of a house, or to renovate, extend, and repair an existing property </p>
                        <p className="mb-3 leading-relaxed">The property is mortgaged to the lender as security until the loan is repaid. The bank or financial organisation will keep the title or deed to the property until the loan is repaid in full, including interest. </p>
                        <p className="mb-3 leading-relaxed">Home loan interest rates can be fixed or floating, or partly fixed and partly floating, depending on the borrower's demands.
                            Certain tax incentives are also available on your home loan under Section 80EE of the Income Tax Act. However, only first-time home buyers are eligible for the income tax deduction on house loan interest.
                        </p>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" /> */}
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
                    </div>
                </div>
            </section>
        </>
    )
}
