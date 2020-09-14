/** @jsx jsx */

import { graphql } from 'gatsby';
import Img from "gatsby-image";
import { Heading, Link, jsx } from 'theme-ui';

import Layout from "../components/layout";

import { Link as AppLink } from '../components/link';

export default function Project({ data }) {
    const project = data.projectsYaml;
    return (
        <Layout>
            <Heading as='h1' sx={{ textAlign: 'center' }}>{project.title}</Heading>
            <hr
                sx={{
                    marginY: 4,
                    border: 0,
                    height: 1,
                    backgroundImage: theme => `linear-gradient(to right, ${theme.colors.background}, ${theme.colors.muted}, ${theme.colors.background})`,
                }}
            />
            <div sx={{
                display: 'flex',
                marginTop: 4,
                marginBottom: 6,
                alignItems: 'center',
            }}>
                {data.projectImage && (
                    <Img
                        style={{ flexGrow: 1, flexBasis: 0 }}
                        fluid={data.projectImage.childImageSharp.fluid}
                    />
                )}
                <div
                    sx={{
                        marginLeft: 5,
                        display: 'flex',
                        flexDirection: 'column',
                        flexBasis: 0,
                        flexGrow: 1,
                    }}
                >
                    <Link
                        sx={{
                            width: '100%',
                            textAlign: 'center',
                            fontSize: 5,
                        }}
                        href={project.linkTo}
                        target='_blank'
                    >
                        View App
                    </Link>
                    <p sx={{ marginY: 5 }}>{project.description}</p>
                    <Heading as='h4' sx={{ marginBottom: 3 }}>Technologies Used:</Heading>
                    <ul>
                        {project.technologiesUsed.map((name, index) => (
                            <li key={index}>{name}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <AppLink to='/projects'>Back</AppLink>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!, $imageSrc: String) {
        projectsYaml(fields: { slug: { eq: $slug } }) {
            title
            description
            imageSrc
            linkTo
            technologiesUsed
        }
        projectImage: file(relativePath: {eq: $imageSrc}) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;
