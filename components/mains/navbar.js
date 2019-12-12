import React, { Component } from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNav, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { Config } from "../../config/Config";

class Navbar extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }


    addMenuItem(item, index) {
        let isActive = index === 0;
        if (item.submenus) {
            return this.addDropDownMenu(item)
        }

        return isActive ? (
            <MDBNavItem key={"nav-link-me-"+ index} active>
               {<a className="nav-link text-black-50" href={item.href}>{item.label}</a>}
            </MDBNavItem>) :
            (<MDBNavItem key={"nav-link-me-"+index}>
                {<a className="nav-link text-black-50" href={item.href}>{item.label}</a>}
            </MDBNavItem>
            );
    }


    addDropDownMenu(listItem) {
        return (
            <MDBNavItem key={listItem.label}>
                <MDBDropdown size="sm">
                    <MDBDropdownToggle nav caret>
                        <span className="mr-2 text-black-50">{listItem.label}</span>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu right flip>
                        {listItem.submenus.map((item, key) => (
                            <MDBDropdownItem key={"nav-sub-"+ key} size="sm">
                               <a className="nav-link text-black-50" href={item.href}>{item.label}</a>
                            </MDBDropdownItem>
                        ))}
                    </MDBDropdownMenu>
                </MDBDropdown>
            </MDBNavItem>
        )
    }


    render() {
        return (
            <MDBNavbar light color="white" expand="lg" fixed="top" className="font-weight-bolder">
                <MDBNavbarBrand>
                <a href="/"> Next Bare Bone
                    {/* <img  src={require('../../public/favicon.ico')} className="pl-3" width="200" alt="My responsive image."/> */}
                </a>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} className="justify-content-center w-20" navbar>

                    <MDBNav className="justify-content-around">
                        {Config.MENU_LIST.map((item, index) => (this.addMenuItem(item, index)))}
                    </MDBNav>
                </MDBCollapse>
                <MDBNavbarNav right className="d-none d-sm-block">
                <MDBNavItem>
                    <a className="btn btn-primary" href="/contactus">Book Appointment</a>
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBNavbar>
        );
    }
}

export default Navbar;