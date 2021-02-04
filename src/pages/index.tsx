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
const TraceLines = styled(animated.div)`
  path {
    stroke-dasharray: ${props => tracePath(props)};
  }
`

const HomePage = () => (
  <Layout>
    <Hero page="home" />
    <PageSection styles={{minHeight: `1005px`, position: 'relative'}}>
      <Flex>
      <Box sx={{
          flex: `0 1 60%`,
          width: `60%`,
          fontSize: `display.md`,
          "p": { fontSize: `body.md`, lineHeight: `lg`, mt: 5, mb: 5 },
          "ul": { listStyle: `none`, p: `0` },
          "ul": {variant: `lists.bigList`},
          "li": { fontSize: `body.md`, lineHeight: `lg`, mb: 4 },
          "& > div": {mt: 6, mb: 6, fontSize: `body.sm`}
          }}>
          <AssetManagement />
        </Box>
        <Box sx={{position: `relative`, flex: `0 0 40%`, width: `40%`, overflowX: `visible`}}>
          <SVG icon="apyInfoG" hiddenMobile color="colors.background" right="-20px" top="120px" width="426px" height="675px" preserveAspectRatio="xMidYMid meet" />
        </Box>
      </Flex>

    </PageSection>

    <PageSection styles={{position: `relative`, border: `1px solid red`}}>
      <Flex sx={{ justifyItems: `space-between`, flexFlow: `row-reverse nowrap`, position: `relative`}}>
        <Box sx={{
          flex: `0 1 70%`,
          width: `70%`,
          fontSize: `display.md`,
          "p": { fontSize: `body.md`, lineHeight: `lg`, mt: 4, mb: 5 },
          // "& > div p": { fontSize: `body.sm` },
          "& > div": {mt: 6, mb: 6, fontSize: `body.sm`}
          }}>
          <AutomateDefi />
          <CTA text="join our CCO" link="/cco" type="link" sx={{
            variant: `links.primary`
          }} />
        </Box>
        <Box sx={{position: `relative`, flex: `0 0 40%`, width: `40%`, overflowX: `visible`}}>
          <SVG icon="autoDefi" hiddenMobile color="colors.background" left="-150px" top="-100px" width="569px" height="499px" preserveAspectRatio="xMidYMid meet" />
        </Box>
      </Flex>
      <UpDownWide>
        <SVG icon="afCircHomeSm" width={120} stroke color="white" left="-60px" top="0%" opacity={0.1} />
        <SVG icon="afCircHome" width={200} color="icon_brightest" right="-100px" top="15%" opacity={0.04} />
        {/* <SVG icon="gridAsset" hiddenMobile width={338} color="icon_darkest" left="0" top="60%" opacity={0.5} /> */}
        {/* <SVG icon="linesRight2" hiddenMobile width={302} color="icon_darkest" right="180px" top="50%" opacity={0.5} strokeDashoffset={} /> */}
      </UpDownWide>
      <UpDown>
      <SVG icon="gridAsset" hiddenMobile width={338} color="icon_darkest" left="0" top="60%" opacity={0.5} />

      <SVG icon="linesRight2" hiddenMobile width={302} color="icon_darkest" right="0" top="40%" opacity={0.5} />
      </UpDown>
    </PageSection>
    <PageSection sx={{}}>
      <Flex sx={{ justifyItems: `space-between`, flexFlow: `row nowrap`}}>
        <Box sx={{
          flex: `0 1 60%`,
          width: `60%`,
          fontSize: `display.md`,
          "p": { fontSize: `body.sm`, lineHeight: `lg`, mt: 4, mb: 5, pr: 6 },
          // "& > div p": { fontSize: `body.sm` },
          }}>
          <Backed />
          <CTA text="read our whitepaper" link="/whitepaper" type="link" sx={{
            variant: `links.primary`
          }} />
        </Box>
        <Box sx={{position: `relative`, flex: `0 0 40%`, width: `40%`, overflowX: `visible`}}>
          <SVG icon="backed" hiddenMobile color="colors.background" right="0" top="-100px" width="421px" preserveAspectRatio="xMidYMid meet" />
        </Box>
      </Flex>
    </PageSection>

    <PageSection sx={{}}>
      <TeamPreview images={teamImages} />
    </PageSection>

    <PageSection sx={{position: `relative`}}>
      <Flex sx={{ justifyItems: `space-between`, flexFlow: `row wrap`}}>
        <Box sx={{
          flex: `0 1 54%`,
          width: `54%`,
          fontSize: `display.md`,
          "p": { fontSize: `body.sm`, lineHeight: `lg`, mt: 4, mb: 5, pr: 4 },

          // "& > div p": { fontSize: `body.sm` },
          }}>
          <FutureProof />
        </Box>
        <Box sx={{position: `relative`, flex: `0 0 46%`, width: `46%`, minHeight: `458px`, overflowX: `visible`}}>
          <SVG icon="futureProof" hiddenMobile color="colors.background" right="0" top="0" width="458px" height="458px" preserveAspectRatio="xMidYMid meet" />
        </Box>
        <Box sx={{ position: `relative`, flex: `0 1 50%`, pt: 5, width: `50%`, justifySelf: `center`, margin: `0 auto` }}>
          <RoadmapPhases phases={roadmapPhases} />
          <CTA text="join our CCO" link="/ccor" type="link" sx={{
            variant: `links.primary`
          }} />
          <UpDown sx={{position: `absolute`, width: `full`}}>
          <SVG icon="roadmapGrid" hiddenMobile width={115} color="icon_darkest" left="-50%" top="30%" opacity={1} />
          </UpDown>
        </Box>
      </Flex>
      {/* <UpDown sx={{ position: `absolute`, width: `full` }}>
        <SVG icon="roadmapGrid2" hiddenMobile width={310} color="icon_darkest" right="-200px" top="70%" opacity={1} />
      </UpDown> */}
      <UpDownWide>
        {/* <SVG icon="afCircHomeSm" width={120} stroke color="white" left="-60px" top="10%" opacity={0.04} /> */}
        <SVG icon="afCircHome" width={200} color="icon_brightest" right="-100px" top="20%" opacity={0.2} />
        {/* <SVG icon="linesRight2" hiddenMobile width={302} color="icon_darkest" right="180px" top="50%" opacity={0.5} strokeDashoffset={} /> */}
      </UpDownWide>
      <UpDown sx={{position: `absolute`, width: `full`}}>
        <SVG icon="afCircHomeSm" width={120} stroke color="white" left="-60px" top="10%" opacity={0.04} />
      </UpDown>

    </PageSection>
  </Layout>
)
export default HomePage
