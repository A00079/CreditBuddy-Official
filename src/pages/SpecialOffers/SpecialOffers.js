import React, { useEffect, useState } from 'react'
import { withRouter } from "react-router";
import { DynamicCampaings } from '../../components';

function SpecialOffers(props) {

    const [userEmail, setUserEmail] = useState('');
    const [selctedCampaign, setSelectedCampaign] = useState('creditcard');
    const [selctedCampaignDB, setSelectedCampaignDB] = useState('user_form_credit_card');

    useEffect(() => {
        let operationType = localStorage.getItem('operationType') || "";
        let email = localStorage.getItem('email') || "";
        let uid = localStorage.getItem('uid') || "";
        setUserEmail(email);
        if (!operationType || !email || !uid) {
            props.history.push('/');
        }
    });

    const handleCampaignSelect = (campaign, campaignDB) =>{
        setSelectedCampaign(campaign);
        setSelectedCampaignDB(campaignDB);
    }

    const Goto = (routerPath) =>{
        props.history.push(routerPath);
    }
    return (
        <div>
            <div className='tab-bar w-full flex flex-row justify-between items-center px-36 border-b-2 border-gray-200'>
                <div className='text-sm text-gray-500 font-bold flex flex-row justify-start items-center'>
                    <div onClick={() => handleCampaignSelect('creditcard','user_form_credit_card')} className={`${selctedCampaign == 'creditcard' ? 'bg-gray-200' : ''} cursor-pointer border-r border-gray-300 px-3 py-3`}>Credit Card</div>
                    <div onClick={() => handleCampaignSelect('homeloan','user_form_home_loan')} className={`${selctedCampaign == 'homeloan' ? 'bg-gray-200' : ''} cursor-pointer border-r border-gray-300 px-3 py-3`}>Home Loan</div>
                    <div onClick={() => handleCampaignSelect('savingaccount','user_form_saving_account')} className={`${selctedCampaign == 'savingaccount' ? 'bg-gray-200' : ''} cursor-pointer border-r border-gray-300 px-3 py-3`}>Saving Account</div>
                    <div onClick={() => handleCampaignSelect('personalloan','user_form_personal_loan')} className={`${selctedCampaign == 'personalloan' ? 'bg-gray-200' : ''} cursor-pointer border-r border-gray-300 px-3 py-3`}>Personal Loan</div>
                    <div onClick={() => handleCampaignSelect('demataccount','user_form_demat_account')} className={`${selctedCampaign == 'demataccount' ? 'bg-gray-200' : ''} cursor-pointer px-3 py-3`} >Demat Account</div>
                </div>
                <div className='flex flex-row justify-start items-center space-x-2 text-indigo-600 text-sm font-bold'>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <p>{userEmail}</p>
                </div>
            </div>
            <div className='w-full px-40 bg-indigo-500 border-b-2 py-3 border-gray-200'>
                <p className='text-white font-bold text-xl'>Dashboard</p>
            </div>
            <div class="grid grid-cols-12 gap-4">
                <div class="col-span-2">
                    <div className='bg-indigo-500 border-r border-gray-400 w-full h-full flex flex-col items-start'>
                        <div className='border-b border-gray-400  flex flex-col w-full items-center py-4'>
                            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <p className='text-white text-xs font-bold pt-2'>{userEmail}</p>
                        </div>
                        <div onClick={() => Goto('/')} className='text-md  w-full text-white font-bold py-3 px-5 hover:bg-white hover:text-gray-500 cursor-pointer '>
                            <div className='flex flex-row justify-start items-center space-x-3'>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                                <p>Home</p>
                            </div>
                        </div>
                        <div className='cursor-pointer text-md bg-white w-full text-gray-500 font-bold py-3 px-5'>
                            <div className='flex flex-row justify-start items-center space-x-3'>
                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg>
                                <p>Dashboard</p>
                            </div>
                        </div>
                        <div onClick={() => Goto('contact-us')} className='cursor-pointer text-md text-white w-full font-bold py-3 px-5 hover:bg-white hover:text-gray-500'>
                            <div className='flex flex-row justify-start items-center space-x-3'>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                <p> Contact Us</p>
                            </div>
                        </div>
                        <div onClick={() => Goto('/')} className='cursor-pointer text-md text-white w-full font-bold py-3 px-5 hover:bg-white hover:text-gray-500'>
                            <div className='flex flex-row justify-start items-center space-x-3'>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                                <p>Logout</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-10">
                    No Offers
                </div>
            </div>
        </div>
    )
}

export default withRouter(SpecialOffers);