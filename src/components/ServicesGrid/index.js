import React, { Component } from "react";

import UXIcon from '../../assets/img/icons/ux.svg'
import FullStackIcon from '../../assets/img/icons/fullstack.svg'

export default class ServicesGrid extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="container Frontpage__services">
                <section className="container">

                    <article className="col">
                        <div className="services">
                            <img src={FullStackIcon} alt="Full Stack icon" />
                            <h3>Ingeniero Front-End</h3>
                            <p>Tengo +5 años de experiencia trabajando en el Front-End. Me apasiona mucho el desarrollo web y me gusta ser parte de equipos de trabajo que se mueven rápido. El Front-End evoluciona constantemente, así que también me gusta mantenerme al día con las tecnologías de vanguardia. </p>
                        </div>
                    </article>

                    
                    <article className="col">
                        <div className="services">
                            <img src={UXIcon} alt="UX icon" />
                            <h3>Diseñador UX/UI</h3>
                            <p>Adicional al código de las aplicaciones que he realizado profesionalmente, me ha tocado diseñar la interfaz de los usuarios, asegurándome de que tengan una experiencia que se ajusta a sus expectativas y a las de los dueños de las aplicaciones.</p>
                        </div>
                    </article>

                </section>
            </div>
        );
    }
}