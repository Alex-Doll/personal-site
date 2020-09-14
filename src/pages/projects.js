/** @jsx jsx */
import { Card, Grid, Heading, jsx } from 'theme-ui';
import { graphql, navigate } from "gatsby"
import Img from 'gatsby-image';

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from '../components/link';


export default function Projects({ data }) {
    return (
	      <Layout>
	          <SEO title='Projects' />
	          <Heading as='h1'>Projects ({data.allProjectsYaml.totalCount})</Heading>
            <Grid columns={3} sx={{ marginY: 4 }}>
                {data.allProjectsYaml.nodes.map(node => (
                    <Card key={node.id}
                        variant='actionable'
                        onClick={() => navigate(node.fields.slug)}
                    >
                        <Img
                            fluid={getProjectImage(node.imageSrc)}
                            style={{
                                borderRadius: 'inherit',
                                borderBottomLeftRadius: 0,
                                borderBottomRightRadius: 0,
                            }}
                        />
                        <div sx={{ padding: 3 }}>
                            <Heading as='h4' sx={{ textAlign: 'center', marginY: 4, color: 'primary' }}>
                                {node.title}
                            </Heading>
                            <p sx={{ textAlign: 'center', marginY: 3, fontSize: 2 }}>{node.description}</p>
                        </div>
                    </Card>
                ))}
            </Grid>
            <Link to="/">Home</Link>
	      </Layout>
    );

    function getProjectImage(imageSrc) {
        const relativePath = /\/assets\/(.*)/.exec(imageSrc)[1];
        const file = data.allFile.nodes.find(node => node.relativePath === relativePath);
        return file.childImageSharp.fluid;
    }
}

export const query = graphql`
    query {
        allProjectsYaml {
            nodes {
                id
                title
                description
                imageSrc
                fields {
                    slug
                }
            }
            totalCount
        }
        allFile {
            nodes {
                relativePath
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
`;
