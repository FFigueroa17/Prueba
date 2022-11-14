
// IMPORTAMOS LA LIBRERIA 

import React from "react";

// IMPORTAR EL MODULO CSS

import classes from './CardContainer.module.scss';

// IMPORTAMOS LOS ICONOS

import points from '../../../../assets/images/time_line.svg';

import users from '../../../../assets/images/users-icon.svg';

// IMPORTAMOS LAS DEPENDECIAS

import { Button } from '@mui/material/Button';

// CREAMOS EL COMPONENTE 

const CardContainer = () => {
    return (
        <section className={classes["image-section"]}>
            <div className={classes["card"]}>
                <h1> Registro de puntaje </h1>
                <p> En esta seccion podras encontrar el registro de puntos de todos los usuarios. </p>
                <figure>
                    <img src={points} alt="ComparteINC Logo"></img>
                </figure>
                <Button className={classes["card-button"]}> Ingresar </Button>
            </div>
            <div className={classes["card"]}>
                <h1> Registro de usuarios </h1>
                <p> En esta seccion podras encontrar el registro de  la lista de usuarios. </p>
                <figure>
                    <img src={users} alt="ComparteINC Logo"></img>
                </figure>
                <Button className={classes["card-button"]}> Ingresar </Button>
            </div>
        </section>
    );
};

// EXPORTAMOS EL COMPONENTE

export default CardContainer;
