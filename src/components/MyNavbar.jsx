import React from "react";
import {Navbar,Nav ,NavItem, UncontrolledDropdown, DropdownToggle, NavbarBrand, NavbarText, DropdownMenu, DropdownItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logoutUser} from '../redux/actions/user';


class MyNavbar extends React.Component {
    render() {
        return (
            <div>
                <Navbar color="dark"
                    light
                    expand="lg"
                    dark>
                        <NavbarBrand>Kidu-KidSpace</NavbarBrand>
                        <Nav>
                            {
                                this.props.userGlobal.username ?
                                <>
                                    <NavItem>
                                        <NavbarText>Hello, {this.props.userGlobal.username}</NavbarText>
                                    </NavItem>
                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret>Pages</DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem divider />
                                                <DropdownItem onClick={this.props.logoutUser}>Logout</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </>
                                :
                                <NavItem>
                                    <NavbarText >
                                        <Link  to="/login">Login</Link> | <Link to="/register">Register</Link>
                                    </NavbarText>
                                </NavItem>
                            }
                        </Nav>
                </Navbar>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userGlobal: state.user
    }
}

const mapDispatchToProps = {
    logoutUser,
}

export default connect (mapStateToProps, mapDispatchToProps) (MyNavbar);