/** @jsx jsx */

import { graphql } from 'gatsby';
import { Heading, jsx } from 'theme-ui';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <article>
      <section sx={{ textAlign: 'center' }}>
        <Heading as="h1">{data.markdownRemark.frontmatter.title}</Heading>
        <Heading as="h4">{data.markdownRemark.frontmatter.subtitle}</Heading>
      </section>
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
          '> *': {
            marginY: 6,
          },
        }}
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      />
    </article>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query {
    markdownRemark(fields: { slug: { eq: "/landing/" } }) {
      html
      frontmatter {
        title
        subtitle
      }
    }
  }
`;
