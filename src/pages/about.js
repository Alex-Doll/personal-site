/** @jsx jsx */

import { graphql } from 'gatsby';
import { Heading, jsx } from 'theme-ui';

import Layout from 'components/layout';
import SEO from 'components/seo';
import { Link } from 'components/link';

function About({ data }) {
  return (
    <Layout>
      <SEO title="About" />

      <article
        sx={{
          marginTop: 4,
          marginBottom: 6,
          textAlign: 'center',
        }}
      >
        <Heading as="h1">{data.markdownRemark.frontmatter.title}</Heading>
        <hr
          sx={{
            marginY: 4,
            border: 0,
            height: 1,
            backgroundImage: theme =>
              `linear-gradient(to right, ${theme.colors.background}, ${theme.colors.muted}, ${theme.colors.background})`,
          }}
        />
        <div
          sx={{
            variant: 'markdown.page',
          }}
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      </article>

      <Link to="/">Home</Link>
    </Layout>
  );
}

export default About;

export const query = graphql`
  query {
    markdownRemark(fields: { slug: { eq: "/about/" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
