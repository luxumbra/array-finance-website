/** @jsx jsx */
import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import {Spring, useSpring, animated} from 'react-spring/renderprops'
import { Heading, Text, Box, Flex, jsx } from 'theme-ui'
import Layout from '../@lekoarts/gatsby-theme-cara/components/layout'
import Hero from '../@lekoarts/gatsby-theme-cara/components/hero'
import PageSection from '../@lekoarts/gatsby-theme-cara/components/page-section'
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
          flex: [`0 0 100%`,`0 0 100%`,`0 0 80%`,`0 0 80%`,`0 1 80%`, `0 1 60%`],
          width: [`100%`, `100%`, `80%`, `80%`, `80%`, `60%`],
          lineHeight: [`sm`, `lg`],
          "p": { fontSize: [`body.xs`,`body.sm`,`body.md`,`display.sm`,`display.md`,`display.md`], lineHeight: `lg`, mt: [3,4,4,5], mb: [3,4,5], width: [`90%`, `90%`,`80%`,`80%`,`80%`,`80%`] },
          "ul": { listStyle: `none`, p: `0`, variant: `lists.bigList` },
          "li": { lineHeight: `lg`, mb: [2,3,4] },
          "& > div": { mt: 6, mb: 6, fontSize: `body.sm` },
          zIndex: 200
          }}>
          <AssetManagement />
        </Box>
        <Box sx={{display: [`none`, `block`], position: `relative`, flex: [`0 0 40%`, `0 0 40%`, `0 0 10%`, `0 0 40%`], width: `40%`, overflowX: `visible`, zIndex: 0}}>
          <SVG icon="apyInfoG" color="colors.background" right={[150,150,-90,-20]} top={[0,-50,100, 140]} width={[200,200,250, 426]} preserveAspectRatio="xMidYMid meet" opacity={[0.2,0.2, 1]} />
        </Box>
      </Flex>
    </PageSection>

    <PageSection>
      <Flex sx={{ justifyItems: `space-between`, flexFlow: `row-reverse nowrap`, position: `relative`}}>
        <Box sx={{
          flex: [`0 0 100%`,`0 0 100%`, `0 1 60%`],
          width: [`100%`, `100%`,`60%`],
          lineHeight: [`sm`, `lg`],
          zIndex: 200,
          "p": { fontSize: [`body.xs`,`body.sm`,`body.md`,`display.sm`,`display.md`,`display.md`], lineHeight: `lg`, mt: [3,4,4, 5], mb: [3,4,5], width: [`90%`,`80%`, `80%`, `80%`] },
          "& > div": {
            mt: [5, 5, 5, 6], mb: [5, 5, 5, 6], "p": {
              fontSize: [`body.xs`,`body.sm`,`body.md`,`display.sm`,`body.md`,`body.md`]
          }}
          }}>
          <AutomateDefi />
          <CTA text="join our CCO" link="/cco" type="link" disabled />
        </Box>
        <Box sx={{position: `relative`, flex: [`0 0 90%`,`0 0 40%`], width: [`90%`, `40%`], overflowX: `visible`, zIndex: 0}}>
          <SVG icon="autoDefi" color="colors.background" left={[`399px`,`265px`,`-35px`, `-150px`]} top={[`-75px`,`-75px`,`-50px`, `-100px`]} width={[`250px`, `200px`,`300px`, `569px`]} preserveAspectRatio="xMidYMid meet" opacity={[0.09,0.09, 1]} />
        </Box>
      </Flex>
      <UpDownWide>
        <SVG icon="afCircHomeSm" width={120} stroke color="white" left="-60px" top={[`35%`, 0, `40%`, `-40%`]} opacity={[0.02,0.02,0.02, 0.07]} />
        <SVG icon="afCircHome" width={200} color="icon_brightest" right="-100px" top={[`55%`, 0, -220, `5%`]} opacity={0.04} />
      </UpDownWide>
      <UpDown sx={{display: [`none`, `block`]}}>
        <SVG icon="gridAsset" hiddenMobile width={[0,0,200, 338]} color="icon_darkest" left="0" top={[`100%`,`100%`,`88%`,`60%`]} opacity={0.5} />
        <SVG icon="linesRight2" hiddenMobile width={[0, 0, 150, 302]} color="icon_darkest" right="0" top="40%" opacity={[0.5,0.5, 1]} />
      </UpDown>
    </PageSection>
    <PageSection sx={{}}>
      <Flex sx={{ justifyItems: `space-between`, flexFlow: `row nowrap`}}>
        <Box sx={{
          flex: [`0 0 90%`,`0 0 90%`,`0 1 60%`],
          width: [`90%`,`90%`, `60%`],
          lineHeight: [`sm`, `lg`],
          zIndex: 200,
          "p": { fontSize: [`body.xs`,`body.sm`,`body.md`,`display.sm`,`display.md`,`display.md`], lineHeight: `lg`, mt: [3,4,4], mb: [5,4,5], width: [`90%`, `80%`] },
          }}>
          <Backed />
          <CTA text="read our whitepaper" link="/Array_Whitepaper.pdf" type="link" />
        </Box>
        <Box sx={{position: `relative`, flex: [`0 0 10%`,`0 0 10%`, `0 0 40%`], width: `40%`, overflowX: `visible`, zIndex: 0}}>
          <SVG icon="backed" color="colors.background" right={[0, 0, -20, 0]} top={[`-50px`,`-50px`,`-50px`, `-100px`]} width={[`200px`,`200px`,`300px`, `421px`]} preserveAspectRatio="xMidYMid meet" opacity={[0.2,0.2, 1] }/>
        </Box>
      </Flex>
    </PageSection>

    <PageSection sx={{}}>
      <TeamPreview images={teamImages} />
    </PageSection>

    <PageSection sx={{position: `relative`}}>
      <Flex sx={{ justifyItems: `space-between`, flexFlow: `row wrap`}}>
        <Box sx={{
          flex: [`0 0 90%`,`0 0 90%`,`0 1 71%`,`0 1 54%`],
          width: [`90%`,`90%`,`71%`, `54%`],
          zIndex: 200,
          "p": { fontSize: [`body.xs`,`body.sm`,`body.md`,`display.sm`,`display.md`,`display.md`], lineHeight: `lg`, mt: [3,4,4], mb: [5,4,5], pr: [0,0,0,0] },
          }}>
          <FutureProof />
        </Box>
        <Box sx={{position: `relative`, flex: [`0 0 10%`,`0 0 10%`,`0 0 29%`,`0 0 46%`], width: [`10%`, `10%`,`29%`,`46%`], minHeight: [`100px`,`130px`, `458px`], overflowX: `visible`,  zIndex: 0}}>
          <SVG icon="futureProof" color="colors.background" right={[0, 0, -20, 0]} top={[-30, 0, -75, 0]} width={[`250px`,`250px`,`400px`,`458px`]} preserveAspectRatio="xMidYMid meet" opacity={[0.3,0.3,0.3, 1]} />
        </Box>
        <Box sx={{ position: `relative`, flex: [`0 0 100%`,`0 1 90%`,`0 1 90%`, `0 1 59%`], pt: [3, 5], width: [`90%`,`59%`], justifySelf: `center`, margin: `0 auto`, pr: [0,0,0,50] }}>
          <RoadmapPhases phases={roadmapPhases} />
          <CTA text="join our CCO" link="/cco" type="link" disabled />
          <SVG icon="roadmapGrid" width={115} color="icon_darkest" left={[0, 0, 50,50, -240, "-50%"]} top={[-100, 100,-200,"30%"]} opacity={[0,0,0.5,0.5,1]} />
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
