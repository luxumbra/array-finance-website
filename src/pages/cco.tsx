/** @jsx jsx */
import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import {useSpring, animated, config} from 'react-spring'
import { Heading, Text, Box, Flex, Progress, jsx } from 'theme-ui'
import { utils } from 'web3'
//
import Layout from '../@lekoarts/gatsby-theme-cara/components/layout'
import Hero from '../@lekoarts/gatsby-theme-cara/components/hero'
import PageSection from '../@lekoarts/gatsby-theme-cara/components/page-section'
import SVG from "../@lekoarts/gatsby-theme-cara/components/svg"
import { waveAnimation } from "../@lekoarts/gatsby-theme-cara/styles/animations"
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
    question: `What is a CCO?`,
    answer: `CCO stands for “Community Contribution Opportunity.” The end result of a CCO is a product managed by a community rather than a small team and their investors.`
  },
  {
    question: `What is DAOHaus?`,
    answer: `DAOhaus is a community-owned platform that enables teams, projects, or communities to unlock the coordination power of a DAO.`
  },

]

const ProgressIndicator = ({ current = 0, max = 100 }) => {
  const progress = (current, max) => {
    return Math.round((parseInt(current)/max) * 100)
  }
  const percent = progress(current, max)

  const progConfig = {
    friction: 60,
    mass: 4
  }
  const flowWidth = useSpring({config: config.default, width: `${percent}%`, from: { width: `0%` } })
  const fadeWidth = useSpring({
    config: config.default,
    delay: 400,
    from: {
      width: `0%`,
      opacity: 0,
    },
    width: `${percent}%`,
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
    config: config.default,
    delay: 350,
    from: {
      width: `0%`,
      opacity: 0,
    },
    width: `${percent}%`,
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
      <div className="bounds" sx={{width: `${100}%`, backgroundColor: `#0F30F520`, borderRadius: `40px`, height: `33px`}}>
        <animated.div className="progress" sx={{ position: `relative`, backgroundColor: `#0F30F5`, borderRadius: `40px`, height: `33px`, opacity: 1, transition: `all 0.3s ease-in-out`}} style={flowWidth}>
          <animated.span sx={{position: `absolute`, top: [`-30px`, `-30px`, `-60px`], display: `block`, height: `33px`, width: `100px`, textAlign: `right`, color: `white`, right: 0}} style={fadeLate}>We're here!</animated.span>
          <span sx={{ visibility: `hidden` }}>{percent}%</span>
        </animated.div>
      </div>
      <div className="numbers" sx={{
        width: `${100}%`,
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
          <animated.span style={fadeWidthLate}>{percent}%</animated.span>
          <span>100%</span>
      </div>
    </div>
  )
}
export const ProgressBar = ({ current = 0, max = 100 }) => {
  return (
    <PageSection>
      <div sx={{ position: `relative`, maxWidth: `1170px`, mt: [0, 0,0, 0,0, -100, 0] }}>
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
  // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
export const ProgressInfo = ({ currentBalance, isLoading }: { currentBalance: string; isLoading: boolean}) => {
  const total = useSpring({
    config: config.molasses,
    x: parseInt(currentBalance),
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

  const modalFade = useSpring({
    config: config.default,
    delay: 200,
    from: {
      opacity: 0
    },
    opacity: 1
  })

  const formatNumber = (number = 0) => {
    const format = number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    return format
  }

  let subtitle;
  const [modalIsOpen,setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal(){
    setIsOpen(false);
  }

  return (
    <PageSection>
      <Flex sx={{flexFlow: [`column-reverse wrap`,`row-reverse wrap`,`row nowrap`, `row nowrap`], alignContent: `center`, justifyContent: `space-between`, mt: [-50, -50, -75,-25,-50,-125, -100], mb: [4,5,5]}}>
        <animated.p sx={{flex: [`0 0 100%`,`0 0 100%`, `0 0 52%`], width: [`100%`,`100%`, `52%`], fontSize: [`body.xs`,`body.sm`,`body.md`,`display.sm`,`display.md`,`display.md`]}} style={fade}>CCO shares will be migrated to the ArrayDAO in Q2. 10% of the bonding curve is allocated to CCO members, and will be distributed proportionally.</animated.p>
        <div sx={{ display: `inline-flex`, flex: `1 0 auto`, alignItems: `center`, justifyItems: [`center`,`center`, `right`], fontSize: [`body.md`,`body.lg`,`body.md`,`display.sm`,`display.md`,`display.lg`], fontWeight: `700`, textAlign: `left`, pl: [`0`, `100px`] }}>
          <animated.span sx={{ flex: `0 0 auto`, pr: [20], borderRadius: `50%` }} style={fade}>
            <SVG icon="daiLogo" hiddenMobile width={[36,36, 72]} color="icon_darkest" left="0" top="0" opacity={1} position="relative" />
          </animated.span>

          <animated.div style={fade}>
            {isLoading ? `Fetching...` : formatNumber(parseInt(currentBalance)) } DAI
          </animated.div>
        </div>
      </Flex>
      <CTA text="propose to join" link="#propose" type="link" sx={{ variant: `links.primary` }} />
    </PageSection>
  )
}

const CCOPage = () => {
  const [displayBal, setDisplayBal] = useState()
  const page = 'cco'
  const api = `https://blockscout.com/poa/xdai/api?module=account&action=tokenlist&address=`
  const contract = "0xFF3F8C0b98454306fB0bDA57E5ae38cbfA66CC0d"
  const apiQuery = `${api}${contract}`

  const [data, loading] = useFetch(apiQuery)


  return (
    <Layout>
      <Hero page={page} />
      <ProgressBar current={data.balance && utils.fromWei(data.balance)} max={1000000} />
      <ProgressInfo currentBalance={data.balance && utils.fromWei(data.balance)} isLoading={loading} />
      <PageSection sx={{ "&>div": { pt: [0] } }}>
        <Flex sx={{ justifyItems: `space-between`, flexFlow: `row wrap` }}>
          <Box sx={{ position: `relative`, flex: [`0 0 100%`, `0 0 100%`, `0 0 100%`, `0 1 50%`, `0 1 50%`], pt: 0, width: [`100%`, `100%`, `100%`, `50%`, `50%`], justifySelf: `center`, margin: `0 auto` }}>
            <Heading as="h2" sx={{ textAlign: `left`, fontSize: [`body.xxl`, `body.xxl`, `display.lg`, `display.lg`, `display.lg`, `display.xl`], lineHeight: 1.22, mb: 4 }}>FAQ</Heading>
            <ul sx={{ listStyle: `none`, pl: 0 }}>
              {faqs && (
                faqs.map((faq, i) => (
                  <li key={`faq-${i}`} sx={{ mb: [4, 4, 5] }}>
                    <Heading as="h3" sx={{ textAlign: `left`, fontSize: [`body.lg`, `body.md`, `body.xl`, `body.xl`, `body.xl`, `display.lg`], lineHeight: 1.22, mb: [3] }}>{faq.question}</Heading>
                    <p sx={{ fontSize: [`body.xs`, `body.xs`, `body.sm`, `body.sm`, `body.sm`, `body.md`], width: [`100%`, `100%`, `80%`, `auto`, `auto`,] }}>{faq.answer}</p>
                  </li>
                ))
              )}
            </ul>
          </Box>
        </Flex>
        <SVG icon="ccoGrid2" hiddenMobile width={[125, 125, 172]} color="icon_darkest" left={[200, 200, 420, 300, 0]} top={[-25, -25, -100, -60, `15%`]} opacity={[0.2, 0.2, 0.2, 0.2, 1]} />
      </PageSection>
      <PageSection sx={{"&>div": { pt: [0] } }}>
        <div  id="propose"sx={{ mt: `-100px`,height: [50, 50,50,50, 100]}}></div>
        <div sx={{position: `relative`, px: [0], pb: 5, zIndex: 200, textAlign: `center`, "h3, p, li": {textAlign: `left`}, maxWidth: [`100%`, `100%`, `100%`,`70%`]}}>
            <h3 id="modal-heading" sx={{display: `flex`, alignItems: `center`, justifyItems: `left`, fontSize: [`display.md`, `display.md`,`display.lg`,`display.lg`,`display.lg`, `display.xl`], mt: 0, mb: [3,4]}}>Propose to join</h3>
            <p id="full_description" sx={{fontSize: [`body.xs`,`body.sm`,`body.sm`,`body.sm`,`body.md`,`body.lg`], lineHeight: [1.3, 1.4, 1.4]}}>Hey there! From all of us at Array, thanks for your interest in the project! We’ve been working really hard over the past 6 months and are happy to finally give the keys to the community via a Community Contribution Opportunity (CCO). Unlike ICOs of the past, a CCO keeps your funds decentralized and liquid. Members can RageQuit to redeem their initial DAI contribution at any time for a small penalty. Sound good? Let’s get started. If you have any questions, feel free to hop into <a href="https://discord.gg/kGuamkkvfA">our discord here</a>!</p>
            <p sx={{fontSize: [`display.xs`,`display.xs`, `body.sm`,`body.sm`,`body.sm`, `body.md`]}}>Because ETH fees have been very high as of late, we are utilizing a Layer 2 solution (xDAI) for our CCO, before our bespoke ArrayDAO launches on mainnet.</p>

          <ol sx={{
            variant: `lists.modalList`,
            }}>
              <li><p>Set up the xDAI network on MetaMask here: <a href="https://www.xdaichain.com/for-users/wallets/metamask/metamask-setup">Metamask setup</a></p></li>
              <li><p>Bridge Mainnet DAI to xDAI using the <a href="https://bridge.xdaichain.com/">xDAI Bridge</a> (make sure you are on Mainnet in Metamask)</p></li>
              <li><p>Switch MetaMask to the xDAI network and propose membership here by using the <a href="https://app.daohaus.club/dao/0x64/0xff3f8c0b98454306fb0bda57e5ae38cbfa66cc0d/proposals/new">Loot Grab proposal</a></p></li>
            </ol>

          <p sx={{fontSize: [`display.xs`,`display.xs`, `body.sm`, `body.md`], mb: [5]}}>Your Tribute is your DAI contribution, which will be migrated to Array tokens at a later date.</p>
          <CTA text="Make your proposal" link="https://app.daohaus.club/dao/0x64/0xff3f8c0b98454306fb0bda57e5ae38cbfa66cc0d/proposals/new" type="link" sx={{ variant: `links.large`, mx: `auto`, transform: `scale(1.2)` }} />
        </div>
      </PageSection>
    </Layout>
  )
}
export default CCOPage
