import React, { Component } from "react";

import IdeaEmoji from '../../assets/img/emoji/idea.png';

export default class Skills extends Component {
    constructor(props) {
        super(props);

        this.state = {
            more: false
        }

        this.more = this.more.bind(this);
    }

    more() {
        this.setState({
            more: !this.state.more
        });
    }

    render() {
        let { more } = this.state;

        let seeMore = more ? 'show' : 'hide';

        const skills = [
            { class: 'html5', name: 'HTML5' },
            { class: 'css3', name: 'CSS3' },
            { class: 'sass', name: 'SASS' },
            { class: 'js', name: 'JavaScript' },
            { class: 'es6', name: 'ES6' },
            { class: 'react', name: 'React' },
            { class: 'redux', name: 'Redux' },
            { class: 'angular', name: 'Angular' },
            { class: 'vue', name: 'Vue' },
            { class: 'gatsby', name: 'Gatsby' },
            { class: 'grunt', name: 'Grunt' },
            { class: 'gulp', name: 'Gulp' },
            { class: 'webpack', name: 'Webpack' },
            { class: 'jquery', name: 'jQuery' },
            { class: 'node', name: 'NodeJS' },
            { class: 'npm', name: 'NPM' },
            { class: 'yarn', name: 'Yarn' },
            { class: 'babel', name: 'Babel' },
            { class: 'wordpress', name: 'Wordpress' },
            { class: 'shopify', name: 'Shopify' },
            { class: 'api', name: 'APIs' },
            { class: 'cms', name: 'CMS' },
            { class: 'ecommerce', name: 'E-Commerce' },
            { class: 'git', name: 'Git' },
            { class: 'photoshop', name: 'Adobe Photoshop' },
        ];

        let skillsList = skills.map((skill) => (
            <li className={skill.class}>
                {skill.name}
            </li>
        ));

        return(
            <div className="container row Skills">
                <p>Mis <strong>conocimientos</strong> incluyen las siguientes <strong>tecnologías</strong> <img src={IdeaEmoji} alt="Idea emoji" height="35" style={{paddingTop: "5px"}} /></p>
                <section className={'TagCloud skills ' + seeMore}>
                    <ul>
                        { skillsList }
                    </ul>
                </section>
                <button className="btn more" onClick={ this.more }>See more</button>
            </div>
        );
    }
}