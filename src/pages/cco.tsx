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
        <SVG icon="arrayPlus" hiddenMobile width="40px" color="icon_darkest" left={[30,30,30,30,30, -130, -130]} top={[-30,-30,-30,-45,-45, -1, -1]} opacity={[0.2, 0.2,0.2,0.2,0.2, 1]} />
        <SVG icon="arrayPlus" hiddenMobile width="40px" color="icon_darkest" left={[130,130,130,130,190,-64, -230, -230]} top={[-50,-80,-110,-110,-110, -1, -1]} opacity={[0.4, 0.3,0.3,0.3,0.3, 1]}/>
        <ProgressIndicator max={max} current={current} />
      </div>
    </PageSection>
  )
}

export const ProgressInfo = ({ currentTotal = 0 }) => {
  return (
    <PageSection>
      <Flex sx={{flexFlow: [`column-reverse wrap`,`row-reverse wrap`,`row nowrap`, `row nowrap`], alignContent: `center`, justifyContent: `space-between`, mt: [-50, -50, -75, -100], mb: [4,4,5]}}>
        <p sx={{flex: [`0 0 100%`, `0 0 52%`], width: [`100%`, `52%`], fontSize: [`body.xs`,`body.sm`,`body.md`,`display.sm`,`display.md`,`display.md`]}}>CCO shares will be migrated to the ArrayDAO in Q2. 5% of the bonding curve is allocated to CCO members, and will be distributed proportionally.</p>
        <div sx={{ display: `inline-flex`, flex: `1 0 auto`, alignItems: `center`, justifyItems: [`left`, `right`], fontSize: [`body.md`,`body.sm`,`body.md`,`display.sm`,`display.md`,`display.lg`], fontWeight: `700`, textAlign: `left`, pl: [`0`, `100px`] }}>
          <span sx={{flex: `0 0 auto`}}>
            <SVG icon="daiLogo" hiddenMobile width={[36, 72]} color="icon_darkest" left="0" top="0" opacity={1} position="relative" />
          </span>
          <span sx={{flex: `0 0 auto`, ml: 3}}>{currentTotal} DAI</span>
        </div>
      </Flex>
      <CTA text="propose to join" link="/join" type="link" sx={{variant: `links.primary`}} />
    </PageSection>
  )
}
const CCOPage = () => (
  <Layout>
    <Hero page="cco" />
    <ProgressBar current={78} max={100} />
    <ProgressInfo currentTotal={15194.51} />
    <PageSection sx={{"&>div": {pt: [0]}}}>
    <Flex sx={{ justifyItems: `space-between`, flexFlow: `row wrap`}}>
       <Box sx={{ position: `relative`, flex: [`0 0 100%`,`0 0 100%`,`0 0 100%`,`0 1 50%`, `0 1 50%`], pt: 0, width: [`100%`, `100%`, `100%`, `50%`, `50%`], justifySelf: `center`, margin: `0 auto` }}>
        <Heading as="h2"  sx={{textAlign: `left`, fontSize: [`body.xxl`, `display.sm`, `display.xl`, `display.md`, `display.lg`, `display.xl`], lineHeight: 1.22, mb: 4}}>FAQ</Heading>
          <ul sx={{ listStyle: `none`, pl: 0 }}>
            {faqs && (
              faqs.map((faq, i) => (
                <li key={`faq-${i}`} sx={{mb: [4,4,5]}}>
                  <Heading  as="h3" sx={{textAlign: `left`, fontSize: [`body.lg`,`display.md`,`display.md`, `display.lg`], lineHeight: 1.22, mb: [3]}}>{faq.question}</Heading>
                  <p sx={{fontSize: [`body.xs`,`body.sm`,`body.sm`, `body.md`], width: [`100%`, `100%`, `80%`, `auto`, `auto`, ]}}>{faq.answer}</p>
                </li>
              ))
            )}
        </ul>
        </Box>
     </Flex>
     <SVG icon="ccoGrid2" hiddenMobile width={[125, 125, 172]} color="icon_darkest" left={[200, 200,420,300, 0]} top={[-25, -25,-100,-60,`15%`]} opacity={[0.2,0.2,0.2,0.2, 1]}/>
    </PageSection>
  </Layout>

)
export default CCOPage
