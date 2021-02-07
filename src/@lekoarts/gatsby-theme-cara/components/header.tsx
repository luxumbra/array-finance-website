/** @jsx jsx */
import React, { useEffect, useState, useRef } from 'react'
import { Box, Flex, NavLink, jsx } from "theme-ui"
import { useSpring, animated } from 'react-spring'
import styled from '@emotion/styled'
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"

const _ = require('lodash');


// const AnimatedHeader = styled.div`
//   height: 170px;
//   transition: height 0.3s ease;
//   &.sticky {
//     height: 120px;
//   }
// `

const Header = ({ offset, factor = 1 }: { offset: number; factor?: number }) => {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const [{ hs }, setHeader] = useSpring(() => ({ hs: [170, 0] }))

  useEffect(() => {
    const header = document.getElementById('header')
    const sticky = header.offsetTop

    const handleScroll = () => {
      if (ref.current) {
        setSticky(ref.current.getBoundingClientRect().top <= 0)
        setHeader({ hs: isSticky ? [120, 15] : [170, 0]})
        console.log('gbr', ref.current.getBoundingClientRect().top)
      }
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }

    };
    const throttledScroll = _.throttle(handleScroll, 1000)
    window.addEventListener('scroll', throttledScroll);

    return () => {
      window.removeEventListener('scroll', () => throttledScroll);
    };
  }, []);


  return (
    <animated.header
      id="header"
      sx={{
            position: `sticky`,
            height: [`170px`],
            top: 0,
            left: 0,
            right: 0,
            display: `flex`,
            alignItems: `flex-end`,
            justifyItems: `center`,
            variant: `styles.header`,
            textAlign: `center`,
            backgroundColor: `#020955`,
            overflowX: `hidden`,
            // backdropFilter: isSticky ? `blur(150px)` : `none`,
            zIndex: `2000`,
            transition: `height 0.3s ease-in-out, box-shadow 0.2s ease`
          }} ref={ref}>
          <Flex as="nav"
        sx={{
              display: [`none`, `flex`],
              maxWidth: [`90%`,`90%`,`90%`,`90%`, `1080px`, `1170px`],
              width: `100%`,
              mx: 'auto',
              px: [0, 8, 10],
              alignItems: 'baseline',
              fontWeight: `400`,
              color: `white`
            }}>
            <NavLink href='/'
              sx={{
                variant: 'styles.navlink',
                alignSelf: `baseline`,
                width: [`40px`, `70px`],
                height: [`40px`, `70px`],
                p: 0,
                mr: [`50px`,`79px`],
                position: `relative`,
                flex: [`0 1 40px`,`0 1 70px`]
              }}>
              <SVG icon="afLogo" width={[`40px`, `70px`]} left="0" bottom="0" top={[`22px`]} />
            </NavLink>
            <NavLink href='/'
              sx={{
                variant: 'styles.navlink',
                p: 0,
                mr: [`50px`,`79px`],
                position: `relative`,
                "&:hover": {
                  ".line": {
                    width: `100%`
                  }
                }
              }}>
              <span sx={{
                display: `block`,
                paddingBottom: `20px`
              }}>
                array.finance</span>
              <span className="line" sx={{
                position: `absolute`,
                backgroundColor: `primary`,
                height: `4px`,
                width: `0%`,
                bottom: 0,
                left: 0,
                transition: `width 0.3s ease-in-out`,
              }}></span>
              {/* <Spring
                from={{ x: 100 }}
                to={{ x: 0 }}>
              {props => (
                <SVG icon="line" hiddenMobile width="100%" left="0" bottom="0" strokeDashoffset={props.x} />
                )}
              </Spring> */}
            </NavLink>
            <NavLink href='/team'
              sx={{
                variant: 'styles.navlink',
                p: 0,
                mr: [`50px`,`79px`],
                position: `relative`,
                "&:hover": {
                  ".line": {
                    width: `100%`
                  }
                }
              }}>
                            <span sx={{
                display: `block`,
                paddingBottom: `20px`
              }}>
                team</span>
              <span className="line" sx={{
                position: `absolute`,
                backgroundColor: `primary`,
                height: `4px`,
                width: `0%`,
                bottom: 0,
                left: 0,
                transition: `width 0.3s ease-in-out`,
              }}></span>
            </NavLink>
            <NavLink href='/roadmap'
              sx={{
                variant: 'styles.navlink',
                p: 0,
                mr: [`50px`,`79px`],
                position: `relative`,
                "&:hover": {
                  ".line": {
                    width: `100%`
                  }
                }
              }}>
                            <span sx={{
                display: `block`,
                paddingBottom: `20px`
              }}>
                roadmap</span>
              <span className="line" sx={{
                position: `absolute`,
                backgroundColor: `primary`,
                height: `4px`,
                width: `0%`,
                bottom: 0,
                left: 0,
                transition: `width 0.3s ease-in-out`,
              }}></span>
            </NavLink>
            <NavLink href='/cco'
              sx={{
                variant: 'styles.navlink',
                p: 0,
                position: `relative`,
                "&:hover": {
                  ".line": {
                    width: `100%`,
                  }
                }
              }}>
              <span sx={{
                display: `block`,
                paddingBottom: `20px`
              }}>
                CCO</span>
              <span className="line" sx={{
                position: `absolute`,
                backgroundColor: `primary`,
                height: `4px`,
                width: `0%`,
                bottom: 0,
                left: 0,
                transition: `width 0.3s ease-in-out`,
              }}></span>
            </NavLink>
          </Flex>
        {/* </Box>  */}
    </animated.header>

  )
}

export default Header
