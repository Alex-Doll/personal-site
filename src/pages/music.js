import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"


function Music() {
    return (
	    <Layout>
	    <SEO title='Music' />
	    <h1>Music</h1>
	    <Link to="/">Home</Link>
	    </Layout>
    );
}

export default Music;
