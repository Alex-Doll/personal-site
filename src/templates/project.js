import { graphql } from 'gatsby';
import React from "react";
import Layout from "../components/layout";

import { Link } from '../components/link';

export default function Project({ data }) {
    const project = data.projectsYaml;
    return (
        <Layout>
            <Link to='/projects'>Back</Link>
            <div>
                <h1>{project.title}</h1>
                <p>{project.desctiption}</p>
                <a href={project.linkTo} taget='_blank'>Visit</a>
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
