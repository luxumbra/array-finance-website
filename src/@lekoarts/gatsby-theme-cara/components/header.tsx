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
      style={{
        height: isSticky ? hs.interpolate((h, s) => `${h}px`) : `170px`,
        boxShadow: isSticky && `0 0 15px rgba(0,0,0,0.6)`,
      }}
      sx={{
            position: `sticky`,
            top: 0,
            left: 0,
            right: 0,            
            display: `flex`,
            alignItems: `flex-end`,
            justifyItems: `center`,
            variant: `styles.header`,
            textAlign: `center`,
            backgroundColor: `background`,
            zIndex: `2000`,
            transition: `height 0.3s ease-in-out, box-shadow 0.2s ease`
          }} ref={ref}>
          <Flex as="nav"
            sx={{
              maxWidth: `1170px`,
              width: `100%`,
              mx: 'auto',
              px: 0,
              alignItems: 'baseline',
              fontSize: `1.44em`,
              color: `white`
            }}>
            <NavLink href='/'
              sx={{
                variant: 'styles.navlink',
                p: 2,
                mr: `79px`,
                position: `relative`,
                flex: `0 1 70px`
              }}>
                
              <SVG icon="afLogo" hiddenMobile width={70} left="0" bottom="0" />
            </NavLink>
            <NavLink href='/'
              sx={{
                variant: 'styles.navlink',
                p: 2,
                mr: `79px`,
                position: `relative`
              }}>
              <span sx={{
                display: `block`,
                paddingBottom: `10px`
              }}>
                array.finance</span>
              <span sx={{
                position: `absolute`,
                backgroundColor: `primary`,
                height: `4px`,
                width: `0%`,
                bottom: 0,
                left: 0,
                transition: `width 0.3s ease-in-out`,
                _hover: {
                  width: `100%`
                }
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
                p: 2,
                mr: `79px`
              }}>
              team
            </NavLink>
            <NavLink href='/roadmap'
              sx={{
                variant: 'styles.navlink',
                p: 2,
                mr: `79px`
              }}>
              roadmap
            </NavLink>
            <NavLink href='/cco'
              sx={{
                variant: 'styles.navlink',
                p: 2,
              }}>
              CCO
            </NavLink>
          </Flex>
        {/* </Box>  */}
    </animated.header>
           
  )
}

export default Header
