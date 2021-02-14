/** @jsx jsx */
import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import {useSpring, animated, config} from 'react-spring'
import { Heading, Text, Box, Flex, Progress, jsx } from 'theme-ui'
import { utils } from 'web3'
// import {usePoller, useContractReader, useTokenBalance} from 'eth-hooks';
//
import Layout from '../@lekoarts/gatsby-theme-cara/components/layout'
import Hero from '../@lekoarts/gatsby-theme-cara/components/hero'
import PageSection from '../@lekoarts/gatsby-theme-cara/components/page-section'
import SVG from "../@lekoarts/gatsby-theme-cara/components/svg"
import { waveAnimation, loadingAnim } from "../@lekoarts/gatsby-theme-cara/styles/animations"
import CTA from "../@lekoarts/gatsby-theme-cara/components/cta"
import Modal from 'react-modal'
import { CloseButton } from '../@lekoarts/gatsby-theme-cara/components/modal';
import { useFetch } from "../@lekoarts/gatsby-theme-cara/hooks/use-fetch"
import Overlay from '../../.cache/fast-refresh-overlay/components/overlay';
Modal.setAppElement('#___gatsby')
//

const InnerWave = styled.div`
  path {
    ${waveAnimation(`20s`)};
  }
`

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

  const modalStyles = {
    overlay: {
        backdropFilter: `blur(2px)`,
        backgroundColor: `rgba(2, 9, 80,0.95)`,
        modalFade,
        transition: `all 0.2s 0.5s ease`,
        zIndex: 4000,
    },
    content : {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backdropFilter: `blur(6px)`,
      backgroundColor: `rgba(255,255,255,0.05)`,
      border: `none`,
      boxShadow: `0 0 20px rgba(0,0,0,0.8)`,
      width: [`90%`, `90%`, `75%`, `75%`, `50%`],
      maxWidth: `1080px`,
      textAlign: `center`,
      p: [3, 3, 4],
      zIndex: 6000,
      opacity: 1,
      overflow: `hidden`,
      transition: `all 0.2s ease`,
      'svg': {
        pointerEvents: `none`
      },
    }
  };


  return (
    <PageSection>
      <Flex sx={{flexFlow: [`column-reverse wrap`,`row-reverse wrap`,`row nowrap`, `row nowrap`], alignContent: `center`, justifyContent: `space-between`, mt: [-50, -50, -75, -100], mb: [4,4,5]}}>
        <animated.p sx={{flex: [`0 0 100%`, `0 0 52%`], width: [`100%`, `52%`], fontSize: [`body.xs`,`body.sm`,`body.md`,`display.sm`,`display.md`,`display.md`]}} style={fade}>CCO shares will be migrated to the ArrayDAO in Q2. 10% of the bonding curve is allocated to CCO members, and will be distributed proportionally.</animated.p>
        <div sx={{ display: `inline-flex`, flex: `1 0 auto`, alignItems: `center`, justifyItems: [`center`, `right`], fontSize: [`body.md`,`body.sm`,`body.md`,`display.sm`,`display.md`,`display.lg`], fontWeight: `700`, textAlign: `left`, pl: [`0`, `100px`] }}>
          <animated.span sx={{ flex: `0 0 auto`, pr: [20], borderRadius: `50%` }} style={fade}>
            <SVG icon="daiLogo" hiddenMobile width={[36, 72]} color="icon_darkest" left="0" top="0" opacity={1} position="relative" />
          </animated.span>

          <animated.div style={fade}>
            {isLoading ? `Fetching...` : formatNumber(parseInt(currentBalance)) } DAI
          </animated.div>
        </div>
      </Flex>
      <CTA text="propose to join" link="/join" type="button" sx={{ variant: `links.primary` }} onClick={openModal} />
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={modalStyles}
          contentLabel="Example Modal"
          aria={{
            labelledby: "heading",
            describedby: "full_description"
          }}>

        <div sx={{px: 5, pb: 5, zIndex: 200, textAlign: `center`, "h3, p, li": {textAlign: `left`}}}>
            <h3 id="modal-heading" sx={{display: `flex`, alignItems: `center`, justifyItems: `left`, fontSize: [`body.sm`, `body.md`, `body.xl`,]}}><SVG icon="afLogo" hiddenMobile width={[`35px`,`45px`]} left="0" bottom="0" position="relative" /> <span sx={{ml: 3}}>Propose to join the CCO</span></h3>
            <p id="full_description" sx={{fontSize: [`body.sm`, `body.sm`, `body.md`]}}>Hey there! From all of us at Array, thanks for your interest in the project! We’ve been working really hard over the past 6 months and are happy to finally give the keys to the community via a Community Contribution Opportunity (CCO). Unlike ICOs of the past, a CCO keeps your funds decentralized and liquid. Members can RageQuit to redeem their initial DAI contribution at any time for a small penalty. Sound good? Let’s get started. If you have any questions, feel free to hop into <a href="https://discord.gg/kGuamkkvfA">our discord here!</a></p>
            <p sx={{fontSize: [`body.sm`, `body.sm`, `body.md`]}}>Because ETH fees have been very high as of late, we are utilizing a Layer 2 solution (xDAI) for our CCO, before our bespoke ArrayDAO launches on mainnet.</p>

          <ul sx={{
            variant: `lists.modalList`,

            }}>
              <li>Set up the xDAI network on MetaMask here:
                <a href="https://www.xdaichain.com/for-users/wallets/metamask/metamask-setup">Metamask setup</a></li>
              <li>Bridge Mainnet DAI to xDAI using the <a href="https://bridge.xdaichain.com/">xDAI Bridge</a> (make sure you are on Mainnet in Metamask)</li>
              <li>Switch MetaMask to the xDAI network and propose membership here: <a href="/">(link here)</a></li>
            </ul>

          <p sx={{fontSize: [`body.sm`, `body.sm`, `body.md`], mb: [4, 4, 5]}}>Your Tribute is your DAI contribution, which will be migrated to Array at a later date. Please match your Shares (for voting) or Loot Shares (if you are not interested in governance) to your Tribute.</p>
          <CTA text="Make your proposal" link="/join" type="link" sx={{ variant: `links.primary`, mx: `auto` }} />
        </div>
        <SVG icon="ccoGrid2" hiddenMobile width={[125, 125, 160]} color="icon_darkest" left={[200, 200, 420, 300, -90]} top={[-25, -25, -100, -60, `15%`]} opacity={[0.2, 0.2, 0.2, 0.2, 0.1]} stroke="red" zIndex={30} />
        <SVG icon="ccoSemiCirc" color="colors.background" left={[0]} bottom={[0]} width={[250, 300, 350, 350]} preserveAspectRatio="xMidYMid meet" opacity={[0.1, 0.1]} transform="scale(-1,-1)" zIndex={30} />
        <SVG icon="roadmapGrid2" color="colors.background" right={[-60]} bottom={[0]} width={[60,60,60, 120]} preserveAspectRatio="xMidYMid meet" opacity={[0.1, 1]} zIndex={30} />
          <CloseButton modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
        </Modal>
    </PageSection>
  )
}

const CCOPage = () => {
  const [displayBal, setDisplayBal] = useState()
  const page = '404'
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
      </PageSection>
    </Layout>
  )
}
export default CCOPage
