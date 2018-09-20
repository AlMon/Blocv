import React, { Component } from "react";
import Link from "gatsby-link";

import config from '../config';

import Skills from '../components/Skills';
import PostLoop from '../components/PostLoop';
import FrontpageContact from '../components/Frontpage/Contact';

import OkEmoji from '../assets/img/emoji/ok.png';
import TeachingEmoji from '../assets/img/emoji/teaching.png';
import AlMonPortrait from '../assets/img/avatar-face-400px.png';

export default class Frontpage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: this.props.data,
        }
    }

    render() {

        let { data } = this.state;
        const skip = false;

        return (
            <div className="About pt2">
                <div className="container Frontpage__hero">
                    <h1>
                        Mi nombre es <span className="text blue">Alberto Mondragón</span>
                    </h1>
                    <h3>
                        Me encanta el desarrollo web <span className="text blue">Front-End</span> <img src={OkEmoji} alt="Ok emoji" />
                    </h3>
                </div>
                <div className="container About__bio">

                    <figure>
                        <img src={AlMonPortrait} />
                    </figure>

                    <aside className="bio">
                        <p>
                        He sido <strong className="text blue">diseñador y desarrollador web de Front-End</strong> por 5 años, me encanta aprender y 
                        adaptarme a los constantes cambios que caracterizan al campo del Web Development.
                        </p>
                        <p>
                        He trabajado desarrollando <strong className="text blue">apps</strong> y websites para una serie de industrias variadas, desde el <strong className="text blue">e-commerce</strong> hasta 
                        los <strong className="text blue">anuncios</strong> e incluso <strong className="text blue">bienes raíces</strong> y muchas más.
                        </p>
                        <p> 
                        Me <strong className="text blue">apasiona</strong> mi profesión y me encanta pertenecer a equipos dinámicos y afrontar nuevos <strong className="text blue">retos</strong> para extender mis habilidades.
                        </p>
                    </aside>
                </div>

                <Skills />


                {/*------- Featured image -------*/}
                <div className="container">
                    <h2 className="Title text blue">Proyectos Open Source</h2>
                </div>
                {/*------- Posts loop -------*/}
                <PostLoop loop={data.projects.edges} skip={skip} />

                <FrontpageContact />

            </div>
        );
    }
};


export const query = graphql`
  query AboutQuery {
    projects: allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: DESC}, 
      limit: 4
      filter:{frontmatter:{section:{eq: "project"}}}
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            cover_image {
              publicURL
              childImageSharp {
                sizes(maxWidth: 1240 ) {
                  srcSet
                }
              }
            }
            section
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;