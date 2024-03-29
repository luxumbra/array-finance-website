/** @jsx jsx */
import React from "react"
import { Box, Flex, Link, IconButton, jsx } from "theme-ui"
import styled from "@emotion/styled"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide, waveAnimation } from "../styles/animations"

// @ts-ignore
import ContactMDX from "../sections/contact"
//

const InnerWaveA = styled.div`
  path {
    ${waveAnimation(`5s`)};
  }
`
const InnerWaveB = styled.div`
  path {
    ${waveAnimation(`20s`)};
  }
`

const Footer = () => {
  return (
    <>
      <Box as="footer" variant="footer" sx={{ position: `relative`, mb: 0, px: [0, 0, 0], pt: [3, 3, 5], pb: [0, 0, 0], mx: [0, 0, 0], mt: [3, 3, 3, 4], width: `100vw`, minHeight: [`150px`,`150px`,`150px`, `200px`], height: [`150px`,`150px`,`150px`, `200px`], textAlign: `center`, overflow: `hidden`, zIndex: 500 }}>
        <Flex sx={{
          flexFlow: `row nowrap`,
          alignItems: `start`,
          justifyContent: `space-between`,
          maxWidth: [`90%`,`90%`,`90%`,`90%`, `1080px`, `1170px`],
          mx: `auto`,
          zIndex: 0
        }}>
          <Box sx={{
            flex: [`0 1 15%`, `0 1 15%`, `0 1 20%`, `0 1 20%`, `0 1 20%`, `0 1 70%`], width: [`15%`, `15%`, `20%`, `20%`, `20%`, `70%`], textAlign: `left`, zIndex: 200}}>
          <Link href='/'
              sx={{
                display: `block`,
                width: [`35px`,`35px`,`56px`],
                height: [`35px`,`35px`,`56px`],
                variant: 'styles.navlink',
                p: 0,
                position: `relative`,
            }}>

            <SVG icon="afLogo" hiddenMobile width={[`35px`,`35px`,`56px`]} left="0" bottom="0" />
          </Link>
          </Box>
          <Box sx={{ flex: [`0 1 85%`, `0 1 85%`, `0 0 400px`], width: [`80%`, `80%`, `400px`]}}>
            <ul sx={{
              display: `flex`,
              alignContent: `center`,
              alignItems: `center`,
              justifyContent: [`space-evenly`,`space-evenly`, `space-between`],
              listStyle: `none`,
              pl: 0,
              width: `100%`,
              "li": {
                position: `relative`,
                fontSize: [`body.xs`,`body.xs`, `body.sm`],
                height: ['40px'],
                // flex: [`0 0 42px`,`0 0 40px`],
                // width: [`42px`,`40px`],
                "&:first-of-type": {
                  height: [`20px`,`20px`, `32px`],
                  width: `auto`,
                  flex: `0 1 auto`
                },
                "a": {
                  color: `white`,
                  "&:hover": {
                    color: `white`,
                    opacity: 0.6
                  }
                }
              }
            }}>
              <li>array.push($profits)</li>
              <li>
                <Link href="/" title="Check us out on GitHub">
                    <SVG icon="githubIcon" hiddenMobile color="colors.white" right="0" top="0" width={[`20px`,`20px`, `32px`]}  preserveAspectRatio="xMidYMid meet" />
                </Link>
              </li>
              <li>
              <Link href="https://twitter.com/arrayfinance" title="Follow us on Twitter">
                    <SVG icon="twitterIcon" hiddenMobile color="colors.white" right="0" top="3px" width={[`20px`,`20px`, `32px`]} preserveAspectRatio="xMidYMid meet" />
                </Link>
              </li>
              <li>
                <Link href="https://discord.gg/g8CS4252se" title="Join our discord">
                  <SVG icon="discordIcon" hiddenMobile color="colors.white" right="0" top="0" width={[`20px`,`20px`, `32px`]} preserveAspectRatio="xMidYMid meet" />
                </Link>
              </li>
              <li>
                <Link href="https://medium.com/@arrayfinance" title="Follow us on Medium">
                  <SVG icon="mediumIcon" hiddenMobile color="colors.white" right="0" top="2px" width={[`20px`,`20px`, `32px`]} preserveAspectRatio="xMidYMid meet" />
                </Link>
              </li>
            </ul>
          </Box>
        </Flex>
      </Box>
      <div sx={{ position: `absolute`, bottom: `0`, left: `0`, width: `100vw`, height: [`150px`,`150px`,`150px`, `200px`], overflow: `hidden`, zIndex: 0 }}>
        <UpDown sx={{position: `absolute`, bottom: `-50px`, zIndex: 100}}>
          <InnerWaveA sx={{ position: `absolute`, width: `130%`, left: 0, top: `50px`, height: `full`, svg: { width: `100%`, height: [`150px`,`150px`,`200px`], transform: `scale(-1, -1)`, zIndex: 50}, zIndex: 50 }}>
            <svg xmlns="http://www.w3.org/2000/svg" id="contact-wave" viewBox="0 0 800 338.05" fill="#061FAB" preserveAspectRatio="none">
              <path opacity={0.1} sx={{ boxShadow: `0 0 35px rgba(0,0,0,1)` }}>
                <animate
                  attributeName="d"
                  values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 70 Z"
                  repeatCount="indefinite"
                  // dur="30s"
                />
              </path>
            </svg>
          </InnerWaveA>
          <InnerWaveB sx={{ position: `absolute`, width: `130%`, right: 0, top: `30px`, height: `full`, svg: { width: `100%`, height: [`150px`,`150px`,`150px`,`200px`], zIndex: 30 }, transform: `scale(1, -1)`, zIndex: 30 }}>
            <svg xmlns="http://www.w3.org/2000/svg" id="contact-wave" viewBox="0 0 800 338.05" fill="#2D71F4" preserveAspectRatio="none">
              <path opacity={0.1} sx={{ boxShadow: `0 0 35px rgba(0,0,0,1)` }}>
                <animate
                  attributeName="d"
                  values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 70 Z"
                  repeatCount="indefinite"
                  // dur="30s"
                />
              </path>
            </svg>
          </InnerWaveB>
        </UpDown>
        <UpDownWide sx={{zIndex: 20}}>
        <InnerWaveB sx={{ position: `absolute`, width: `130%`, top: `0`, right: 0, height: `full`, svg: { width: `100%`, height: [`150px`,`150px`,`150px`,`200px`], zIndex: 0 }, transform: `scale(-1, -1)`, zIndex: 0, overflow: `hidden` }}>
            <svg xmlns="http://www.w3.org/2000/svg" id="contact-wave" viewBox="0 0 800 338.05" fill="#20DAF5" preserveAspectRatio="none">
              <path opacity={0.06} sx={{ boxShadow: `0 0 35px rgba(0,0,0,1)` }}>
                <animate
                  attributeName="d"
                  values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 70 Z"
                  repeatCount="indefinite"
                  // dur="30s"
                />
              </path>
            </svg>
          </InnerWaveB>
        </UpDownWide>
      </div>
      <div sx={{position: `absolute`, bottom: 0, width: [`100vw`], maxWidth: [`100vw`], overflow: `hidden`, height: `700px`, zIndex: 0}}>
        <SVG icon="linesRight2" hiddenMobile width={[100,100,150,200, 302]} color="icon_darkest" left="0" bottom="100px" opacity={[0.8,0.8, 0.5]} transform="scale(-1,-1)" zIndex={0} />
        <SVG icon="roadmapGrid2" hiddenMobile width={[125,125,155,200, 310]} color="icon_darkest" right={[`-80px`,`-80px`,`-100px`,`-100px`, `-200px`]} bottom={[`100px`,`100px`,`100px`, `150px`]} opacity={1} zIndex={0} />
      </div>
    </>
  )
}

export default Footer
