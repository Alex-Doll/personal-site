/** @jsx jsx */

import { graphql } from 'gatsby';
import { Heading, jsx } from 'theme-ui';

import Layout from "../components/layout";

import { Link } from '../components/link';

export default function Album({ data }) {
    const album = data.markdownRemark;
    return (
        <Layout>
            <Link to='/music' variant='mono'>All Albums</Link>
            <article
                sx={{
                    marginTop: 4,
                    marginBottom: 6,
                }}
            >
                <Heading as='h1' sx={{ textAlign: 'center' }}>{album.frontmatter.title} - <em>{album.frontmatter.date}</em></Heading>
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
                    dangerouslySetInnerHTML={{ __html: album.html }}
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
                date(formatString: "MMMM D, YYYY")
            }
        }
    }
`;
