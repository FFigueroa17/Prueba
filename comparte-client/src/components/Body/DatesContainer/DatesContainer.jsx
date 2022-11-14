
// IMPORTAMOS LA LIBRERIA 

import React from "react";

// IMPORTAR EL MODULO CSS

import classes from './DatesContainer.module.scss';

// IMPORTAMOS LOS ICONOS

import users from '../../../assets/images/users-icon.svg';

import search from '../../../assets/images/search-icon.png';

import { MdFemale } from "react-icons/md";

import { MdMale } from "react-icons/md";

import { MdPerson } from "react-icons/md";

import { MdOutlineShowChart } from "react-icons/md";

import { MdClose } from "react-icons/md";

import { MdCheck } from "react-icons/md";


// IMPORTAMOS LAS DEPENDECIAS

import Button from '@mui/material/Button';

// CREAMOS EL COMPONENTE 

const CardContainer = () => {
    return (
        <section className={classes["main-section"]}>
            <div className={classes["box-container"]}>
                <h2> BIENVENIDO ....  </h2>
                <h1> Citas programadas </h1>
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
                            <div className={classes["table-name-icon"]}>
                                <p> OH - </p>
                                <MdClose className={classes["icon"]}/>
                                <Button className={classes["box-button"]}> Asistió </Button>
                            </div>
                            <div className={classes["table-name-icon"]}>
                                <MdFemale className={classes["icon"]}/>
                                <p> Femenino </p>
                            </div>
                        </div>

                        <div className={classes["table-container"]}>
                            <div className={classes["table-name-icon"]}>
                                <MdPerson className={classes["icon"]}/>
                                <p>
                                    Diego Jose
                                </p>
                            </div>
                            <div className={classes["table-name-icon"]}>
                                <p> OH - </p>
                                <MdCheck className={classes["icon"]}/>
                                <Button className={classes["box-button"]}> Asistió </Button>
                            </div>
                            <div className={classes["table-name-icon"]}>
                                <MdMale className={classes["icon"]}/>
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
