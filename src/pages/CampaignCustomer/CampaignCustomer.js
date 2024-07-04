import React, { useEffect, useState } from 'react'
import firebase from '../../utils/firebase';
import fb from 'firebase/app';
import 'firebase/firestore';

function CampaignCustomer() {
    const [input, setInput] = useState({});
    const [affiliateId, setAffiliateId] = useState('');
    const [campaignId, setCampaignId] = useState('');
    const [currentScreen,setCurrentScreen] = useState(1);
    useEffect(()=>{
        const searchParams = new URLSearchParams(window.location.search);
        const aff_id = searchParams.get('aff_id');
        const campaignId = searchParams.get('campaign_id');
        setAffiliateId(aff_id);
        setCampaignId(campaignId);
    },[])
    const handleScreenChange = async (submitData)=>{
        const currentDate = new Date();
        const futureDate = new Date(currentDate);
        futureDate.setDate(currentDate.getDate() + 15);
        const formattedDate = futureDate.toLocaleDateString();
        let vObj = {
            'dateOfBirth': input.dateofbirth,
            'emailId': input.email_id,
            'employmentType': input.emp_type,
            'fullName': input.full_name,
            'incomeMode': input.incom_mode,
            'pancard': input.pancard,
            'phoneNumber': input.phone_number.toString(),
            'pincode': input.pincode
        }
        if (submitData == 'prefill') {
            firebase.collection('customers').doc(vObj.phoneNumber).get()
            .then(docSnapshot => {
                if (docSnapshot.exists) {
                    firebase.collection('customers').doc(vObj.phoneNumber).collection(affiliateId).doc(campaignId).get().then((docSnap)=>{
                        if (docSnap.exists) {
                            setCurrentScreen(1);
                            alert('You already applied for this offer.');
                            return;
                        }
                    })
                    // console.log('Document found...');
                }else{
                    setCurrentScreen(currentScreen + 1);
                }
            });
        }
        if (submitData == 'emp_detail') {
            setCurrentScreen(currentScreen + 1);
        }
        if (submitData == 'add_customer') {
            firebase.collection('campaigns').doc(campaignId).get().then((querySnapshot)=>{
                let campaignVobj = querySnapshot.data();
                firebase.collection('customers').doc(vObj.phoneNumber).set(vObj)
                .then(() => {
                    firebase.collection('customers').doc(vObj.phoneNumber).collection(affiliateId).doc(campaignId).set({
                        'campaignId': campaignId,
                        'campaignName': campaignVobj.campaignName,
                        'campaignImg': campaignVobj.campaignImg,
                        'campaignTitle': campaignVobj.campaignTitle,
                        'campaignAmount': campaignVobj.amount,
                        'createdOn': new Date().toLocaleDateString(),
                        'estimatedDate':formattedDate,
                        'status':'Shared Link',
                        'statusId':'1'
                    }).then(()=>{
                        const docRef = firebase.collection('userDetails').doc(affiliateId);
                        docRef.update({
                            customerList: fb.firestore.FieldValue.arrayUnion(vObj.phoneNumber),
                        }).then(()=>{
                            setCurrentScreen(currentScreen + 1);
                            console.log('Document and collection successfully written!');
                        });
                    })
                })
                .catch((error) => {
                    console.error('Error adding document: ', error);
                });
            });
            
        }
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
                    <button onClick={()=> handleScreenChange('prefill')} className="w-full shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
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
                    <button onClick={()=> handleScreenChange('emp_detail')} className="w-full shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
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
                    <input onChange={handleInputChange} name="pancard" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="pancode" type="text"  />
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
                    <button onClick={()=> handleScreenChange('add_customer')} className="w-full shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
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