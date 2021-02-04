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
import { TeamPreview, teamImages } from "../@lekoarts/gatsby-theme-cara/components/team-preview"
import { TeamMembers, teamMembers, advisors, partners } from "../@lekoarts/gatsby-theme-cara/components/team-members"
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

const TeamPage = () => (
  <Layout>
    <Hero page="team" />
    <PageSection>
      <Flex sx={{ justifyItems: `space-between`, flexFlow: `row wrap`}}>
        <Box sx={{ position: `relative`, flex: `0 1 70%`, pt: 0, width: `70%`, justifySelf: `left`, margin: `0` }}>
          <TeamMembers teamMembers={teamMembers} advisors={advisors} partners={partners} />
        </Box>
      </Flex>
      <SVG icon="teamPlay" hiddenMobile width={117} color="icon_darkest" left="0" top="50%" opacity={0.5} transform="" zIndex={0} />
    </PageSection>
    <UpDown sx={{position: `absolute`, width: `full`, zIndex: 3000}}>
      <SVG icon="teamStarRing" hiddenMobile width={268} color="icon_darkest" right="0" top="35%" opacity={0.5} />
    </UpDown>
    {/* <UpDownWide sx={{transform: `scaleY(-1)`}}>
      <SVG icon="afCircHome" width={200} color="icon_brightest" right="-100px" top="45%" opacity={0.04} zIndex={2000} />
      <SVG icon="roadmapGrid" hiddenMobile width={90} color="icon_darkest" right="35%" top="105%" opacity={0.2} />
    </UpDownWide> */}
    {/* <UpDownWide sx={{transform: `scaleY(1)`}}>
      <SVG icon="afCircHomeSm" width={120} stroke color="white" left="25%" top="65%" opacity={0.1} fill="#86E5CC" />
    </UpDownWide> */}
  </Layout>
)
export default TeamPage
