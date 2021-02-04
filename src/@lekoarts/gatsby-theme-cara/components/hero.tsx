/** @jsx jsx */
import React from 'react'
import { Flex, Link,  Button, Box, jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import CTA from "./cta"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import HomeHero from "../sections/home-hero"
import TeamHero from "../sections/team-hero"
import RoadmapHero from "../sections/roadmap-hero"
import CCOHero from "../sections/cco-hero"

const Hero = ({page}) => (
  <div sx={{ position: `relative`}}>
      <Inner> 
        <Flex sx={{
          position: `relative`,
        }}>
          <Box sx={{
            flex: `0 1 90%`,
            width: `90%`,
            fontSize: `16px`,
            p: {
              fontSize: `display.lg`,
              lineHeight: `md`,
              mb: page !== `team` ? 6 : 5,
              width: page !== `roadmap` ? `75%` : `65%`,
              "&:last-of-type:not(:first-of-type)": {
                fontSize: `display.md`,
                fontWeight: `400`,
                lineHeight: `lg`,
                mb: 5,
                width: `65%`
              }
            }

        }}>
          {page && page === `home` && (
            <>
              <HomeHero />
              <CTA text="join our CCO" link="/cco" type="link" sx={{
                variant: `links.primary`
              }} />
            </>
          )}
          {page && page === `team` && (
            <TeamHero />            
          )}
          {page && page === `roadmap` && (
            <RoadmapHero />            
          )}
          {page && page === `cco` && (
            <CCOHero />            
          )}
          
          </Box>
          <Box sx={{
            position: `relative`,
            width: `10%`,
            height: page !== `home` ? `auto` : `689px`,
            // border: `1px solid red`,
            overflowX: `visible`,
            zIndex: 0
          }}>
          {page && page === `home` && (
            <SVG icon="homeHero" hiddenMobile color="colors.background" left="-390px" top="210px" width="551px" height="689px" preserveAspectRatio="xMidYMid meet" />          
          )}
          {page && page === `team` && (
            <SVG icon="backed" hiddenMobile color="colors.background" right="0" top="-50px" width="421px" preserveAspectRatio="xMidYMid meet" />           
          )}
          {page && page === `roadmap` && (
            <SVG icon="futureProof" hiddenMobile color="colors.background" right="0" top="0" width="458px" height="458px" preserveAspectRatio="xMidYMid meet" />            
          )}
          {page && page === `cco` && (
            <SVG icon="backed" hiddenMobile color="colors.background" right="0" top="-100px" width="421px" preserveAspectRatio="xMidYMid meet" />            
          )}
          </Box>
        </Flex>
    </Inner>
    {page === `home` && (
      <SVG icon="linesRight1" hiddenMobile width={492} color="icon_darkest" right="0" top="0%" opacity={1} />
    )}
    <UpDown sx={{
      position: `absolute`,
      width: `full`,
      zIndex: 3000
    }}>
      <SVG icon="linesRight2" hiddenMobile width={302} color="icon_darkest" left="0" top="-5%" opacity={0.5} transform="scale(-1,-1)" zIndex={3000} />
    </UpDown>
    {/* </Content> */}
  </div>
)

export default Hero
