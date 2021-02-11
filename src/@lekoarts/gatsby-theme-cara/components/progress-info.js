import React, { useState, useEffect } from 'react'
import { Spring, useSpring, animated, config } from 'react-spring'
import { Heading, Text, Box, Flex, Progress, jsx } from 'theme-ui'
//
import PageSection from './page-section'
import CTA from './cta'
import SVG from './svg'

const ProgressInfo = ({ currentBalance, decimals, isLoading }) => {
  console.log('balance', typeof currentBalance)
  const progConfig = {
    delay: 1000,
    friction: 25,
  }

  const total = useSpring({
    config: config.molasses,
    x: currentBalance,
    from: {
      x: 0,
    },
  })
  const fade = useSpring({
    config: progConfig,
    from: {
      opacity: 0,
    },
    opacity: 1,
  })
  console.log('x: ', total.x)

  return (
    <PageSection>
      <Flex
        sx={{
          flexFlow: [`column-reverse wrap`, `row-reverse wrap`, `row nowrap`, `row nowrap`],
          alignContent: `center`,
          justifyContent: `space-between`,
          mt: [-50, -50, -75, -100],
          mb: [4, 4, 5],
        }}
      >
        <animated.p
          sx={{
            flex: [`0 0 100%`, `0 0 52%`],
            width: [`100%`, `52%`],
            fontSize: [`body.xs`, `body.sm`, `body.md`, `display.sm`, `display.md`, `display.md`],
          }}
          style={fade}
        >
          {total.x}
        </animated.p>
        <div
          sx={{
            display: `inline-flex`,
            flex: `1 0 auto`,
            alignItems: `center`,
            justifyItems: [`center`, `right`],
            fontSize: [`body.md`, `body.sm`, `body.md`, `display.sm`, `display.md`, `display.lg`],
            fontWeight: `700`,
            textAlign: `left`,
            pl: [`0`, `100px`],
          }}
        >
          <animated.span sx={{ flex: `0 0 auto`, pr: [20] }} style={fade}>
            <SVG
              icon="daiLogo"
              hiddenMobile
              width={[36, 72]}
              color="icon_darkest"
              left="0"
              top="0"
              opacity={1}
              position="relative"
            />
          </animated.span>

          <animated.div style={fade}>{isLoading ? `Fetching Dai...` : `${currentBalance} DAI`}</animated.div>
        </div>
      </Flex>
      <CTA text="propose to join" link="/join" type="link" sx={{ variant: `links.primary` }} />
    </PageSection>
  )
}

export default ProgressInfo
