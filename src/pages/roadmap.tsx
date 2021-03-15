/** @jsx jsx */
import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import {Spring, useSpring, animated} from 'react-spring/renderprops'
import { Heading, Text, Box, Flex, jsx } from 'theme-ui'
import Layout from '../@lekoarts/gatsby-theme-cara/components/layout'
import Hero from '../@lekoarts/gatsby-theme-cara/components/hero'
import PageSection from '../@lekoarts/gatsby-theme-cara/components/page-section'
import Content from "../@lekoarts/gatsby-theme-cara/elements/content"
import Divider from "../@lekoarts/gatsby-theme-cara/elements/divider"
import SVG from "../@lekoarts/gatsby-theme-cara/components/svg"
import { UpDown, UpDownWide, waveAnimation } from "../@lekoarts/gatsby-theme-cara/styles/animations"
import { RoadmapPhases, roadmapPhases } from "../@lekoarts/gatsby-theme-cara/components/roadmap-phases"
//
// @ts-ignore
import AutomateDefi from "../@lekoarts/gatsby-theme-cara/sections/automate-defi"
// @ts-ignore
import AssetManagement from "../@lekoarts/gatsby-theme-cara/sections/asset-management"
// @ts-ignore
import Backed from "../@lekoarts/gatsby-theme-cara/sections/backed"
// @ts-ignore
import FutureProof from "../@lekoarts/gatsby-theme-cara/sections/future-proof"
import CTA from "../@lekoarts/gatsby-theme-cara/components/cta"
//

const InnerWave = styled.div`
  path {
    ${waveAnimation(`20s`)};
  }
`

const Roadmap = () => (
  <Layout>
    <Hero page="roadmap" />
    <PageSection>
      <Flex sx={{ justifyItems: `space-between`, flexFlow: `row wrap`}}>
        <Box sx={{ position: `relative`, flex: [`0 1 100%`,`0 1 100%`,`0 1 90%`, `0 1 90%`,`0 1 90%`, `0 1 50%`], pt: 0, width: [`90%`,`90%`,`90%`,`90%`, `50%`], justifySelf: `center`, margin: `0 auto`, mt: [0, 0, 0, -100, -50] }}>
          <RoadmapPhases phases={roadmapPhases} />
          <CTA text="join our CCO" link="/cco" type="link" disabled />
        </Box>
      </Flex>
        <SVG position={`absolute`} icon="gridAssetVert" hiddenMobile width={[60, 60, 60, 113]} color="icon_darkest" left="0" top={[`50%`,`50%`,`50%`,`50%`,`8%`]}  preserveAspectRatio="xMidYMid meet" opacity={[0.07,0.07,0.07, 0.5]} zIndex="0"/>
    </PageSection>
  </Layout>
)
export default Roadmap
