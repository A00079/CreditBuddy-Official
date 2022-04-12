import React from 'react';
import { Link } from 'react-router-dom';
import { CreditForm, CreditScore, WhatIsCreditCard, StepsCreditCard, TypesCreditCards, CreditLimit, CreditProsCons, CreditRedeem } from "./Components";
export default function Creditcard(props) {
    return (
        <React.Fragment>
            <div className='relative'>
                <CreditForm />
                <CreditScore />
                <WhatIsCreditCard />
                {/* <CreditCampaigns /> */}
                <StepsCreditCard />
                <TypesCreditCards />
                <CreditLimit />
                <CreditProsCons />
                <CreditRedeem />
                <Link to='/'>
                    <button title="Back To Home" className='fixed bottom-5 right-5 bg-yellow-500 border-2 rounded-full px-4 py-4'><svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg></button>
                </Link>
            </div>
        </React.Fragment>
    )
}

