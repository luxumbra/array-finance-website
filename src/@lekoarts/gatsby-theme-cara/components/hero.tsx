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
// @ts-ignore
import NotFoundHero from "../sections/404-hero"

const Hero = ({ page }) => {
  let heroW:string | number | any;

  if (page === 'home') {
    heroW = [`100%`, `80%`, `85%`, `75%`, `65%`, `75%`]
  } else if (page === 'team') {
    heroW = [`100%`,`80%`, `80%`, `75%`, `65%`, `75%`]
  } else {
    heroW = [`90%`, `90%`, `75%`, `65%`]
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
                fontSize:[`body.md`, `body.lg`, `body.xl`, `body.xl`, `body.xxl`, `display.lg`],
                lineHeight: [`sm`,`md`],
                mb: page !== `team` ? [5,5, 5, 6] : [3,3,4,4,5],
                width: heroW && heroW,
                "&:last-of-type:not(:first-of-type)": {
                  fontSize:[`body.xs`, `body.sm`, `body.sm`, `body.md`, `display.md`, `display.md`,`display.md`],
                  fontWeight: `400`,
                  lineHeight: `lg`,
                  mb: [3,4,5],
                  width: [`100%`,`100%`, `70%`, `65%`, `65%`, `65%`]
                },
              }

          }}>
            {page && page === `home` && (
              <>
                <HomeHero />
                <CTA text="join our CCO" link="/cco" type="link" disabled />
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
            {page && page === `404` && (
              <NotFoundHero />
            )}
            </Box>
            <Box sx={{
              position: `relative`,
              width: `10%`,
              height: page !== `home` ? `auto` : [`275px`,`275px`,`400px`,`800px`,`850px`,`689px`],
              overflowX: `visible`,
              zIndex: 0
            }}>
            {page && page === `home` && (
              <SVG icon="homeHero" color="colors.background" left={[`-200px`,`-200px`,`-210px`,`-90px`,`-310px`, `-390px`]} top={[`-20px`,`-20px`,`-70px`,`135px`,`210px`, `200px`]} width={[`250px`,`250px`,`300px`,`250px`,`551px`, `551px`]}  preserveAspectRatio="xMidYMid meet" zIndex={0} opacity={[0.1,0.1, 1]} />
            )}
            {page && page === `team` && (
              <SVG icon="backed" color="colors.background" right={[0, 0, -15, 0, 0]} top={[`145px`, `145px`,`145px`, -25, `-50px`]} width={[250,250,225, 300, 350, 421]} preserveAspectRatio="xMidYMid meet" opacity={[0.1,0.1,0.1, 1]} />
            )}
            {page && page === `roadmap` && (
              <SVG icon="futureProof" color="colors.background" right={[0]} top={[40, 40, 0, 0]} width={[300,300, 250, 458]} preserveAspectRatio="xMidYMid meet" opacity={[0.2,0.2,0.2, 1]} />
            )}
            {page && page === `cco` && (
              <>
                <SVG icon="ccoSemiCirc" color="colors.background" right={[-10, -10, -20, -20,-20, -50]} top={[20, 20, -10]} width={[250,250, 300, 350,411]} preserveAspectRatio="xMidYMid meet" opacity={[0.1,0.1, 1]} />
                <SVG icon="ccoGrid1" color="colors.background" right={[125,125,225,200, 275,275]} top={[130,130,160, 180]} width={[60,60,60, 85]} preserveAspectRatio="xMidYMid meet" opacity={[0.1,0.1, 1]} />
              </>
            )}
            {page && page === `404` && (
              <>
                <SVG icon="ccoSemiCirc" color="colors.background" right={[-10, -10, -20, -20,-20, -50]} top={[20, 20, -10]} width={[250,250, 300, 350,411]} preserveAspectRatio="xMidYMid meet" opacity={[0.1,0.1, 1]} />
                <SVG icon="ccoGrid1" color="colors.background" right={[125,125,225,200, 275,275]} top={[130,130,160, 180]} width={[60,60,60, 85]} preserveAspectRatio="xMidYMid meet" opacity={[0.1,0.1, 1]} />
              </>
            )}

            </Box>
          </Flex>
      </Inner>
      {page === `home` && (
          <SVG icon="linesRight1" width={[180,180,300,250, 492]} color="icon_darkest" right={[0, 0]} top={[-250, -250, -50, -150]} opacity={1} />
      )}
      <UpDown sx={{position: `absolute`, zIndex: 50}}>
        <SVG icon="linesRight2" width={[140,140,200, 200, 220,302]} color="icon_darkest" left="0" top={[-50,-50,50,50, -50]} opacity={1} transform="scale(-1,-1)" />
      </UpDown>
      {/* </Content> */}
    </div>
  )
}

export default Hero
