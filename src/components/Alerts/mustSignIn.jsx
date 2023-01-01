import { Alert } from 'flowbite-react'
import React from 'react'
import Icon from './assets/info-icon.svg'
import{InformationCircleIcon} from '@heroicons/react/24/solid'

export const MustSignIn = () => {
    return (
        <Alert
            color="failure"
            icon={
                InformationCircleIcon}
        >
            <span>
                <span className="font-medium">
                    Auth alert!
                </span>
                {' '}you must sign in before you can access this page.
            </span>
        </Alert>
    )
}
