
// IMPORTAMOS LA LIBRERIA 

import React from "react";

// IMPORTAR EL MODULO CSS

import classes from './Body.module.scss';

// IMPORTAMOS EL COMPONENTE CARD CONTEINER

// import CardContainer from "../CardContainer/CardContainer";

// import CardContainer from "./MainContainer/CardContainer/CardContainer"

import UserContainer from "./UserContainer/UserContainer";

import PointsContainer from "./PointsContainer/PointsContainer";

import DatesContainer from "./DatesContainer/DatesContainer";

// CREAMOS EL COMPONENTE 

const Body = () => {
    return (
        <section className = {classes["body"]}>
            <DatesContainer/>
        </section>
    );
};

// EXPORTAMOS EL COMPONENTE

export default Body;
