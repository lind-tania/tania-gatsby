import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import Layout from "../components/layout"


const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

const ArticleDate = styled.h5`
  display: inline;
  color: #606060;
`
const ArticleLink = styled.a`
text-decoration: none;
margin-bottom: 1.45rem;   
`

const MarkerHeader = styled.h3`
  display: inline;
  border-radius: 1em 0 1em 0;
  background-image: linear-gradient(
    -100deg,
    rgba(255, 250, 150, 0.15),
    rgba(255, 250, 150, 0.8) 100%,
    rgba(255, 250, 150, 0.25)
  );
`

const IndexPage = () => {
  return (
    <Layout>
      <Content>
        <h3>A list of recent talks I have given</h3>
                {/* <MarkerHeader>header</MarkerHeader> */}
              <div>
                <ArticleDate>2020</ArticleDate>
              </div>
        <p> "What, Why, and How of React Fiber" | ​SingleSprout Speaker Series</p>
        <div>
          <ArticleDate>2020</ArticleDate>
        </div>
        <p> "Frontend Frameworks Alternatives - Vue.js" | ​SingleSprout Speaker Series</p>
        <h3>A selection of recent writing</h3>
        <div>
          <ArticleDate>2020</ArticleDate>
        </div>
        <ArticleLink href='https://medium.com/better-programming/improving-and-optimizing-performance-of-react-apps-with-reactime-v7-0-737bdbdf1e0e'><p>Improve and Optimize Performance of React Apps With Reactime V7.0</p></ArticleLink>
        <div>
          <ArticleDate>2020</ArticleDate>
        </div>
        <ArticleLink href='https://medium.com/better-programming/working-on-an-open-source-as-a-team-50b61b85bb55'>Working on an Open Source Project as a Team</ArticleLink>
      </Content>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { eq: false } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            rawDate: date
            path
          }
          fields {
            slug
            readingTime {
              text
            }
          }
          excerpt
        }
      }
    }
  }
`
