import React from "react";
import Lottie from 'react-lottie';
import animationData from '../../../../lotties/why-us.json';

export default function Example() {
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
            <section className="text-blueGray-700 bg-white mt-20">
                <div className="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
                    <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
                        <h2 className="mb-5 text-xs font-semibold tracking-widest text-black uppercase title-font  fnt-sty-nunito"> We are the best </h2>
                        <h1 className="mb-8 text-2xl font-black tracking-tighter text-indigo-600 md:text-5xl title-font  fnt-sty-nunito"> Why Choose Us </h1>
                        <p className="mb-3 font-bold leading-relaxed text-left text-gray-500  fnt-sty-nunito"> Our goal is to become a one-stop solution provider for any issues that arise when you query about any present or upcoming financial product.   </p>
                        <p className="mb-3 font-bold leading-relaxed text-left text-gray-500  fnt-sty-nunito"> We assist you in selecting the right credit card for your needs. Simply filter your preferences and leave the rest to us. We'll find you the perfect match!! </p>
                    </div>
                    <div className="w-full lg:w-1/3 lg:max-w-lg md:w-1/2">
                        {/* <img className="object-cover object-center rounded-lg " alt="hero" src="https://dummyimage.com/720x600/F3F4F7/8693ac" /> */}
                        <Lottie
                            options={defaultOptions}
                            height={300}
                            width={300}
                        />
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="sm:px-10">
                    <div className="grid sm:grid-cols-4 grid-cols-1 gap-4 w-full">
                        <div className="p-4 w-full">
                            <div className="w-full h-full bg-gray-100 shadow-xl bg-opacity-75 px-8 pt-6 pb-6 rounded-lg overflow-hidden text-center relative">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1  fnt-sty-nunito">EXCITING</h2>
                                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3  fnt-sty-nunito">EXCITING OFFERS </h1>
                                <p className="leading-relaxed  fnt-sty-nunito">We monitor the market, your preferences, and personalise the offers to deliver you the best deals available.</p>
                            </div>
                        </div>
                        <div className="p-4 w-full">
                            <div className="h-full bg-gray-100 shadow-xl bg-opacity-75 px-8 pt-6 pb-6 rounded-lg overflow-hidden text-center relative">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1  fnt-sty-nunito">PROPER</h2>
                                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3  fnt-sty-nunito">PROPER RESEARCH </h1>
                                <p className="leading-relaxed mb-3  fnt-sty-nunito">Before we provide you something, we conduct extensive research. Our goal is to become a dependable source for you based on your preferences</p>
                            </div>
                        </div>
                        <div className="p-4 w-full">
                            <div className="h-full bg-gray-100  shadow-xl bg-opacity-75 px-8 pt-6 pb-6 rounded-lg overflow-hidden text-center relative">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1  fnt-sty-nunito">EASY</h2>
                                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3  fnt-sty-nunito">EASY TO ACCESS</h1>
                                <p className="leading-relaxed mb-3  fnt-sty-nunito">We strive to make your experience on our website as simple and interactive as possible so that you will enjoy purchasing from us</p>
                            </div>
                        </div>
                        <div className="p-4 w-full">
                            <div className="h-full bg-gray-100 shadow-xl bg-opacity-75 px-8 pt-6 pb-6 rounded-lg overflow-hidden text-center relative">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1  fnt-sty-nunito">FAST</h2>
                                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3  fnt-sty-nunito">FAST AND RAPID</h1>
                                <p className="leading-relaxed mb-3  fnt-sty-nunito">We don't make you choose between options. We strive to provide you with the greatest information available in the industry in a timely manner. Our unique selling point is that we do tasks as promptly as feasible</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
