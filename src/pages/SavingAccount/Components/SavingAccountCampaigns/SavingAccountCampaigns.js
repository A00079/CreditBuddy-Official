import React, { useState } from 'react'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    "Axis Bank",
    "Equitas Small Finance Bank",
    "Fi",
    "Fincare Small Finance Bank",
    "HDFC Bank",
    "IndusInd bank",
    "Kotak Bank"
];
const cardnames = [
    "2.50%",
    "3%",
    "3-4%",
    "4%",
    "4 - 6%",
    "5.1%",
    "7%"
];
export default function SavingAccountCampaigns(props) {
    const [bankName, setBankName] = React.useState([]);
    const [cardName, setCardName] = React.useState([]);
    const [cardsDetailData, setCardsDetailData] = React.useState([
        // {
        //     "card_name": "IndusInd Bank Savings Account",
        //     "img": "IndusIndBankSavingsAccount.png",
        //     "interest_rate": "4 - 6%*",
        //     "minimum_balance": "0",
        //     "aoc": "0",
        //     "link": "",
        //     "type": "IndusInd bank"
        // },
        {
            "card_name": "Fi",
            "img": "Fi.jpg",
            "interest_rate": "5.1%*",
            "minimum_balance": "0",
            "aoc": "0",
            "link": "https://play.google.com/store/apps/details?id=com.epifi.paisa&referrer=af_tranid%3Du5-AhEa21_-o8ZpbTWfgHw%26pid%3Doptimidea_int%26af_siteid%3D174%26af_click_lookback%3D7d%26clickid%3D61cc3f0bf6c4230342d7a1bd%26af_installpostback%3Dfalse%26af_web_id%3D407b8710-9c6a-440e-9d54-4664c35b3c05-i",
            "type": "Fi"
        },
        {
            "card_name": "Kotak 811 Savings Account",
            "img": "Kotak811SavingsAccount.png",
            "interest_rate": "4%",
            "minimum_balance": "0",
            "aoc": "0",
            "link": "https://www.kotak.com/811-savingsaccount-ZeroBalanceAccount/811/ahome2.action?source=VKYCIL&banner=ILVKYClaunch&pubild=VKYClaunchmailer_3880_3880",
            "type": "Kotak Bank"
        },
        // {
        //     "card_name": "Fincare Small Finance Bank",
        //     "img": "FincareSmallFinanceBank.jpg",
        //     "interest_rate": "7%",
        //     "minimum_balance": "0",
        //     "aoc": "0",
        //     "link": "",
        //     "type": "Fincare Small Finance Bank"
        // },
        {
            "card_name": "HDFC Bank InstaSavings Account",
            "img": "HDFCBankInstaSavingsAccount.jpg",
            "interest_rate": "3-4 %*",
            "minimum_balance": "2500 - 25000",
            "aoc": "0",
            "link": "https://v1.hdfcbank.com/htdocs/common/saving-account/index.html?LGCode=MKTG&mc_id=paid_Affiliate_1348_2860_2860_{sub_aff_id}_&utm_source=Affiliate_1348_2860_2860_{sub_aff_id}_&utm_medium=paid_Affiliate&utm_campaign=NTB_Affiliate_1348_Savings_Account_&utm_content=NTB_SA_IMP_1348_Banner_Ad1#SA_Landing",
            "type": "HDFC Bank"
        },
        {
            "card_name": "ASAP Instant Savings Account",
            "img": "ASAPInstantSavingsAccount.png",
            "interest_rate": "3%",
            "minimum_balance": "NR 15000",
            "aoc": "0",
            "link": "https://leap.axisbank.com/verification?query=5ee36547c0ce0dd6c0a2812d&utm_source=CXAFFDSA&utm_medium=email&utm_campaign=DSA-Affiliate-VKYC&utm_term=2860_2860&utm_content=1348",
            "type": "Axis Bank"
        },
        {
            "card_name": "Equitas Bank Selfe Savings Account",
            "img": "EquitasBankSelfeSavingsAccount.jpg",
            "interest_rate": "7%",
            "minimum_balance": "0",
            "aoc": "0",
            "link": "https://inet.equitasbank.com/Selfe/?tpp=CREDITK12860_2860_{sub_aff_id}_{aff_sub3}",
            "type": "Equitas Small Finance Bank"
        }
    ]);
    const [copyCardsDetailData, setCopycardsDetailData] = React.useState([
        // {
        //     "card_name": "IndusInd Bank Savings Account",
        //     "img": "IndusIndBankSavingsAccount.png",
        //     "interest_rate": "4 - 6%*",
        //     "minimum_balance": "0",
        //     "aoc": "0",
        //     "link": "",
        //     "type": "IndusInd bank"
        // },
        {
            "card_name": "Fi",
            "img": "Fi.jpg",
            "interest_rate": "5.1%*",
            "minimum_balance": "0",
            "aoc": "0",
            "link": "https://play.google.com/store/apps/details?id=com.epifi.paisa&referrer=af_tranid%3Du5-AhEa21_-o8ZpbTWfgHw%26pid%3Doptimidea_int%26af_siteid%3D174%26af_click_lookback%3D7d%26clickid%3D61cc3f0bf6c4230342d7a1bd%26af_installpostback%3Dfalse%26af_web_id%3D407b8710-9c6a-440e-9d54-4664c35b3c05-i",
            "type": "Fi"
        },
        {
            "card_name": "Kotak 811 Savings Account",
            "img": "Kotak811SavingsAccount.png",
            "interest_rate": "4%",
            "minimum_balance": "0",
            "aoc": "0",
            "link": "https://www.kotak.com/811-savingsaccount-ZeroBalanceAccount/811/ahome2.action?source=VKYCIL&banner=ILVKYClaunch&pubild=VKYClaunchmailer_3880_3880",
            "type": "Kotak Bank"
        },
        // {
        //     "card_name": "Fincare Small Finance Bank",
        //     "img": "FincareSmallFinanceBank.jpg",
        //     "interest_rate": "7%",
        //     "minimum_balance": "0",
        //     "aoc": "0",
        //     "link": "",
        //     "type": "Fincare Small Finance Bank"
        // },
        {
            "card_name": "HDFC Bank InstaSavings Account",
            "img": "HDFCBankInstaSavingsAccount.jpg",
            "interest_rate": "3-4%*",
            "minimum_balance": "2500 - 25000",
            "aoc": "0",
            "link": "https://v1.hdfcbank.com/htdocs/common/saving-account/index.html?LGCode=MKTG&mc_id=paid_Affiliate_1348_2860_2860_{sub_aff_id}_&utm_source=Affiliate_1348_2860_2860_{sub_aff_id}_&utm_medium=paid_Affiliate&utm_campaign=NTB_Affiliate_1348_Savings_Account_&utm_content=NTB_SA_IMP_1348_Banner_Ad1#SA_Landing",
            "type": "HDFC Bank"
        },
        {
            "card_name": "ASAP Instant Savings Account",
            "img": "ASAPInstantSavingsAccount.png",
            "interest_rate": "3%",
            "minimum_balance": "NR 15000",
            "aoc": "0",
            "link": "https://leap.axisbank.com/verification?query=5ee36547c0ce0dd6c0a2812d&utm_source=CXAFFDSA&utm_medium=email&utm_campaign=DSA-Affiliate-VKYC&utm_term=2860_2860&utm_content=1348",
            "type": "Axis Bank"
        },
        {
            "card_name": "Equitas Bank Selfe Savings Account",
            "img": "EquitasBankSelfeSavingsAccount.jpg",
            "interest_rate": "7%",
            "minimum_balance": "0",
            "aoc": "0",
            "link": "https://inet.equitasbank.com/Selfe/?tpp=CREDITK12860_2860_{sub_aff_id}_{aff_sub3}",
            "type": "Equitas Small Finance Bank"
        }
    ]);

    const handleChangeBank = (event) => {
        const {
            target: { value },
        } = event;
        setBankName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const handleChangeCard = (event) => {
        const {
            target: { value },
        } = event;
        setCardName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const handleApplyFilter = () => {
        console.log('bankName', bankName);
        let filterData = [];
        let filterByCard = [];
        if (bankName.length !== 0) {
            filterData = copyCardsDetailData.filter((el, index) => {
                return bankName.includes(el.type);
            });
            setCardsDetailData(filterData);
        }

        if (filterData.length == 0) {
            filterData = copyCardsDetailData.filter((el, index) => {
                return cardName.includes(el.interest_rate);
            });
            setCardsDetailData(filterData);
        } else {
            if (cardName.length !== 0) {
                filterByCard = filterData.filter((el, index) => {
                    return cardName.includes(el.interest_rate);
                });
                setCardsDetailData(filterByCard);
            }
        }
    }

    const handleCancelFilter = () => {
        setCardsDetailData(copyCardsDetailData);
    }
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest fnt-sty-nunito">WE FOUND THE BEST SAVING ACCOUNT </h1>
                       <p className="lg:w-2/3 mx-auto leading-relaxed text-base fnt-sty-nunito">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
                    </div>
                    <div className='px-10 mb-10'>
                        <div className='bg-white px-5 shadow-md rounded-md py-5 w-full border-2 border-gray-200'>
                            <div className='flex flex-col sm:flex-row justify-between items-center space-y-5 sm:space-y-0'>
                                <div className='flex flex-col sm:flex-row justify-start items-center space-x-5 space-y-5 sm:space-y-0'>
                                    <p className='text-sm font-bold'>Filter By -</p>
                                    <div className='w-40'>
                                        <FormControl className='w-40'>
                                            <InputLabel id="demo-multiple-checkbox-label">Banks</InputLabel>
                                            <Select
                                                labelId="demo-multiple-checkbox-label"
                                                id="demo-multiple-checkbox"
                                                multiple
                                                value={bankName}
                                                onChange={handleChangeBank}
                                                input={<OutlinedInput label="Banks" />}
                                                renderValue={(selected) => selected.join(', ')}
                                                MenuProps={MenuProps}
                                            >
                                                {names.map((name) => (
                                                    <MenuItem key={name} value={name}>
                                                        <Checkbox checked={bankName.indexOf(name) > -1} />
                                                        <ListItemText primary={name} />
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <div className='w-40'>
                                        <FormControl className='w-40'>
                                            <InputLabel id="demo-multiple-checkbox-label">Interest Rate</InputLabel>
                                            <Select
                                                labelId="demo-multiple-checkbox-label"
                                                id="demo-multiple-checkbox"
                                                multiple
                                                value={cardName}
                                                onChange={handleChangeCard}
                                                input={<OutlinedInput label="Interest Rate" />}
                                                renderValue={(selected) => selected.join(', ')}
                                                MenuProps={MenuProps}
                                            >
                                                {cardnames.map((name) => (
                                                    <MenuItem key={name} value={name}>
                                                        <Checkbox checked={cardName.indexOf(name) > -1} />
                                                        <ListItemText primary={name} />
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                                <div>
                                    <button onClick={() => handleApplyFilter()} className='bg-green-600 text-white rounded-md mr-5 px-4 py-2 text-xs'>
                                        Apply Filters
                                    </button>
                                    <button onClick={() => handleCancelFilter()} className='bg-red-600 text-white rounded-md px-4 py-2 text-xs'>
                                        Clear Filter
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {
                            cardsDetailData.map((el, index) => {
                                return (
                                    <div key={index} className="p-4 lg:w-1/2 w-full">
                                        <div className="bg-white border-2 border-gray-300 rounded-md p-4 h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                            <img alt="team" className="flex-shrink-0 rounded-lg w-48 object-cover object-center sm:mb-0 mb-4" src={`/img/Saving-Account/Campaings/${el.img}`} />
                                            <div className="flex-grow sm:pl-8">
                                                <h2 className="w-full title-font font-bold text-lg  text-indigo-700 fnt-sty-nunito">{el.card_name}</h2>
                                                <h3 className="text-gray-500 mb-1 text-sm fnt-sty-nunito"><span className="text-gray-800 font-bold mb-3 text-sm fnt-sty-nunito">Interest Rate</span> : {el.interest_rate}</h3>
                                                <div className="mb-1 flex flex-col items-center sm:items-start">
                                                    <p className="text-gray-800 font-bold mb-1 text-sm fnt-sty-nunito">Minimum Balance</p>
                                                    <p className="text-gray-500 text-sm fnt-sty-nunito">{el.minimum_balanced}</p>
                                                </div>
                                                <h3 className="text-gray-500 mb-1 text-sm">
                                                    <span className="text-gray-800 font-bold mb-3 text-sm fnt-sty-nunito">
                                                        AOC
                                                    </span> : {el.aoc}
                                                </h3>
                                                <span className="inline-flex">
                                                    <button className="mt-2 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm">
                                                        <a href={el.link} target='_blank'>
                                                            Apply Now
                                                        </a>
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
