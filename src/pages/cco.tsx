/** @jsx jsx */
import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import {Spring, useSpring, animated} from 'react-spring/renderprops'
import { Heading, Text, Box, Flex, Progress, jsx } from 'theme-ui'
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
export const faqs = [
  {
    question: `Question 1`,
    answer: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`
  },
  {
    question: `Question 2`,
    answer: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`
  },
  {
    question: `Question 3`,
    answer: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`
  },
  {
    question: `Question 4`,
    answer: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`
  },
]

const ProgressIndicator = ({ current = 0, max = 100 }) => {
  // use spring to change the width value of progress from zero to `current`

  return (
    <div className="indicator" sx={{display: `flex`, flexFlow: `column wrap`}}>
      <div className="bounds" sx={{width: `${max}%`, backgroundColor: `#0F30F520`, borderRadius: `40px`, height: `33px`}}>
        <div className="progress" sx={{ position: `relative`, width: `${current}%`, backgroundColor: `#0F30F5`, borderRadius: `40px`, height: `33px`, opacity: 1, transition: `all 0.3s ease-in-out`, }}>
        <span sx={{position: `absolute`, top: `-60px`, display: `block`, height: `33px`, width: `100px`, textAlign: `right`, color: `white`, right: 0}}>We're here!</span>
          <span sx={{ visibility: `hidden` }}>{current}%</span>
        </div>
      </div>
      <div className="numbers" sx={{
        width: `${max}%`,
        pt: 4,
        position: `relative`,
        "span": {
          position: `absolute`,
          left: 0,
          transition: `all 0.4s ease-in-out`,
          "&:nth-of-type(2)": {
            left: 0,
            width: `${current}%`,
            textAlign: `right`,
          },
          "&:last-of-type": {
            right: 0,
            left: `auto`
          }
        }
      }}>
          <span>0%</span>
        {/* <div className="progress" sx={{ width: `${current}%` }}> */}
          <span>{current}%</span>
        {/* </div> */}
          <span>100%</span>
      </div>
    </div>
  )
}
export const ProgressBar = ({current = 0, max = 100}) => {
  return (
    <PageSection>
      <div sx={{ position: `relative`, maxWidth: `1170px` }}>
        <SVG icon="arrayPlus" hiddenMobile width="40px" color="icon_darkest" left="-130px" top="-3px" opacity={1} />
        <SVG icon="arrayPlus" hiddenMobile width="40px" color="icon_darkest" left="-230px" top="-3px" opacity={1}/>
        <ProgressIndicator max={max} current={current} />
      </div>
    </PageSection>
  )
}

export const ProgressInfo = ({ currentTotal = 0 }) => {
  return (
    <PageSection>
      <Flex sx={{flexFlow: `row nowrap`, alignContent: `center`, justifyContent: `space-between`, mb: 5}}>
        <p sx={{flex: `0 0 52%`, width: `52%`, fontSize: `display.md`}}>CCO shares will be migrated to the ArrayDAO in Q2. 5% of the bonding curve is allocated to CCO members, and will be distributed proportionally.</p>
        <div sx={{ display: `inline-flex`, flex: `1 0 auto`, alignItems: `center`, justifyItems: `right`, fontSize: `display.lg`, fontWeight: `700`, textAlign: `left`, pl: `100px` }}>
          <span sx={{flex: `0 0 auto`}}>
            <SVG icon="daiLogo" hiddenMobile width="72px" color="icon_darkest" left="0" top="0" opacity={1} position="relative" />
          </span>
          <span sx={{flex: `0 0 auto`, ml: 3}}>{currentTotal} DAI</span>
        </div>
      </Flex>
      <CTA text="propose to join" link="/join" type="link" sx={{
                  fontSize: `40px`, variant: `links.primary`
                }} />
    </PageSection>
  )
}
const CCOPage = () => (
  <Layout>
    <Hero page="cco" />
    <ProgressBar current={78} max={100} />
    <ProgressInfo currentTotal={15194.51} />
    <PageSection sx={{}}>
    <Flex sx={{ justifyItems: `space-between`, flexFlow: `row wrap`}}>
       <Box sx={{ position: `relative`, flex: `0 1 50%`, pt: 0, width: `50%`, justifySelf: `center`, margin: `0 auto` }}>
        <Heading as="h2"  sx={{textAlign: `left`, fontSize: `display.xl`, mb: 4}}>FAQ</Heading>
          <ul sx={{ listStyle: `none`, pl: 0 }}>
            {faqs && (
              faqs.map((faq, i) => (
                <li key={`faq-${i}`} sx={{mb: 5}}>
                  <Heading  as="h3" sx={{textAlign: `left`, fontSize: `display.lg`, mb: 3}}>{faq.question}</Heading>
                  <p>{faq.answer}</p>
                </li>
              ))
            )}
        </ul>
        </Box>
     </Flex>
     <UpDown sx={{position: `absolute`, width: `full`, zIndex: 3000}}>
       <SVG icon="ccoGrid2" hiddenMobile width={172} color="icon_darkest" left="0" top="15%" opacity={1}/>
      </UpDown>
      {/* <UpDownWide sx={{transform: `scaleY(-1)`}}>
        <SVG icon="afCircHome" width={200} color="icon_brightest" right="-100px" top="45%" opacity={0.04} zIndex={2000} />
      </UpDownWide>
      <UpDownWide sx={{transform: `scaleY(1)`}}>
        <SVG icon="afCircHomeSm" width={120} stroke color="white" left="25%" top="65%" opacity={0.1} fill="#86E5CC" />
      </UpDownWide> */}
    </PageSection>
  </Layout>

)
export default CCOPage
