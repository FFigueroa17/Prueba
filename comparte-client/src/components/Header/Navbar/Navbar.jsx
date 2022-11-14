
import React from "react";

// IMPORTAMOS LOS COMPONENTES

import NavbarButton from "./NavbarButton/NavbarButton";

// IMPORTAMOS EL MODULO CSS

import classes from './Navbar.module.scss';

// IMPORTAMOS LOS RECURSOS 

import Logo from './../../../assets/images/LogoComparteINC.png';


// CREAMOS EL COMPONENTE


const Navbar = () => {
    return (
        <nav>

            <div className={classes["nav-brand-container"]}>
                <figure>
                    <img src={Logo} alt="ComparteINC Logo"></img>
                </figure>
                <h1> ComparteINC </h1>
            </div>

            <div className={classes["nav-links-list"]}>
                <ul>
                    <li><a href='#'> Home </a></li>
                    <li><a href='#'> Contact </a></li>
                </ul>
            </div>

            <NavbarButton/>
        </nav>
    );
}

// EXPORTAMOS EL COMPONENTE

export default Navbar;