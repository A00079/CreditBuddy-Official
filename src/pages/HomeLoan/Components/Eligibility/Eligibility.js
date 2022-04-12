import React from 'react'

export default function Eligibility(props) {

    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Eligibility</h2>
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-indigo-600">Eligibility Criteria</h1>
                        <p className="lg:w-full mx-auto px-20 leading-relaxed text-base">Potential borrowers must meet certain home loan eligibility criteria before applying for a home loan to experience hassle-free loan processing. The criteria laid down include parameters related to age, income, employment status and stability, and property value.</p>
                        <p className="lg:w-full mx-auto px-20 leading-relaxed text-base mt-3">Both self-employed and salaried individuals can avail of credits against separate sets of home loan eligibility requirements. Bajaj Housing Finance keeps home loan eligibility criteria simple to improve the loan’s accessibility to borrowers. Check home loan eligibility for both salaried and self-employed individuals below and apply as per your profile.</p>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Applicant Age</h2>
                            <p className="leading-relaxed text-base mb-4">An individual’s age determines a suitable tenor for the home loan. Applicants at the onset of their career can conveniently avail of the loan for an extended tenor due to their repayment potential for a long term. Lenders, thus, cap the maximum borrowing age for salaried and self-employed applicants to reduce the risk of default in repayment.</p>
                            
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Credit Profile and Score</h2>
                            <p className="leading-relaxed text-base mb-4">An applicant’s credit profile and score are other essential home loan eligibility parameters that help lenders identify the risk involved in extending the loan. Individuals with a high credit score of over 750 and a healthy credit profile of timely repayments stand a better chance of receiving prompt approval for a housing loan.</p>
                            
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Employment Status/Business Stability</h2>
                            <p className="leading-relaxed text-base mb-4">Based on the applicant’s profile, financial institutions also check their income stability. Employment of 3+ years for salaried applicants depicts a stable income source and an increased propensity for timely repayment.Similarly, self-employed individuals with a current business vintage of 5+ years depict suitable home loan eligibility with stable occupation and a reliable income for timely repayment.</p>
                            
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Condition of the Property</h2>
                            <p className="leading-relaxed text-base mb-4">The mortgaged property’s condition, current market value, and resale value also determine a borrower’s eligibility for a housing loan. Properties with all amenities in their vicinity and situated in prime locations stand a better chance of raising high loan value, and vice versa. Lenders also consider a property’s age as a contributing factor in determining the maximum loan amount they can extend. Properties constructed recently carry a higher propensity for a sizeable loan amount.</p>
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
