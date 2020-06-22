/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: 'writing' });
        createNodeField({
            node,
            name: 'slug',
            value: `/writing/stories${slug}`,
        });
    }
    if (node.internal.type === `ProjectsYaml`) {
        const slug = createFilePath({ node, getNode, basePath: 'projects' });
        createNodeField({
            node,
            name: 'slug',
            value: `/projects${slug}`,
        });
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      allProjectsYaml {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
    `);
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        actions.createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/story.js`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: node.fields.slug,
            },
        });
    });
    result.data.allProjectsYaml.edges.forEach(({ node }) => {
        actions.createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/project.js`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: node.fields.slug,
            },
        });
    });
}
