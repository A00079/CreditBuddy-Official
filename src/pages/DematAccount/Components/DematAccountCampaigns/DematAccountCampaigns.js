import React, { useState } from 'react'
import { DynamicCampaings } from '../../../../components';
export default function DematAccountcampaigns(props) {

    return (
        <React.Fragment>
            <DynamicCampaings campaignName={'Demat Account'} DB_PATH={'user_form_demat_account'} />
        </React.Fragment>
    )
}




