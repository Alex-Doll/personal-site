import { Link } from 'theme-ui';
import { graphql } from 'gatsby';
import React from "react";
import Layout from "../components/layout";

import { Link as AppLink } from '../components/link';

export default function Project({ data }) {
    const project = data.projectsYaml;
    return (
        <Layout>
            <AppLink to='/projects'>Back</AppLink>
            <div>
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
    query($slug: String!) {
        projectsYaml(fields: { slug: { eq: $slug } }) {
            imgSrc
            title
            description
            linkTo
            technologiesUsed
        }
    }
`;
