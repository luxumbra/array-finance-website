/** @jsx jsx */
import React, { useState, useEffect }  from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import {useSpring, animated, config} from 'react-spring'
import { Heading, Text, Box, Flex, Progress, jsx } from 'theme-ui'
const Web3 = require('web3');
let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545")
//
import Layout from '../@lekoarts/gatsby-theme-cara/components/layout'
import Hero from '../@lekoarts/gatsby-theme-cara/components/hero'
import PageSection from '../@lekoarts/gatsby-theme-cara/components/page-section'
import SVG from "../@lekoarts/gatsby-theme-cara/components/svg"
import { UpDown, UpDownWide, waveAnimation } from "../@lekoarts/gatsby-theme-cara/styles/animations"
import CTA from "../@lekoarts/gatsby-theme-cara/components/cta"
import { useFetch } from "../@lekoarts/gatsby-theme-cara/hooks/use-fetch"
//

const InnerWave = styled.div`
  path {
    ${waveAnimation(`20s`)};
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
  const progConfig = {
    friction: 60,
    mass: 4
  }
  const flowWidth = useSpring({config: config.default, width: `${current}%`, from: { width: `0%` } })
  const fadeWidth = useSpring({
    config: config.default,
    delay: 400,
    from: {
      width: `0%`,
      opacity: 0,
    },
    width: `${current}%`,
    opacity: 1,
  })
    const fade = useSpring({
    config: config.slow,
    from: {
      opacity: 0,
    },
    opacity: 1,
  })
  const fadeWidthLate = useSpring({
    config: config.gentle,
    delay: 600,
    from: {
      width: `0%`,
      opacity: 0,
    },
    width: `${current}%`,
    opacity: 1,
  })
  const fadeLate = useSpring({
    config: config.gentle,
    delay: 1000,
    from: {
      opacity: 0,
    },
    opacity: 1,
  })

  return (
    <div className="indicator" sx={{ display: `flex`, flexFlow: `column wrap`, fontSize: [`body.xs`, `body.xs`, `body.xs`, `body.sm`] }}>
      <div className="bounds" sx={{width: `${max}%`, backgroundColor: `#0F30F520`, borderRadius: `40px`, height: `33px`}}>
        <animated.div className="progress" sx={{ position: `relative`, backgroundColor: `#0F30F5`, borderRadius: `40px`, height: `33px`, opacity: 1, transition: `all 0.3s ease-in-out`}} style={flowWidth}>
          <animated.span sx={{position: `absolute`, top: [`-30px`, `-30px`, `-60px`], display: `block`, height: `33px`, width: `100px`, textAlign: `right`, color: `white`, right: 0}} style={fadeLate}>We're here!</animated.span>
          <span sx={{ visibility: `hidden` }}>{current}%</span>
        </animated.div>
      </div>
      <div className="numbers" sx={{
        width: `${max}%`,
        pt: [2,2,4,4],
        position: `relative`,
        "span": {
          position: `absolute`,
          left: 0,
          transition: `all 0.4s ease-in-out`,
          "&:nth-of-type(2)": {
            left: 0,
            textAlign: `right`,
          },
          "&:last-of-type": {
            right: 0,
            left: `auto`
          }
        }
      }}>
          <span>0%</span>
          <animated.span style={fadeWidthLate}>{current}%</animated.span>
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

export const progConfig = {
  delay: 1000,
  friction: 25,
}

export const ProgressInfo = ({ currentBalance, decimals, isLoading }: { currentBalance: number|string; decimals: number; isLoading: boolean}) => {
  console.log('balance', typeof currentBalance);

  const total = useSpring({
    config: config.molasses,
    x: currentBalance,
    from: {
      x: 0
    },
  })
  const fade = useSpring({
    config: progConfig,
    from: {
      opacity: 0
    },
    opacity: 1
  })

  return (
    <PageSection>
      <Flex sx={{flexFlow: [`column-reverse wrap`,`row-reverse wrap`,`row nowrap`, `row nowrap`], alignContent: `center`, justifyContent: `space-between`, mt: [-50, -50, -75, -100], mb: [4,4,5]}}>
        <animated.p sx={{flex: [`0 0 100%`, `0 0 52%`], width: [`100%`, `52%`], fontSize: [`body.xs`,`body.sm`,`body.md`,`display.sm`,`display.md`,`display.md`]}} style={fade}>CCO shares will be migrated to the ArrayDAO in Q2. 5% of the bonding curve is allocated to CCO members, and will be distributed proportionally.</animated.p>
        <div sx={{ display: `inline-flex`, flex: `1 0 auto`, alignItems: `center`, justifyItems: [`center`, `right`], fontSize: [`body.md`,`body.sm`,`body.md`,`display.sm`,`display.md`,`display.lg`], fontWeight: `700`, textAlign: `left`, pl: [`0`, `100px`] }}>
          <animated.span sx={{flex: `0 0 auto`, pr: [20]}} style={fade}>
            <SVG icon="daiLogo" hiddenMobile width={[36, 72]} color="icon_darkest" left="0" top="0" opacity={1} position="relative" />
          </animated.span>

          <animated.div style={fade}>
            {isLoading ? `Fetching...` : currentBalance } DAI
          </animated.div>
        </div>
      </Flex>
      <CTA text="propose to join" link="/join" type="link" sx={{variant: `links.primary`}} />
    </PageSection>
  )
}

const CCOPage = () => {
  const page = 'cco'
  const api = `https://blockscout.com/poa/xdai/api?module=account&action=tokenlist&address=`
  const contract = `0xFF3F8C0b98454306fB0bDA57E5ae38cbfA66CC0d`
  const apiQuery = `${api}${contract}`


  const [data, loading] = useFetch(apiQuery)

  const { balance, contractAddress, decimals, symbol } = data
  // const balance = data.result[0].balance
  console.log(balance);

  console.log('bal:', typeof balance, balance);
  // const convertFromWei = (number) => {
  //   return web3.utils.fromWei(number,"grand")
  // }
  const displayNumber = parseInt(balance)


  return (
    <Layout>
      <Hero page={page} />
      <ProgressBar current={67} max={100} />
      <ProgressInfo currentBalance={displayNumber} decimals={parseInt(decimals)} isLoading={loading} />
      <PageSection sx={{ "&>div": { pt: [0] } }}>
        <Flex sx={{ justifyItems: `space-between`, flexFlow: `row wrap` }}>
          <Box sx={{ position: `relative`, flex: [`0 0 100%`, `0 0 100%`, `0 0 100%`, `0 1 50%`, `0 1 50%`], pt: 0, width: [`100%`, `100%`, `100%`, `50%`, `50%`], justifySelf: `center`, margin: `0 auto` }}>
            <Heading as="h2" sx={{ textAlign: `left`, fontSize: [`body.xxl`, `display.sm`, `display.lg`, `display.lg`, `display.lg`, `display.xl`], lineHeight: 1.22, mb: 4 }}>FAQ</Heading>
            <ul sx={{ listStyle: `none`, pl: 0 }}>
              {faqs && (
                faqs.map((faq, i) => (
                  <li key={`faq-${i}`} sx={{ mb: [4, 4, 5] }}>
                    <Heading as="h3" sx={{ textAlign: `left`, fontSize: [`body.lg`, `body.xl`, `body.xl`, `body.xl`, `body.xl`, `display.lg`], lineHeight: 1.22, mb: [3] }}>{faq.question}</Heading>
                    <p sx={{ fontSize: [`body.xs`, `body.sm`, `body.sm`, `body.sm`, `body.sm`, `body.md`], width: [`100%`, `100%`, `80%`, `auto`, `auto`,] }}>{faq.answer}</p>
                  </li>
                ))
              )}
            </ul>
          </Box>
        </Flex>
        <SVG icon="ccoGrid2" hiddenMobile width={[125, 125, 172]} color="icon_darkest" left={[200, 200, 420, 300, 0]} top={[-25, -25, -100, -60, `15%`]} opacity={[0.2, 0.2, 0.2, 0.2, 1]} />
      </PageSection>
    </Layout>
  )
}
export default CCOPage
