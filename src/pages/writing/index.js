/** @jsx jsx */
import { Heading, jsx, Text } from 'theme-ui';

import { graphql } from 'gatsby';

import Layout from 'components/layout';
import SEO from 'components/seo';
import { Link } from 'components/link';

export default function Writing({ data }) {
  const latestStory = data.allMarkdownRemark.nodes[0];

  return (
    <Layout>
      <SEO title="Writing" />
      <Heading as="h1">Writing</Heading>
      <ul sx={{ marginY: 4 }}>
        <li>
          <Link to="/writing/stories" variant="mono">
            Stories
          </Link>
        </li>
        <li>
          <Link to="/writing/references" variant="mono">
            References
          </Link>
        </li>
      </ul>
      <section sx={{ marginY: 5 }}>
        <Heading>
          Latest Story -{' '}
          <Link to={latestStory.fields.slug}>
            {latestStory.frontmatter.title}
          </Link>
        </Heading>
        <Text variant="caps">
          Published On <em>{latestStory.frontmatter.date}</em> (
          {latestStory.timeToRead} min)
        </Text>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1
      filter: { fields: { slug: { regex: "//writing/stories//" } } }
    ) {
      nodes {
        id
        timeToRead
        html
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
