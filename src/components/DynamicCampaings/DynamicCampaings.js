import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import firebase from '../../utils/firebase';
export default function DynamicCampaings(props) {
    const [open, setOpen] = React.useState(false);
    const [cardsDetailData, setCardsDetailData] = React.useState([]);
    const [selectedCampCardDetails, setSelectedCampCardDetails] = useState('');
    const [campFormInputs, setCampFormInputs] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleCampFormIputs = (e) => {
        setCampFormInputs({
            ...campFormInputs,
            [e.target.name]: e.target.value
        });
    }

    const handleFormOpen = (obj) => {
        if (!!obj.actionlink) {
            console.log('Action link', obj.actionlink);
            window.open(obj.actionlink, '_blank');
        } else if (!!obj.formlink) {
            setOpen(true);
            setSelectedCampCardDetails(obj);
            console.log('Form link');
        }
    };

    const handleCampFormSubmit = () => {
        console.log('campFormInputs', campFormInputs);
        setIsLoading(true);
        if (!!campFormInputs.firstname && !!campFormInputs.contact && !!campFormInputs.lastname && !!campFormInputs.email) {
            let data =
            {
                "firstName": campFormInputs.firstname,
                "contact": campFormInputs.contact,
                "lastName": campFormInputs.lastname,
                "email": campFormInputs.email,
                "birthDate": "",
                "averageAnnualIncome": "",
                "gender": ""
            }
            console.log('Data ===>', data);
            firebase.child(props.DB_PATH).push(
                data,
                err => {
                    if (err) {
                        setIsLoading(false);
                        alert('Something Went Wrong...');
                    } else {
                        document.getElementById('firstname').value = "";
                        document.getElementById('lastname').value = "";
                        document.getElementById('contact').value = "";
                        document.getElementById('email').value = "";
                        setCampFormInputs({});
                        alert('Details saved successfully');
                        setIsLoading(false);
                        handleClose();
                    }
                })
        } else {
            setIsLoading(false);
            alert('All fields are mandatory.');
        }
    }

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        fetchCampaings();
    }, [])

    const fetchCampaings = () => {
        if (!!props.campaignName) {
            firebase.child(props.campaignName).on('value', snapshot => {
                if (snapshot.val() != null) {
                    let fetchedData = [];
                    Object.keys(snapshot.val()).map((el, index) => {
                        fetchedData.push(snapshot.val()[el]);
                    });
                    setCardsDetailData(fetchedData);
                } else {
                    setCardsDetailData([]);
                }
            });
        }
    }
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 uppercase tracking-widest fnt-sty-nunito">WE FOUND THE BEST {!!props.campaignName ? props.campaignName : ''} </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base fnt-sty-nunito">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
                    </div>
                    <div className="grid grid-cols-12 gap-4">
                        {
                            cardsDetailData.length !== 0 && cardsDetailData.map((el, index) => {
                                return (
                                    <div key={index} className="sm:col-span-4 col-span-12 p-2">
                                        <div className='bg-white border border-gray-300 rounded-md'>
                                            <div className="bg-white  shadow-xl border-l-2 shadow-sm border-blue-600 rounded-md px-3 py-3 h-full flex sm:flex-col flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                                <div className='flex flex-col items-start space-y-3'>
                                                    <div className='flex flex-row justify-start space-x-3 items-center'>
                                                        <div className='rounded-full bg-gray-200 border-2 border-dashed border-blue-600 p-2 uppercase'>
                                                            {
                                                                el.campaignname.substring(0, 2)
                                                            }
                                                        </div>
                                                        <div>
                                                            <h2 className="w-full text-left title-font font-bold text-md text-indigo-700 fnt-sty-nunito">{el.campaignname}</h2>
                                                            <h2 className="w-full text-left title-font font-bold text-xs text-gray-500 fnt-sty-nunito">{el.campaigntype}</h2>
                                                        </div>

                                                    </div>
                                                    <div className='flex flex-row justify-between items-center h-24'>
                                                        <img alt="team" className="bg-gray-200 rounded-md flex-shrink-0 rounded-lg w-36 object-cover object-center sm:mb-0 mb-4 p-2" src={el.campaignimg} />
                                                        <div className='grid grid-cols-12 gap-2 px-5'>
                                                            {
                                                                Object.keys(el).map((objKeys) => {
                                                                    return (
                                                                        objKeys !== 'campaignimg' && objKeys !== 'actionlink' && objKeys !== 'campaignname' && objKeys !== 'formlink' && objKeys !== 'campaigntype' ?
                                                                            <h3 className="col-span-6 text-blue-500 text-sm fnt-sty-nunito"><span className="text-gray-500 font-bold text-xs fnt-sty-nunito uppercase">{objKeys}</span> {el[objKeys]}</h3>
                                                                            : ""
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-2 border-t border-gray-400 w-full border-dashed flex justify-end items-end">
                                                    <span className="inline-flex">
                                                        <button onClick={() => handleFormOpen(el)} className="mt-2 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-xs">
                                                            Apply Now
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <Dialog
                open={open}
                disableBackdropClick
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    <div className='flex flex-row justify-between items-center border-b border-gray-300 pb-3'>
                        <div>
                            <p>{!!props.campaignName ? props.campaignName : ''}</p>
                            <p className='text-xs font-medium'>{selectedCampCardDetails.campaignname}</p>
                        </div>
                        <div>
                            <div className='rounded-md'>
                                <img src='./img/creditbuddy-logo.png' className='object-contain object-cover w-8 mx-auto' />
                            </div>
                        </div>
                    </div>

                </DialogTitle>
                <DialogContent>
                    <div className='campaign-img-container flex flex-row justify-start w-full items-center'>

                        <div className='bg-gray-50 p-2 border-2 border-dashed border-gray-200 rounded-md'>
                            <img src={selectedCampCardDetails.campaignimg} className='object-contain  object-cover w-24 mx-auto' />
                        </div>
                    </div>
                    <div className='flex flex-row justify-between space-x-4 py-5 items-center w-full'>
                        <div>
                            <TextField onChange={(e) => handleCampFormIputs(e)} value={campFormInputs.firstname} size='small' name="firstname" id="firstname" label="First Name" variant="outlined" />
                        </div>
                        <div>
                            <TextField onChange={(e) => handleCampFormIputs(e)} value={campFormInputs.lastname} size='small' name="lastname" id="lastname" label="Last Name" variant="outlined" />
                        </div>
                    </div>
                    <div className='flex flex-row justify-between space-x-4 items-center w-full'>
                        <div>
                            <TextField type='number' onChange={(e) => handleCampFormIputs(e)} value={campFormInputs.contact} size='small' name="contact" id="contact" label="Contact" variant="outlined" />
                        </div>
                        <div>
                            <TextField onChange={(e) => handleCampFormIputs(e)} value={campFormInputs.email} size='small' name="email" id="email" label="Email" variant="outlined" />
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <button onClick={() => handleCampFormSubmit()} className='px-4 py-2 rounded-md bg-indigo-600 text-white text-xs font-bold'>
                        {
                            isLoading ?
                                <svg className="w-5 h-5 text-white animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                                :
                                <div>Submit</div>
                        }
                    </button>
                </DialogActions>
            </Dialog>
        </>
    )
}
