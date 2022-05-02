import React, { useState } from 'react'
import { DynamicCampaings } from '../../../../components';
export default function PersonalLoancampaigns(props) {

    return (
        <React.Fragment>
            <DynamicCampaings campaignName={'personalloan'}  DB_PATH={'user_form_personal_loan'} />
        </React.Fragment>
    )
}






