import React, { Component } from "react";
import Link from "gatsby-link";

import config from '../config';

import Skills from '../components/Skills';
import PostLoop from '../components/PostLoop';
import FrontpageContact from '../components/Frontpage/Contact';

import BombEmoji from '../assets/img/emoji/bomb.png';
import TeachingEmoji from '../assets/img/emoji/teaching.png';
import RyosukePortrait from '../assets/img/avatar-face-400px.png';

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
                        The artist formerly known as <span className="text blue">Oscar</span> <img src={ BombEmoji } alt="Bomb emoji" />
                    </h1>
                    <h3>
                        Ryosuke meaning <span className="clear">clear</span> mediation.
                    </h3>
                </div>
                <div className="container About__bio">

                    <figure>
                        <img src={RyosukePortrait} />
                    </figure>

                    <aside className="bio">
                        <p>
                            I've been working as a designer and developer for <strong>over 15 years now</strong>, with over a decade of 
                            experience in the cannabis industry. 
                        </p>
                        <p>
                            From engineering <a href="http://kushy.net">web apps</a> and e-commerce solutions, 
                            to designing brands and products, to producing innovative digital media, and even creating <strong>famous <a href="http://weedporndaily.tumblr.com/tagged/gif">ganja related GIFs</a></strong> -- my experience 
                            as an <strong>entrepreneur</strong> has broadened my skillset substantially.
                        </p>
                    </aside>
                </div>

                <Skills />


                {/*------- Featured image -------*/}
                <div className="container">
                    <h2 className="Title text blue">My recent work</h2>
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