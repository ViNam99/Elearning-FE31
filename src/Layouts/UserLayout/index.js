import React from 'react'
import HeaderComponent from '../HeaderDefault'
import NavbarComponent from '../NavBarDefault'
import FooterComponent from '../FooterDefault'

const UserLayout = (props) => {
    return (
       <>   
        <HeaderComponent/>
        <NavbarComponent/>
            {props.children}
        <FooterComponent/>
       </>
    )
}

export default UserLayout
