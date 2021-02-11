/** @jsx jsx */
import React, { useEffect, useState, useRef } from 'react'
import { Box, Flex, NavLink, jsx } from "theme-ui"
import {Link} from 'gatsby';
import { Spring, useSpring, animated, useTransition, interpolate, config } from 'react-spring'
import Sticky from 'react-stickynode';
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
const headerConfig = {
  // friction: 25,
  // velocity: 5,
  // mass: 2
    mass: 1, tension: 120, friction: 14
}

const AfLink = styled(Link)`
  &.active {
    .line {
      width: 100% !important;
    }
  }
`


export const NavItem = ({ href=``, label=``, scrolled }) => {
  return (

      <AfLink to={href}
        activeStyle={{ color: `#2D71F4`}}
        sx={{
          variant: 'styles.navlink',
          p: 0,
          mr: [`30px`,`30px`,`30px`,`50px`,`79px`],
          position: `relative`,
          "&:hover, &[aria-current='page']": {
            ".line": {
              width: `100%`
            }
          },
          transform: scrolled ? `scale(0.8) translateY(5px)` : `scale(1)`,
          transition: `transform 0.2s ease-in-out`
        }}>
        <span sx={{
          display: `block`,
          paddingBottom: scrolled ? `25px` : `20px`,
          transform: `padding 0.2s ease-in-out`,
        }}>{label}</span>
        <span className="line" sx={{
          position: `absolute`,
          backgroundColor: `secondary`,
          height: `4px`,
          width: `0%`,
          bottom: 0,
          left: 0,
          transition: `width 0.3s ease-in-out`,
        }}></span>
      </AfLink>
  )
}

const Header = ({ offset, factor = 1 }: { offset: number; factor?: number }) => {
  const [ scrolled, setScrolled ] = useState(false)
  const ref = useRef(null);

  const headerSpring = useSpring({
    config: headerConfig,
    from: {
      transform: `translate3d(0, ${0}px, 0)`,
      opacity: 0
    },
    transform: `translate3d(0, ${0}, 0)`,
    opacity: 1
  })


  const [{ hs }, setHeader] = useSpring(() => ({ hs: [170, 0] }))

  useEffect(() => {
    const header = document.getElementById('header')
    const sticky = header.offsetTop

    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    const throttledScroll = _.throttle(handleScroll, 500)
    window.addEventListener('scroll', throttledScroll);

    return () => {
      window.removeEventListener('scroll', () => throttledScroll);
    };
  }, []);


  return (
    <animated.header
      id='header'
      sx={{
              position: scrolled ? `fixed` : `fixed`,
              height: scrolled ? [`75px`,`100px`] : [`100px`,`100px`,`100px`,`150px`, `150px`, `170px`],
              top: 0,
              left: 0,
              right: 0,
              display: `flex`,
              alignItems: `flex-end`,
              justifyItems: `center`,
              variant: `styles.header`,
              textAlign: `center`,
              backgroundColor: `#02095599`,
              background: `linear-gradient(180deg, rgba(2, 9, 80,0.9) 0%, rgba(2, 9, 80,0.9) 90%, rgba(2, 9, 80, 0.9) 100%)`,
              backdropFilter: `blur(3px)`,
              overflowX: `hidden`,
              boxShadow: scrolled ?  `0 0 15px rgba(0,0,0,0.6)` : `0`,
              zIndex: `2000`,
              transition: `height 0.2s ease-in-out, box-shadow 0.2s ease`
        }}
        style={scrolled ? headerSpring : {}}
        ref={ref}>
        <Flex as="nav"
          sx={{
            display: [`flex`],
            maxWidth: [`90%`,`90%`,`90%`,`90%`, `1080px`, `1170px`],
            width: `100%`,
            mx: 'auto',
            px: [0, 8, 10],
            alignItems: 'flex-end',
            color: `white`,
            ".line": {
              display: [`none`, `block`]
            },
            "a": {
              fontSize: [`body.xs`, `body.sm`, `display.sm`, `20px`,`20px`,`20px`, `26px`],
              fontWeight: [`300`, `300`, `300`, `400`],
              "&:hover, &:focus": {
                color: `white`
              }
            }

          }}>
          <NavLink href='/'
            sx={{
              variant: 'styles.navlink',
              alignSelf: `baseline`,
              width: [`40px`,`40px`,`50px`, `70px`],
              height: [`40px`,`40px`,`50px`, `70px`],
              p: 0,
              mr: [`50px`,`79px`],
              position: `relative`,
              flex: [`0 1 40px`, `0 1 40px`, `0 1 50px`, `0 1 70px`],
              transform: scrolled ? `scale(0.7) translateY(-5px)` : `scale(1) translateY(-10px)`,
              transition: `transform 0.2s ease-in-out`
            }}>
            <SVG icon="afLogo" width={[`40px`,`40px`,`50px`, `70px`]} left="0" bottom="0" top={[0]} />
          </NavLink>
          <NavItem href="/" label="array.finance" scrolled={scrolled}/>
          <NavItem href='/team' label="team"  scrolled={scrolled}/>
          <NavItem href='/roadmap' label='roadmap' scrolled={scrolled} />
          <NavItem href='/cco' label="CCO" scrolled={scrolled} />
        </Flex>
      </animated.header>
  )
}

export default Header
