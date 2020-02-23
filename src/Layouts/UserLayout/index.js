import React from 'react'
import HeaderComponent from '../HeaderDefault'
import NavbarComponent from '../NavBarDefault'

const UserLayout = (props) => {
    return (
       <>   
        <HeaderComponent/>
        <NavbarComponent/>
            {props.children}
       </>
    )
}

export default UserLayout
