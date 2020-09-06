/** @jsx jsx */

import { graphql } from 'gatsby';
import { Heading, jsx } from 'theme-ui';

import Layout from 'components/layout';
import { Link as AppLink } from 'components/link';
import SEO from 'components/seo';

export default function References({ data }) {
    return (
        <Layout>
            <SEO title='Writing References' />

            <article
                sx={{
                    marginTop: 4,
                    marginBottom: 6,
                }}
            >
                <Heading as='h1' sx={{ textAlign: 'center' }}>{data.markdownRemark.frontmatter.title}</Heading>
                <hr
                    sx={{
                        marginY: 4,
                        border: 0,
                        height: 1,
                        backgroundImage: theme => `linear-gradient(to right, ${theme.colors.background}, ${theme.colors.muted}, ${theme.colors.background})`,
                    }}
                />
                <div
                    sx={{
                        variant: 'markdown.references',
                    }}
                    dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
                />
            </article>

            <AppLink to='/writing' variant='mono'>Back</AppLink>
        </Layout>
    );
}

export const query = graphql`
    query {
        markdownRemark(fields: { slug: { eq: "/writing/references/" } }) {
            html
            frontmatter {
                title
            }
        }
    }
`;
