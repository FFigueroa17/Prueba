import React from 'react';

import classes from './NavbarButton.module.scss';

import Button from '@mui/material/Button';

import { MdPerson } from "react-icons/md";

const NavbarButton = () => {
    return (
        <div className={classes["nav-button-container"]}>
                <Button className={classes["nav-button"]}>
                    <MdPerson className={classes["nav-icon"]}/>
                    Log in
                </Button>
        </div>
    );
}

export default NavbarButton;