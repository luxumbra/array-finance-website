/** @jsx jsx */
import React, { useEffect, useState, useRef } from 'react'
import { Box, Flex, NavLink, IconButton, jsx } from "theme-ui"
import {Link} from 'gatsby';
import { useSpring, animated } from 'react-spring'
import styled from '@emotion/styled'
import {NavToggle} from './nav'
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

const DesktopNav = styled(Flex)`
`

const MobileNav = styled(Flex)`
`

const MobileBrand = styled(NavLink)`
`

export const NavItem = ({ href=``, label=``, scrolled }) => {
  return (
      <AfLink to={href}
        activeStyle={{ color: `#2D71F4`}}
      sx={{
          color: `white`,
          p: 0,
          mr: [`30px`,`30px`,`30px`,`50px`,`79px`],
          position: `relative`,
          "&:hover, &[aria-current='page']": {
            ".line": {
              width: `100%`
            }
        },
        "&:visited": {
            color: `white`
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
  const [scrolled, setScrolled] = useState(false)
  const [toggle, setToggle] = useState(false)
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


  useEffect(() => {
    const header = document.getElementById('header')
    const sticky = header.offsetTop
    const body = document.body;

    toggle ? body.classList.add('menu-open') : body.classList.remove('menu-open');

    const handleScroll = () => {
      if (window.pageYOffset > 50) {
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
  }, [toggle]);


  return (
    <animated.header
      id='header'
      sx={{
          position: `fixed`,
          height: scrolled ? [`50px`, `50px`, `75px`, `100px`] : [`75px`, `75px`, `100px`, `150px`, `150px`, `170px`],
          width: `100vw`,
          top: 0,
          left: 0,
          right: 0,
          display: `flex`,
          alignItems: `flex-end`,
          justifyItems: [`space-between`, `space-between`,`space-between`, `center`],
          justifyContent: [`space-between`, `space-between`,`space-between`, `center`],
          variant: `styles.header`,
          textAlign: `center`,
          backgroundColor: scrolled ? `#02095599` : `rgba(2, 9, 80,0)`,
          backdropFilter: scrolled ? `blur(3px)` : `blur(1px)`,
          boxShadow: scrolled ?  `0 0 15px rgba(0,0,0,0.6)` : `0`,
          zIndex: `2000`,
          transition: `height 0.2s ease-in-out, box-shadow 0.2s ease, background-color 0.2s ease-in-out, backdrop-filter 0.1s ease`
        }}
        style={scrolled ? headerSpring : {}}
        ref={ref}>

      <DesktopNav as="nav"
          sx={{
            display: [`none`, `none`, `none`, `flex`, `flex`],
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
        </DesktopNav>

      <MobileBrand href='/'
        sx={{
          display: [`block`, `block`, `block`, `none`],
          alignSelf: `center`,
          justifySelf: `left`,
          "path, circle": {
            stroke: toggle ? `brand.secondary.light` : `white`,
            transition: `all 0.2s 0.2s ease`
          },
          width: [`40px`,`40px`,`50px`, `70px`],
          height: [`40px`,`40px`,`50px`, `70px`],
          p: 0,
          ml: `5%`,
          mr: [`50px`,`79px`],
          position: `relative`,
          flex: [`0 1 40px`, `0 1 40px`, `0 1 50px`, `0 1 70px`],
          transform: (scrolled ? `scale(0.7) translateY(0)` : `scale(0.9) translateY(0)`),
          transition: `all 0.2s 0.2s ease-in-out`,
          zIndex: 50
        }}>
        <SVG icon="afLogo" width={[`40px`,`40px`,`50px`, `70px`]} left="0" bottom="0" top={[0]} />
      </MobileBrand>
      <NavToggle aria-label='Toggle mobile menu' toggle={toggle} setToggle={setToggle} />
      <MobileNav as="nav"
        sx={{
          position: `absolute`,
          top: `0`,
          display: [`flex`, `flex`, `flex`, `none`, `none`],
          width: `100%`,
          maxWidth: [`100vw`, `100vw`, `100vw`, `100%`],
          height: `100vh`,
          maxHeight: `100vh`,
          overflow: `hidden`,
          flexFlow: `column wrap`,
          mx: 'auto',
          pt: 5,
          px: [0, 0, 0, 8, 10],
          alignItems: 'flex-end',
          color: `white`,
          backgroundColor: `primary`,
          opacity: toggle ? 1 : 0,
          transform: toggle ? `translate3d(0, 0, 0)` : `translate3d(0, -120%, 0)`,
          transition: `all 0.2s 0.2s ease-in-out, opacity 0.2s 0.3s ease-in-out`,
          ".line": {
            display: [`none`, `none`, `none`, `block`]
          },
          "a": {
            display: `block`,
            width: `100%`,
            fontSize: [`body.md`],
            fontWeight: [`300`, `300`, `300`, `400`],
            textAlign: `center`,
            pt: 3,
            "&:hover, &:focus": {
              color: `white`
            }
          }

        }}>
          <Link to="/" activeStyle={{ color: `#2D71F4`}}>array.finance</Link>
          <Link to='/team' activeStyle={{ color: `#2D71F4`}}>team</Link>
          <Link to='/roadmap' activeStyle={{ color: `#2D71F4`}}>roadmap</Link>
        <Link to='/cco' activeStyle={{ color: `#2D71F4` }}>CCO</Link>
        <div sx={{position: `absolute`, bottom: 0, width: [`100%`], maxWidth: [`100vw`], overflow: `hidden`, height: `700px`, zIndex: 0, opacity: toggle ? 1 : 0, transition: `opacity 0.1s ease`, pointerEvents: `none`}}>
          <SVG icon="linesRight2" width={[100,150,200, 302]} color="icon_darkest" left="0" top="100px" opacity={[1]} transform="scale(-1,-1)" zIndex={0} />
          <SVG icon="roadmapGrid2" width={[125,155,200, 310]} color="icon_darkest" right={[`-80px`,`-100px`,`-100px`, `-200px`]} bottom={[`90px`,`100px`,`100px`, `150px`]} opacity={1} zIndex={0} />
        </div>
        </MobileNav>
      </animated.header>
  )
}

export default Header
