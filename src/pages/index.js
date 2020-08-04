import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

export const query = graphql`
  query MyQuery {
    wpgraphql {
      posts(first: 500) {
        nodes {
          id
          title
          date
          slug
          content
          link
        }
      }
    }
  }
`

var divStyle = {
  border: '1px solid #ccc',
  borderRadius: 10,
  backgroundColor: '#fff',
  padding: 15,
  marginBottom: 20
}
var linkStyle = {
  color: '#111',
  fontSize: 20,
  display: 'block',
  marginBottom: 10  
}
var textStyle = {
  color: '#444',
  fontSize: 16
}

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hey people</h1>
    <p>Welcome to your new Gatsby site.</p>

    {data.wpgraphql.posts.nodes.map(post => (
      <div key={post.id} style={divStyle}>
          <Link to={post.link} style={linkStyle}>{post.title}</Link>
          <p style={textStyle}>{post.content}</p>
      </div>
    ))}

  </Layout>
)


export default IndexPage
