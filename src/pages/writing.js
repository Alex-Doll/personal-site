import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"


export default function Writing({ data }) {
    return (
	      <Layout>
	          <SEO title='Writing' />
	          <h1>Writing</h1>
            <h2>{data.allMarkdownRemark.nodes.length} Stories</h2>
	          <Link to="/">Home</Link>
            {data.allMarkdownRemark.nodes.map(node => (
                
                <div key={node.id} style={{ border: '1px solid gray', borderRadius: 3 }}>
                    <h3>
                        <Link to={node.fields.slug}>
                            {node.frontmatter.title}
                        </Link>
                        {' '}- <em>{node.frontmatter.date}</em></h3>
                    <h4>Time to read: {node.timeToRead} min</h4>
                </div>
                
            ))}
	      </Layout>
    );
}

export const query = graphql`
    query MyQuery {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            nodes {
                id
                timeToRead
                html
                frontmatter {
                    title
                    date(formatString: "MMMM D, YYYY")
                }
                fields {
                    slug
                }
            }
        }
    }

`;
