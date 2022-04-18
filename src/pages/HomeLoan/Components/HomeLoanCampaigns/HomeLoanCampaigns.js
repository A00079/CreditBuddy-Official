import React, { useState } from 'react'
import { DynamicCampaings } from '../../../../components';
export default function HomeLoancampaigns(props) {

    return (
        <React.Fragment>
            <DynamicCampaings campaignName={'Demat Account'} DB_PATH={'user_form_home_loan'} />
        </React.Fragment>
    )
}




