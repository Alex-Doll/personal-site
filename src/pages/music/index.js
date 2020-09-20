/** @jsx jsx */
import { Card, Heading, jsx, Text } from 'theme-ui';

import { graphql } from 'gatsby';

import Layout from 'components/layout';
import SEO from 'components/seo';
import { Link } from 'components/link';

function Music({ data }) {
  const albums = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <SEO title="Music" />
      <Heading as="h1">Music</Heading>
      <section>
        <Link to="/music/references">References for Making Music</Link>
      </section>
      <section>
        <Heading as="h2" sx={{ marginTop: 5, marginBottom: 4 }}>
          Albums ({data.allMarkdownRemark.totalCount}):
        </Heading>
        {albums.map(album => (
          <Card key={album.id} sx={{ marginBottom: 5 }} variant="list">
            <Heading>
              <Link to={album.fields.slug}>{album.frontmatter.title}</Link>
            </Heading>
            <Text variant="caps">
              <em>{album.frontmatter.date}</em>
            </Text>
            <Text
              variant="default"
              sx={{
                marginTop: 3,
                fontFamily: 'monospace',
                fontWeight: 'bold',
              }}
            >
              {album.excerpt}
            </Text>
          </Card>
        ))}
      </section>
    </Layout>
  );
}

export default Music;

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "//music/albums//" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        id
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
