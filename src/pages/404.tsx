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
        <animated.div className="progress" sx={{ position: `relative`, backgroundColor: `#0F30F5`, borderRadius: `40px`, height: `33px`, opacity: 1, transition: `all 0.3s ease-in-out`, width: `100%`}}>
          <animated.span sx={{position: `absolute`, top: [`-30px`, `-30px`, `-60px`], display: `block`, height: `33px`, width: `100px`, textAlign: `right`, color: `white`, right: 0}}>We're here!</animated.span>
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
          {/* <animated.span style={fadeWidthLate}>{percent}%</animated.span> */}
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
      <CTA text="propose to join" link="https://app.daohaus.club/dao/0x64/0xff3f8c0b98454306fb0bda57e5ae38cbfa66cc0d/proposals/new" type="button" disabled />
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
    </Layout>
  )
}
export default CCOPage
