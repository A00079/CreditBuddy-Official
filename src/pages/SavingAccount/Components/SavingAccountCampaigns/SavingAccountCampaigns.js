import React, { useState } from 'react'
import { DynamicCampaings } from '../../../../components';
export default function SavingAccountCampaigns(props) {

    return (
        <React.Fragment>
            <DynamicCampaings campaignName={'savingaccount'} DB_PATH={'user_form_saving_account'} />
        </React.Fragment>
    )
}





