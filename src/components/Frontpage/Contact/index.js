import React, { Component } from "react";
import Img from "gatsby-image";

import EmailIcon from '../../../assets/img/icons/email.svg';

export default class FrontpageContact extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        let CoffeeEmojiImg = this.props.CoffeeEmoji ? <Img resolutions={this.props.CoffeeEmoji.resolutions} alt="Coffee emoji" /> : '';

        return (
            <div className="cta gray very padded Frontpage__contact">
                <div className="container centered">
                    <h2 className="text blue">Estoy buscando mi siguiente reto profesional ¿Hablamos? { CoffeeEmojiImg }</h2>
                    <p>Quiero ser parte de proyectos que sean críticos para el éxito de tu compañía.</p>
                    <p><img src={ EmailIcon } alt="Email icon" /><a href="mailto:al.drago@live.com">al.drago@live.com</a></p>
                </div>
            </div>
        );
    }
}