import React from "react"
import { Link } from "gatsby"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import { Heading } from 'theme-ui'
import Layout from '../@lekoarts/gatsby-theme-cara/components/layout'
import Hero from '../@lekoarts/gatsby-theme-cara/components/hero'
import PageSection from '../@lekoarts/gatsby-theme-cara/components/page-section'
//

const HomePage = () => (
  <Layout>
      <Hero />
      <PageSection>
        <Heading as="h2">The future of asset management is here.</Heading>
      </PageSection>
      <PageSection>
        <h2>Automate your DeFi portfolio</h2>
      </PageSection>
  </Layout>
)
export default HomePage
