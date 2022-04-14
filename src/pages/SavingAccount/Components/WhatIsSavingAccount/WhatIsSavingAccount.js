import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../../../../lotties/saving-money.json';
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
                <div className="container mx-auto flex px-5 py-2 pb-40 md:flex-row flex-col items-center">
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
                        <h1 className="title-font sm:text-4xl text-3xl mb-5 font-bold text-indigo-600">How Does It Work ?
                        </h1>
                        <p className="mb-3 leading-relaxed fnt-sty-nunito">Savings and other bank accounts are valuable sources of capital that financial firms can use to lend to others. You can find savings accounts for this reason at almost any bank or credit union, whether they are traditional brick-and-mortar establishments or only operate online. Savings accounts are also available at certain securities and trading businesses.</p>
                        <p className="mb-3 leading-relaxed fnt-sty-nunito">The amount you would receive on a savings account is varied in general. Banks and credit unions can normally increase or lower their savings account rate at any time, with the exception of campaigns that offer a fixed rate until a specific date.</p>
                        {/* <div className="flex justify-center">
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                        </div> */}
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
