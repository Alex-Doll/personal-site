/** @jsx jsx */
import { Heading, jsx, Text } from 'theme-ui';

import { graphql } from "gatsby";

import Layout from "components/layout"
import SEO from "components/seo"
import { Link } from 'components/link';


function Music() {
    return (
	      <Layout>
	          <Link to="/">Home</Link>
            <SEO title='Music' />
	          <Heading as='h1'>Music</Heading>
            <section>
                <Heading as='h2'>Albums:</Heading>
            </section>
            <section>
                <Link to='/music/references'>References for Making Music</Link>
            </section>
	      </Layout>
    );
}

export default Music;
