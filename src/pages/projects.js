/** @jsx jsx */
import { Card, jsx } from 'theme-ui';
import { graphql } from "gatsby"

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
                
                <Card key={node.id} sx={{ marginBottom: 4 }}>
                    <h3>
                        <Link to={node.fields.slug}>
                            {node.title}
                        </Link>
                    </h3>
                    <p>{node.description}</p>
                </Card>
                
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
