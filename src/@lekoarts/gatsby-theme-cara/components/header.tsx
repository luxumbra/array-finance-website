/** @jsx jsx */
import React, { useEffect, useState, useRef } from 'react'
import { Box, Flex, NavLink, jsx } from "theme-ui"
import { Spring } from 'react-spring/renderprops'
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"

const Header = ({ offset, factor = 1 }: { offset: number; factor?: number }) => {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      ref.current.getBoundingClientRect().top <= 0 ? setSticky(true) : setSticky(false)
      console.log(ref.current.getBoundingClientRect().top);
      
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);
  
  
  return (
    
    <Box as="header" variant="header"
      sx={{
        position: `sticky`,
        top: 0,
        left: 0,
        right: 0,
        display: `flex`,
        alignItems: `flex-end`,
        justifyItems: `center`,
        height: isSticky ? `120px` : `170px`,
        variant: `styles.header`,
        textAlign: `center`,
        backgroundColor: `background`,
        zIndex: `200`,
        transition: `height 0.3s ease-in-out`
      }} ref={ref}>
        <Flex as="nav"
        sx={{
          maxWidth: `5xl`,
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
    </Box>
  )
}

export default Header
