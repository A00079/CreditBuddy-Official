import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../../../../lotties/personal-loan.json';

export default function Whatiscreditcard(props) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <React.Fragment>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 pt-20 pb-40 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
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
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">What is Personal Loan
                        </h1>
                        <p className="mb-3 leading-relaxed">A personal loan is an amount of money you can borrow to use for a variety of purposes. For instance, you may use a personal loan to consolidate debt, pay for home renovations, or plan a dream wedding.</p>
                        <p className="mb-3 leading-relaxed">Personal loans can be offered by banks, credit unions, or online lenders. The money you borrow must be repaid over time, typically with interest. Some lenders may also charge fees for personal loans. g</p>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
