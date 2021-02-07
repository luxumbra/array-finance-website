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


const HomePage = () => (
  <Layout>
    <Hero page="home" />
    <PageSection styles={{minHeight: [`auto`,`auto`,`auto`,`1205px`, `1205px`, `1005px`], position: 'relative', mt: [200, 0]}}>
      <Flex>
        <Box sx={{
          flex: [`0 0 100%`,`0 0 100%`,`0 0 100%`,`0 0 100%`,`0 1 60%`, `0 1 60%`],
          width: [`100%`, `100%`, `100%`, `100%`, `60%`, `60%`],
          lineHeight: [`sm`, `lg`],
          "p": { fontSize: [`display.xs`,`display.xs`,`display.xs`,`display.sm`,`display.md`,`display.md`], lineHeight: `lg`, mt: [3,4,5], mb: [3,4,5], pr: [0, 6] },
          "ul": { listStyle: `none`, p: `0` },
          "ul": {variant: `lists.bigList`},
          "li": { lineHeight: `lg`, mb: [2,3,4] },
          "& > div": { mt: 6, mb: 6, fontSize: `body.sm` },
          zIndex: 200
          }}>
          <AssetManagement />
        </Box>
        <Box sx={{position: `relative`, flex: `0 0 40%`, width: `40%`, overflowX: `visible`, zIndex: 0}}>
          <SVG icon="apyInfoG" color="colors.background" right={[150,-20]} top={[-300, 120]} width={[300, 426]} preserveAspectRatio="xMidYMid meet" opacity={[0.4, 1]} />
        </Box>
      </Flex>
    </PageSection>

    <PageSection>
      <Flex sx={{ justifyItems: `space-between`, flexFlow: `row-reverse nowrap`, position: `relative`}}>
        <Box sx={{
          flex: [`0 0 100%`, `0 1 70%`],
          width: [`100%`, `70%`],
          "p": { fontSize: [`display.xs`,`display.sm`,`display.md`,`display.md`], lineHeight: `lg`, mt: 4, mb: 5 },
          // "& > div p": { fontSize: `body.sm` },
          "& > div": {mt: 6, mb: 6, fontSize: [`body.sm`, `body.sm`]}
          }}>
          <AutomateDefi />
          <CTA text="join our CCO" link="/cco" type="link" sx={{variant: `links.primary`}} />
        </Box>
        <Box sx={{position: `relative`, flex: `0 0 40%`, width: `40%`, overflowX: `visible`}}>
          <SVG icon="autoDefi" hiddenMobile color="colors.background" left="-150px" top="-100px" width="569px" height="499px" preserveAspectRatio="xMidYMid meet" />
        </Box>
      </Flex>
      {/* <UpDownWide>
        <SVG icon="afCircHomeSm" width={120} stroke color="white" left="-60px" top="0%" opacity={0.1} />
        <SVG icon="afCircHome" width={200} color="icon_brightest" right="-100px" top="15%" opacity={0.04} />
      </UpDownWide> */}
      {/* <UpDown>
        <SVG icon="gridAsset" hiddenMobile width={338} color="icon_darkest" left="0" top="60%" opacity={0.5} />
        <SVG icon="linesRight2" hiddenMobile width={302} color="icon_darkest" right="0" top="40%" opacity={0.5} />
      </UpDown> */}
    </PageSection>
    <PageSection sx={{}}>
      <Flex sx={{ justifyItems: `space-between`, flexFlow: `row nowrap`}}>
        <Box sx={{
          flex: `0 1 60%`,
          width: `60%`,
          "p": { fontSize: [`display.xs`,`display.sm`,`display.md`,`display.md`], lineHeight: `lg`, mt: 4, mb: [3,4,5], pr: [0, 6] },
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
          "p": { fontSize: [`display.xs`,`display.sm`,`display.md`,`display.md`], lineHeight: `lg`, mt: 4, mb: [3,4,5], pr: [0, `50px`] },
          }}>
          <FutureProof />
        </Box>
        <Box sx={{position: `relative`, flex: `0 0 46%`, width: `46%`, minHeight: `458px`, overflowX: `visible`}}>
          <SVG icon="futureProof" color="colors.background" right="0" top="0" width="458px" height="458px" preserveAspectRatio="xMidYMid meet" />
        </Box>
        <Box sx={{ position: `relative`, flex: `0 1 50%`, pt: 5, width: `50%`, justifySelf: `center`, margin: `0 auto` }}>
          <RoadmapPhases phases={roadmapPhases} />
          <CTA text="join our CCO" link="/ccor" type="link" sx={{
            variant: `links.primary`
          }} />
          {/* <UpDown > // TODO: i think this is the problematic section.
          <SVG icon="roadmapGrid" width={115} color="icon_darkest" left="-50%" top="30%" opacity={1} />
          </UpDown> */}
        </Box>
      </Flex>
      {/* <UpDownWide >
        <SVG icon="afCircHome" width={200} color="icon_brightest" right="-100px" top="20%" opacity={0.2} />
      </UpDownWide> */}
      {/* <UpDown>
        <SVG icon="afCircHomeSm" width={120} stroke color="white" left="-60px" top="10%" opacity={0.04} />
      </UpDown> */}

    </PageSection>
  </Layout>
)
export default HomePage
