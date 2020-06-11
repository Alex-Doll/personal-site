import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"


function About() {
    return (
	    <Layout>
	    <SEO title='About' />
	    <h1>About</h1>
	    <Link to="/">Home</Link>
	    </Layout>
    );
}

export default About;
