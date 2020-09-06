import { Link } from 'theme-ui';
import { graphql } from 'gatsby';
import Img from "gatsby-image";
import React from "react";
import Layout from "../components/layout";

import { Link as AppLink } from '../components/link';

export default function Project({ data }) {
    const project = data.projectsYaml;
    return (
        <Layout>
            <AppLink to='/projects'>Back</AppLink>
            <div>
                {data.projectImage && (
                    <Img fluid={data.projectImage.childImageSharp.fluid} />
                )}
                <h1>{project.title}</h1>
                <p>{project.desctiption}</p>
                <Link href={project.linkTo} target='_blank'>Visit</Link>
                <ul>
                    {project.technologiesUsed.map((name, index) => (
                        <li key={index}>{name}</li>
                    ))}
                </ul>
            </div>
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
