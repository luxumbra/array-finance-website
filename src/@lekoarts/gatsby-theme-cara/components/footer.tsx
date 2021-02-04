/** @jsx jsx */
import React from "react"
import { Box, Flex, Link,jsx } from "theme-ui"
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
    <Box as="footer" variant="footer" sx={{ position: `relative`, mb: 0, px: [0, 0, 0], pt: 5, pb: [0, 0, 0], mx: [0, 0, 0], width: `100vw`, minHeight: `200px`, height: `200px`, textAlign: `center`, overflow: `hidden` }}>
      <Flex sx={{
        flexFlow: `row nowrap`,
        alignItems: `start`,
        justifyContent: `space-between`,
        maxWidth: `1170px`,
        mx: `auto`
      }}>
        <Box sx={{ flex: `0 1 70%`, width: `70%`, textAlign: `left` }}>
        <Link href='/'
            sx={{
              display: `block`,
              width: `56px`,
              height: `56px`,
            variant: 'styles.navlink',
            p: 0,
            position: `relative`,
          }}>
            
          <SVG icon="afLogo" hiddenMobile width={`56px`} left="0" bottom="0" />
        </Link>
        </Box>
        <Box sx={{ flex: `0 0 auto`, width: `auto` }}>
          <ul sx={{
            display: `flex`,
            alignContent: `center`,
            justifyContent: `space-between`,
            listStyle: `none`,
            pl: 0
          }}>
            <li>array.push($profits)</li>
            <li>github</li>
            <li>twitter</li>
            <li>discord</li>
            <li>medium</li>
          </ul>
        </Box>
      </Flex>
      <UpDown sx={{position: `absolute`, bottom: `-50px`}}>
        <InnerWaveA sx={{ position: `absolute`, width: `130%`, top: 0, height: `full`, svg: { width: `100%`, height: `200px` }, transform: `scale(-1, -1)` }}>
          <svg xmlns="http://www.w3.org/2000/svg" id="contact-wave" viewBox="0 0 800 338.05" fill="#fff" preserveAspectRatio="none">
            <path opacity={0.05}>
              <animate
                attributeName="d"
                values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 70 Z"
                repeatCount="indefinite"
                // dur="30s"
              />
            </path>
          </svg>
        </InnerWaveA>
        <InnerWaveB sx={{ position: `absolute`, width: `130%`, top: `50px`, height: `full`, svg: { width: `100%`, height: `200px` }, transform: `rotate(180deg)` }}>
          <svg xmlns="http://www.w3.org/2000/svg" id="contact-wave" viewBox="0 0 800 338.05" fill="#fff" preserveAspectRatio="none">
            <path opacity={0.03}>
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
      <UpDownWide>
      <InnerWaveB sx={{ position: `absolute`, width: `130%`, top: `50px`, height: `full`, svg: { width: `100%`, height: `200px` }, transform: `rotate(180deg)` }}>
          <svg xmlns="http://www.w3.org/2000/svg" id="contact-wave" viewBox="0 0 800 338.05" fill="#fff" preserveAspectRatio="none">
            <path opacity={0.02}>
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
    </Box>
  )
}

export default Footer
