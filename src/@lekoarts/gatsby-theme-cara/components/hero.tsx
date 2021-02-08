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
// @ts-ignore
import TeamHero from "../sections/team-hero"
// @ts-ignore
import RoadmapHero from "../sections/roadmap-hero"
// @ts-ignore
import CCOHero from "../sections/cco-hero"

const Hero = ({ page }) => {
  let heroW:string | number | any;

  if (page === 'home' || page == 'team') {
    heroW = [`100%`,`80%`, `85%`, `75%`]
  } else {
    heroW = `65%`
  }


  return (
    <div sx={{ position: `relative`}}>
        <Inner>
          <Flex sx={{
            position: `relative`,
          }}>
            <Box sx={{
              flex: [`0 1 90%`, `0 1 90%`],
              width: [`90%`],
              zIndex: 200,
              p: {
                fontSize:[`display.sm`, `body.lg`, `body.xl`, `body.md`, `body.md`, `display.lg`],
                lineHeight: [`sm`,`md`],
                mb: page !== `team` ? [5,5, 5, 6] : [3,4,5],
                width: heroW && heroW,
                "&:last-of-type:not(:first-of-type)": {
                  fontSize: `display.md`,
                  fontWeight: `400`,
                  lineHeight: `lg`,
                  mb: [3,4,5],
                  width: `65%`
                },
              }

          }}>
            {page && page === `home` && (
              <>
                <HomeHero />
                <CTA text="join our CCO" link="/cco" type="link" sx={{variant: `links.primary`
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
              height: page !== `home` ? `auto` : [`275px`,`400px`,`400px`,`800px`,`850px`,`689px`],
              overflowX: `visible`,
              zIndex: 0
            }}>
            {page && page === `home` && (
              <SVG icon="homeHero" color="colors.background" left={[`-200px`,`-200px`,`-210px`,`-90px`,`-310px`, `-390px`]} top={[`-20px`,`-70px`,`135px`,`210px`, `200px`]} width={[`250px`,`250px`,`300px`,`250px`,`551px`, `551px`]}  preserveAspectRatio="xMidYMid meet" zIndex={0} opacity={[0.1, 1]} />
            )}
            {page && page === `team` && (
              <SVG icon="backed" color="colors.background" right="0" top="-50px" width="421px" preserveAspectRatio="xMidYMid meet" />
            )}
            {page && page === `roadmap` && (
              <SVG icon="futureProof" color="colors.background" right="0" top="0" width="458px" height="458px" preserveAspectRatio="xMidYMid meet" />
            )}
            {page && page === `cco` && (
              <>
                <SVG icon="ccoSemiCirc" color="colors.background" right="-50px" top="-10px" width="411px" preserveAspectRatio="xMidYMid meet" />
                <SVG icon="ccoGrid1" color="colors.background" right="275px" top="180px" width="85px" preserveAspectRatio="xMidYMid meet" />
              </>
            )}
            </Box>
          </Flex>
      </Inner>
      {page === `home` && (
        <SVG icon="linesRight1" width={[180, 492]} color="icon_darkest" right={[0, 0]} top={[-250,-250,-250,-400,-140, 200]} opacity={1} />
      )}
      {/* <UpDown sx={{position: `relative`, zIndex: 4000}}>
        <SVG icon="linesRight2" width={[140, 302]} color="icon_darkest" left="0" top={[50, `-5%`]} opacity={1} transform="scale(-1,-1)" zIndex={3000} />
      </UpDown> */}
      {/* </Content> */}
    </div>
  )
}

export default Hero
