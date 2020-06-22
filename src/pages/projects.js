import { graphql } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from '../components/link';


export default function Projects({ data }) {
    return (
	      <Layout>
	          <SEO title='Projects' />
	          <h1>Projects</h1>
            <h2>{data.allProjectsYaml.totalCount} Projects</h2>
	          <Link to="/">Home</Link>
            {data.allProjectsYaml.nodes.map(node => (
                
                <div key={node.id} style={{ border: '1px solid gray', borderRadius: 3 }}>
                    <h3>
                        <Link to={node.fields.slug}>
                            {node.title}
                        </Link>
                    </h3>
                    <p>{node.description}</p>
                </div>
                
            ))}
	      </Layout>
    );
}

export const query = graphql`
    query {
        allProjectsYaml {
            nodes {
                id
                title
                description
                fields {
                    slug
                }
            }
            totalCount
        }
    }
`;
