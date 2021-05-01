import React from 'react'
import { HiShoppingCart } from 'react-icons/hi'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrapper, SideBtnWrap, SideIcon, SideIconLink } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
                    <SidebarLink to='products' onClick={toggle}>Products</SidebarLink>
                    <SidebarLink to='services' onClick={toggle}>Services</SidebarLink>
                    <SidebarLink to='contact' onClick={toggle}>Contact</SidebarLink> 
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">
                        Sign In
                    </SidebarRoute> 
                </SideBtnWrap>
                <SideIcon><SideIconLink to='/cart'><HiShoppingCart /></SideIconLink></SideIcon>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
