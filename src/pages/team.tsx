/** @jsx jsx */
import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { Heading, Text, Box, Flex, jsx } from 'theme-ui'
import Layout from '../@lekoarts/gatsby-theme-cara/components/layout'
import Hero from '../@lekoarts/gatsby-theme-cara/components/hero'
import PageSection from '../@lekoarts/gatsby-theme-cara/components/page-section'
import SVG from "../@lekoarts/gatsby-theme-cara/components/svg"
import { UpDown, UpDownWide, waveAnimation } from "../@lekoarts/gatsby-theme-cara/styles/animations"
import { TeamMembers, teamMembers, advisors, partners } from "../@lekoarts/gatsby-theme-cara/components/team-members"


const InnerWave = styled.div`
  path {
    ${waveAnimation(`20s`)};
  }
`

const TeamPage = () => (
  <Layout>
    <Hero page="team" />
    <PageSection sx={{position: `relative`}}>
      <Flex sx={{ justifyItems: `space-between`, flexFlow: `row wrap`, mt: [0, 0, -75, 0]}}>
        <Box sx={{ position: `relative`, flex: `0 0 100%`, pt: 0, width: `100%`, justifySelf: `left`, margin: `0`, zIndex: 200 }}>
          <TeamMembers teamMembers={teamMembers} advisors={advisors} partners={partners} />
        </Box>
      </Flex>
      <SVG icon="teamPlay" hiddenMobile width={117} color="icon_darkest" left={[`70%`, `70%`,`70%`,`70%`,`90%`,0]} top="50%" opacity={[0.1, 0.1, 0.5]} transform="" zIndex={0}  transform={[`scaleX(-1)`, `scaleX(-1)`, `scaleX(-1)`, `scaleX(-1)`, `scaleX(-1)`, `scaleX(1)`]} zIndex={0} />
    </PageSection>
      <SVG icon="teamStarRing" hiddenMobile width={[150, 150, 150, 268]} color="icon_darkest" right={[0]} top={[`37%`,`35%`]} opacity={0.5} />
  </Layout>
)
export default TeamPage
