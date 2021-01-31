import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Layout from "../layouts/Layout"
// import Newsletter from "../components/Newsletter"
import SiteMetadata from "../components/SiteMetadata"

const AboutPage = ({ data }) => (
  <Layout>
    <SiteMetadata title="About" description="Sample description" />

    <div className="bg-gray-100">
      <div className="container py-12 lg:pb-16">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 xl:w-3/5 pb-8 md:pb-0">
            <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              For Better Days
            </h1>

            <h2 className="text-xl leading-tight font-semibold tracking-tight text-blue-600 sm:text-2xl">
              평범한 일상 속에서 내가 사랑하는 것들을 발견하다.
            </h2>
            <div className="mt-4 leading-loose">
              평소에는 그냥 지나칠 수 있는 작은 것들도 조금 다른 시선으로 바라보면 내가 사랑하는 것들로 가득 차있는것을 발견할 수 있다. 그런 순간들을 사진으로 기록하는 평범한 공간이다.
              <br />
              <br />

            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-2/5 md:pl-12">
            <Img
              fluid={data.author.childImageSharp.fluid}
              alt="ForBetterDays"
              className="rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
    {/* <Newsletter /> */}
  </Layout>
)

export default AboutPage

export const query = graphql`
  query {
    author: file(relativePath: { eq: "author.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, maxHeight: 480, quality: 85) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
