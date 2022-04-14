import React from 'react'

export default function Typescreditcards(props) {
    return (
        <React.Fragment>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-indigo-600 fnt-sty-nunito">TYPES OF CREDIT CARD</h1>
                        {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p> */}
                    </div>
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 lg:w-1/2 md:w-1/2 w-full">
                            <div className="h-full shadow-xl flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16  object-cover object-center flex-shrink-0  mr-4" src="/img/Credit-Card/credit-card.png" />
                                <div className="flex-grow">
                                    <h2 className="text-blue-700 title-font font-bold fnt-sty-nunito">Basic Credit Cards</h2>
                                    <p className="text-gray-500 text-sm fnt-sty-nunito">This credit card is the best option for individuals who want to experiment with credit cards. You will be given a minimal credit limit based on your income, and you will be able to make purchases with it. There are no additional benefits to using the card for transactions</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/2 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16  object-cover object-center flex-shrink-0 mr-4" src="/img/Credit-Card/no-fee.png" />
                                <div className="flex-grow">
                                    <h2 className="text-blue-700 title-font font-bold fnt-sty-nunito">No Annual Fee Credit Cards</h2>
                                    <p className="text-gray-500 text-sm fnt-sty-nunito">A no annual fee credit card is one that does not charge an annual fee for credit card use. It is regarded a base credit or barely above that level, with very little rewards. Individuals who are new to credit card usage or who use the card seldom would choose a credit card with no annual fee</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/2 md:w-1/2 w-full">
                            <div className="h-full  flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 object-cover object-center flex-shrink-0  mr-4" src="/img/Credit-Card/medal.png" />
                                <div className="flex-grow">
                                    <h2 className="text-blue-700 title-font font-bold fnt-sty-nunito">Rewards Credit Cards</h2>
                                    <p className="text-gray-500 text-sm fnt-sty-nunito">A rewards credit card is one that provides some sort of prize for every rupee spent using the card. Every bank determines the quantity of reward points you receive for each sort of transaction you complete with each rewards card it offers, such as grocery shopping and online bill payment</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/2 md:w-1/2 w-full">
                            <div className="h-full shadow-xl flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="/img/Credit-Card/cashback.png" />
                                <div className="flex-grow">
                                    <h2 className="text-blue-700 title-font font-bold fnt-sty-nunito">Cashback Credit Cards</h2>
                                    <p className="text-gray-500 text-sm fnt-sty-nunito">Cashback credit cards offer a percentage of the purchase value as cashback anytime you use the card to make a purchase. The bank may also specify criteria such as cashback is only available on gasoline purchases</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
