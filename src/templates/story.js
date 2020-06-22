/** @jsx jsx */

import { graphql } from 'gatsby';
import { Heading, jsx } from 'theme-ui';

import Layout from "../components/layout";

import { Link } from '../components/link';

export default function Story({ data }) {
    const post = data.markdownRemark;
    return (
        <Layout>
            <Link to='/writing/stories' variant='mono'>All Stories</Link>
            <article
                sx={{
                    marginTop: 4,
                    marginBottom: 6,
                }}
            >
                <Heading as='h1' sx={{ textAlign: 'center' }}>{post.frontmatter.title}</Heading>
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
                        variant: 'markdown.story',
                    }}
                    dangerouslySetInnerHTML={{ __html: post.html }}
                />
            </article>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
        }
    }
`;
