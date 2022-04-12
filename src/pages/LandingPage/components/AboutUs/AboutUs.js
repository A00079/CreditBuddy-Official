import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../../lotties/about-us.json';

const AboutUs = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
            progressiveLoad: true,
        }
    };
    return (
        <React.Fragment>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 pt-40 md:flex-row flex-col items-center">
                    <div className="hidden sm:block lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <Lottie
                            options={defaultOptions}
                            height={300}
                            width={300}
                        />
                    </div>
                    <div className="block sm:hidden lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <Lottie
                            options={defaultOptions}
                            height={200}
                            width={200}
                        />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">About Our Company</h2>
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-indigo-600">About Us</h1>
                        <p className="mb-3 leading-relaxed">Our goal is to become a one-stop solution provider for any issues that arise when you query about any present or upcoming financial product. At CreditKaro, we have a diverse inventory of banking and financial products, as well as exclusive offers.


                        </p>
                        <p className="text-sm mt-2 text-gray-500 mb-8 w-full">On our website, we provide a wide range of products and allow you to compare them before making a purchase. What else is there? You can also check your credit score for free right here!</p>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default AboutUs;