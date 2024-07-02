import React, { useEffect, useState } from 'react'

function CampaignCustomer() {
    const [input, setInput] = useState({});
    const [currentScreen,setCurrentScreen] = useState(1);
    useEffect(()=>{
        const searchParams = new URLSearchParams(window.location.search);
        const offer_id = searchParams.get('offer_id');
        const campaignId = searchParams.get('campaignId');
        console.log('offer_id',offer_id);
        console.log('campaignId',campaignId);
    },[])
    const handleScreenChange = ()=>{
        setCurrentScreen(currentScreen + 1);
        console.log('input',input);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    return (
        <div>
            {
                currentScreen == '1'? <div className="w-full max-w-sm my-10 px-7" style={{zIndex: '9999'}}>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                        Your Name
                    </label>
                    </div>
                    <div className="md:w-2/3">
                    <input onChange={handleInputChange} name="full_name" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text"  />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                        Your Phone Number
                    </label>
                    </div>
                    <div className="md:w-2/3">
                    <input onChange={handleInputChange} name="phone_number" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="phone-number" type="number" placeholder="8169" />
                    </div>
                </div>
                <div className="w-full mt-20">
                    <div className="w-full">
                    <button onClick={()=> handleScreenChange()} className="w-full shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                        Continue
                    </button>
                    </div>
                </div>
                </div> : ""
            }
            {
                currentScreen == '2'? <div className="w-full max-w-sm my-10 px-7" style={{zIndex: '9999'}}>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                        Your PIN Code
                    </label>
                    </div>
                    <div className="md:w-2/3">
                    <input onChange={handleInputChange} name="pincode" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="pincode" type="number"  />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                        Your Employment Type
                    </label>
                    </div>
                    <div className="md:w-2/3">
                    <input onChange={handleInputChange} name="emp_type" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="emp-type" type="text" placeholder="" />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                        Your Income Mode
                    </label>
                    </div>
                    <div className="md:w-2/3">
                    <input onChange={handleInputChange} name="incom_mode" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="income-mode" type="text"  />
                    </div>
                </div>
                <div className="w-full mt-20">
                    <div className="w-full">
                    <button onClick={()=> handleScreenChange()} className="w-full shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                        Continue
                    </button>
                    </div>
                </div>
                </div> : ""
            }
            {
                currentScreen == '3'? <div className="w-full max-w-sm my-10 px-7" style={{zIndex: '9999'}}>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                        Your PAN Code
                    </label>
                    </div>
                    <div className="md:w-2/3">
                    <input onChange={handleInputChange} name="pancard" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="pancode" type="number"  />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                        Your Email ID
                    </label>
                    </div>
                    <div className="md:w-2/3">
                    <input onChange={handleInputChange} name="email_id" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="emailid" type="email" placeholder="username@gmail.com" />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                        Date of Birth
                    </label>
                    </div>
                    <div className="md:w-2/3">
                    <input onChange={handleInputChange} name="dateofbirth" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="dateofbirth" type="date"  />
                    </div>
                </div>
                <div className="w-full mt-20">
                    <div className="w-full">
                    <button onClick={()=> handleScreenChange()} className="w-full shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                        Continue
                    </button>
                    </div>
                </div>
                </div> : ""
            }
            {
                currentScreen == '4'? <div className="w-full max-w-sm my-10 px-7" style={{zIndex: '9999'}}>
                    <div>Thankyou</div>
                </div> : ""
            }
            
        </div>
    )
}

export default CampaignCustomer;