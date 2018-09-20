import React, { Component } from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";

import config from '../config';

import ServicesGrid from '../components/ServicesGrid';
import Featured from '../components/Featured';
import PostLoop from '../components/PostLoop';
import FrontpageContact from '../components/Frontpage/Contact';

export default class Frontpage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: this.props.data,
    }
  }

  render() {
    let { data } = this.state;
    const skip = true;

    const { 
      blog, 
      projects, 
      PeaceEmoji, 
      ThoughtCloudEmoji, 
      CoffeeEmoji, 
      RyosukeAvatar
    } = data;
    
    return (
      <div className="Frontpage pt2">
        <div className="container Frontpage__hero">
          <h1>
            Hola, soy <span className="text blue">Alberto</span> <Img resolutions={PeaceEmoji.resolutions} alt="Peace sign emoji" />
            <br />Diseñador, desarrollador,
            <br /> <span className="text blue">&amp;</span> entusiasta de la tecnología <Img resolutions={ThoughtCloudEmoji.resolutions} alt="Thought cloud emoji" />
          </h1>
        </div>
        <div className="container Frontpage__about">
          <figure>
            <Img resolutions={RyosukeAvatar.resolutions} alt="Ryosuke in white Japanese font on blue background" />
          </figure>
          <p>Soy un <strong>Diseñador</strong> e <strong>Ingeniero Front-End</strong> actualmente viviendo en la Ciudad de México. Me encanta todo lo que 
          tiene que ver con <strong className="react">React</strong>, <strong className="angular">Angular</strong>, &amp; <strong className="vue">Vue</strong>.</p>
        </div>

        <ServicesGrid />

        {/*------- Featured image -------*/}
        <div className="container">
          <h2 className="Title">Lo Último de Mi Blog</h2>        
        </div>
        <Featured post={blog.edges[0].node} />

        {/*------- Posts loop -------*/}
        <PostLoop loop={blog.edges} skip={skip} />
        <div className="container centered">
          <Link to={'blog'} className="btn">El Resto de Mi Blog</Link>
        </div>

        {/*------- Projects loop -------*/}
        <div className="container pt4">
          <h2 className="Title">Proyectos Open Source Recientes</h2>
        </div>
        <PostLoop loop={projects.edges} skip={!skip} />
        <div className="container centered" style={{marginBottom : "50px"}}>
          <Link to={'projects'} className="btn">Más Proyectos</Link>
        </div>

        <FrontpageContact CoffeeEmoji={ CoffeeEmoji } />

      </div>
    );
  }
};

export const query = graphql`
  query IndexQuery {
    blog: allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: DESC}, 
      limit: 3
      filter:{frontmatter:{section:{eq: "blog"}}}
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
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
          excerpt
        }
      }
    },
    projects: allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: DESC}, 
      limit: 2
      filter:{frontmatter:{section:{eq: "project"}}}
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
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
    },
    PeaceEmoji: imageSharp (id: { regex: "/peace.png/" }) {
          ...emojiImageFields
    },
    ThoughtCloudEmoji: imageSharp (id: { regex: "/thought-cloud.png/" }) {
          ...emojiImageFields
    },
    CoffeeEmoji: imageSharp (id: { regex: "/coffee.png/" }) {
      resolutions(width: 36, height: 36) {
        ...GatsbyImageSharpResolutions
      }
    },
    RyosukeAvatar: imageSharp (id: { regex: "/ryosuke-avatar-128.png/" }) {
      resolutions(width: 170, height: 170) {
        ...GatsbyImageSharpResolutions
      }
    },
  }

  fragment emojiImageFields on ImageSharp {
    resolutions(width: 54, height: 54) {
      ...GatsbyImageSharpResolutions
    }
  }
`;