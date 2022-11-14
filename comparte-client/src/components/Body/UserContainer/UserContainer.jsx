
// IMPORTAMOS LA LIBRERIA 

import React from "react";

// IMPORTAR EL MODULO CSS

import classes from './UserContainer.module.scss';

// IMPORTAMOS LOS ICONOS

import users from '../../../assets/images/users-icon.svg';

import search from '../../../assets/images/search-icon.png';

import { MdFemale } from "react-icons/md";

import { MdMale } from "react-icons/md";

import { MdPerson } from "react-icons/md";


// IMPORTAMOS LAS DEPENDECIAS

import Button from '@mui/material/Button';

// CREAMOS EL COMPONENTE 

const CardContainer = () => {
    return (
        <section className={classes["main-section"]}>
            <div className={classes["box-container"]}>
                <h2> BIENVENIDO AL  </h2>
                <h1> Registro de usuarios</h1>
                <div className={classes["search-box"]}>
                    <input type=" text " placeholder=" Buscar usuario..."></input>
                    <Button className={classes["search-button"]}>
                        <figure>
                            <img src={search} alt="Search logo"></img>
                        </figure>
                    </Button>
                </div>
                <div className={classes["table-section"]}>
                    <div className={classes["table-box"]}>
                        <div className={classes["table-container"]}>
                            <div className={classes["table-name-icon"]}>
                                <MdPerson className={classes["icon"]}/>
                                <p>
                                    Claudia Maria
                                </p>
                            </div>
                            <p>
                                OH -
                            </p>
                            <p>
                                7606-9203
                            </p>
                            <div className={classes["table-name-icon"]}>
                                <MdFemale className={classes["icon"]}/>
                                <p> Femenino </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Button className={classes["box-button"]}> Regresar </Button>
            </div>
        </section>
    );
};

// EXPORTAMOS EL COMPONENTE

export default CardContainer;
