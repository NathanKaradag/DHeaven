import React from "react";
import './random.css'
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

class NavigationBar extends React.Component {
    changestate = (event) => {
        const x = document.getElementsByClassName("menu-icon");

        console.log(x[0].checked);
        

    }

    realchangestate = (e) => {
        const x = document.getElementsByClassName("menu-icon");
        x[0].checked = false;
    }
    
    render () {
        return(
            <div>
                
                <input class="menu-icon" type="checkbox" onClick={(e) => this.changestate(e)} id="menu-icon" name="menu-icon"/>
                <label for="menu-icon"></label>
                <nav class="nav"> 		
                    <ul class="pt-5">
                        <li><NavLink onClick={() => this.realchangestate()} tag={Link} to="/">Home</NavLink></li>
                        <li><NavLink onClick={() => this.realchangestate()} tag={Link} to="/counter">Counter</NavLink></li>
                        <li><NavLink onClick={() => this.realchangestate()} tag={Link} to="/fetch-data">Fetch data</NavLink></li>
                        <li><NavLink onClick={() => this.realchangestate()} tag={Link} to="/login">Login</NavLink></li>
                    </ul>
                </nav>

                
            </div>
        )
    }
}

export default NavigationBar;