import React from 'react'
import HeaderLayout from '../HeaderDefault'

const UserLayout = ({...props}) => {
    return (
        <>
        <HeaderLayout/>
            {props.children}   
        </>
    )
}

export default UserLayout
