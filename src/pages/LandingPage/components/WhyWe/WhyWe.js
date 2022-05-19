import React, { useState } from 'react';
import '../../../../App.css'
const WhyWe = () => {
    const [products, setProducts] = useState([
        {
            'title': 'Credit Card',
            'img': 'credit-card.png'
        },
        {
            'title': 'Demat Account',
            'img': 'demat-acct-home.png'
        },
        {
            'title': 'Health Care',
            'img': 'healthcare.svg'
        },
        {
            'title': 'Home Loan',
            'img': 'property-insurance.png'
        },
        {
            'title': 'Life Insurance',
            'img': 'lifeinsurance.png'
        },
        {
            'title': 'Personal Loan',
            'img': 'personalloan.png'
        },
        {
            'title': 'Saving Account',
            'img': 'savings.png'
        },
        {
            'title': 'Mutual Funds',
            'img': 'homeloan.png'
        }
    ])
    return (
        <React.Fragment>


            <div className="min-h-screen bg-white">
                <main>
                    <section className="juice3 bg-white bg-opacity-90 py-10">
                        <div className="container  mx-auto px-2 flex flex-col lg:flex-row">
                            <div className="relative lg:w-2/4 rounded-xl  bg-cover md:p-0">
                                <a href='https://play.google.com/store/apps/details?id=com.icici.direct&referrer=utm_source=candid-{aff_id}_{sub_aff_id}_{aff_sub1}&utm_medium=banner&utm_term=oao&utm_content=na&utm_campaign=na' target='_blank'>
                                    <div className="rounded-lg h-72 sm:h-96 overflow-hidden">
                                        <img alt="content" className="hidden sm:block object-fit object-center h-full w-full" src="
                                   ./img/LandingScreen/home-banner.jpg" />

                                        <img alt="content" className="block sm:hidden object-fit object-center w-96" src="
                                   ./img/LandingScreen/mobile-banner.jpg" />
                                    </div>
                                </a>
                                <p className="max-w-sm text-secondary text-3xl md:text-4xl font-semibold"></p>
                                <p className="max-w-xs pr-10 text-secondary font-semibold mt-8"></p>
                                {/* <button className="mt-20 bg-white font-semibold px-8 py-2 rounded">Shop Now</button> */}
                            </div>
                            <div className="lg:mt-0 h-60 sm:h-96 lg:ml-4 lg:w-1/2 rounded-xl bg-primary-lite bg-cover">
                                <a href='https://simplehai.axisdirect.in/SuperOptions-trading-account?utm_source=emailer&utm_medium=Convonix_1348_2860_2860_{sub_aff_id}_&utm_campaign=open-account-Superoptionsmailer1' target='_blank'>
                                    <img alt="content" className="hidden sm:block rounded-xl object-fit object-center h-full w-full" src="
                                   ./img/LandingScreen/home-banner2.png" />
                                    <img alt="content" className="block sm:hidden rounded-xl object-fit object-center h-full w-full" src="
                                   ./img/LandingScreen/home-banner2.png" />
                                    {/* <div className="max-w-sm">
                                    <p className="text-3xl md:text-4xl font-semibold uppercase"></p>
                                    <p className="mt-4 font-semibold"></p>
                                    
                                </div> */}
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* <section className="juice3 bg-white bg-opacity-90">
                        <div className="container h-96 mx-auto px-4 flex flex-col lg:flex-row">
                        <div className="juice6 mt-6 lg:mt-0 lg:mr-6 lg:w-1/3 rounded-xl bg-primary-lite bg-cover p-8 md:p-16">
                                <div className="max-w-sm">
                                    <p className="text-3xl md:text-4xl font-semibold uppercase"></p>
                                    <p className="mt-8 font-semibold"></p>
                                    
                                </div>
                            </div>
                            <div className="juice7 relative lg:w-2/3 rounded-xl  bg-cover p-8 md:p-16">
                                <p className="max-w-sm text-secondary text-3xl md:text-4xl font-semibold"></p>
                                <p className="max-w-xs pr-10 text-secondary font-semibold mt-8"></p>
                                
                            </div>
                            
                        </div>
                    </section> */}

                    <section className="px-4 sm:px-12 pt-12 bg-white">
                        <div className="relative flex items-end font-bold">
                            <h2 className="text-2xl fnt-sty-nunito">Our Products</h2>
                            {/* <a  className="ml-10 flex items-center text-gray-400">
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" className="ml-3 h-3.5 svg-inline--fa fa-chevron-right fa-w-8 fa-9x"><path fill="currentColor" d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"></path></svg>
                            </a> */}
                        </div>
                        <div className="mt-10">
                            <ul className="grid sm:grid-cols-4 grid-cols-2 gap-4">
                                {
                                    products.map((el, index) => {
                                        return (
                                            <li key={index} className="h-full w-full p-5 cursor-pointer bg-gray-100 rounded-xl flex flex-col items-center justify-center text-center duration-300 hover:bg-white hover:shadow-2xl">
                                                <img className="max-h-20" src={`/img/LandingScreen/ourproduct/${el.img}`} alt="" />
                                                <span className="font-semibold fnt-sty-nunito">{el.title}</span>
                                            </li>
                                        )
                                    })
                                }

                            </ul>
                        </div>
                    </section>

                    {/* <section className="container mx-auto pt-12">
                        <div className="relative flex items-end font-bold">
                            <h2 className="text-2xl">Featured Brands</h2>
                            <a href className="ml-10 flex items-center text-gray-400">
                                <svg className="ml-3 h-3.5" aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" className="svg-inline--fa fa-chevron-right fa-w-8 fa-9x"><path fill="currentColor" d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"></path></svg>
                            </a>
                        </div>
                        <div className="mt-10">
                            <ul className="-m-3.5 flex">
                                <li className="product m-3.5 h-48 w-1/4 bg-cover rounded-xl"></li>
                                <li className="product2 m-3.5 h-48 w-1/4 bg-cover rounded-xl"></li>
                                <li className="product4 m-3.5 h-48 w-1/4 bg-cover rounded-xl"></li>
                                <li className="product3 m-3.5 h-48 w-1/4 bg-cover rounded-xl"></li>
                            </ul>
                        </div>
                    </section> */}
                </main>
            </div>
        </React.Fragment>
    )
}

export default WhyWe;