/** @jsx jsx */
import { Card, Heading, jsx, Text } from 'theme-ui';

import { graphql } from 'gatsby';

import Layout from 'components/layout';
import SEO from 'components/seo';
import { Link } from 'components/link';

export default function Stories({ data }) {
  return (
    <Layout>
      <SEO title="Writing" />
      <section sx={{ marginBottom: 5 }}>
        <Heading as="h1">Stories</Heading>
        <Heading as="h3">
          Total Stories Written: {data.allMarkdownRemark.totalCount}
        </Heading>
      </section>
      {data.allMarkdownRemark.nodes.map(node => (
        <Card key={node.id} sx={{ marginBottom: 5 }} variant="list">
          <Heading>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </Heading>
          <Text variant="caps">
            <em>{node.frontmatter.date}</em>
          </Text>
          <Text variant="default">Time to read: {node.timeToRead} min</Text>
          <Text
            variant="default"
            sx={{
              marginTop: 3,
              fontFamily: 'monospace',
              fontWeight: 'bold',
            }}
          >
            {node.excerpt}
          </Text>
        </Card>
      ))}
      <Link to="/writing" variant="mono">
        Back
      </Link>
    </Layout>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "//writing/stories//" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        id
        timeToRead
        excerpt(pruneLength: 100)
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
        }
        fields {
          slug
        }
      }
      totalCount
    }
  }
`;
