import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"


function Projects() {
    return (
	    <Layout>
	    <SEO title='Projects' />
	    <h1>Projects</h1>
	    <Link to="/">Home</Link>
	    </Layout>
    );
}

export default Projects;
