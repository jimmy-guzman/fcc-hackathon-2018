import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>I'm Jimmy.</p>
    <ul>
      <li>I'm working as a front-end engineer in Minneapolis.</li>
      <li>
        I'm also working as a TA at a full stack web development bootcamp.
      </li>
      <li>I enjoy long walks on the beach.</li>
    </ul>
    <p>I'm looking forward to building cool things with cool people.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
