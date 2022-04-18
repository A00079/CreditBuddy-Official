import React, { useState } from 'react'
import { DynamicCampaings } from '../../../../components';
export default function Creditcampaigns(props) {

    return (
        <React.Fragment>
            <DynamicCampaings campaignName={'Credit Card'} DB_PATH={'user_form_credit_card'} />
        </React.Fragment>
    )
}




