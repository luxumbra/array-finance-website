/** @jsx jsx */
import React from "react"
import { Global } from "@emotion/core"
import { jsx } from "theme-ui"
import Footer from './footer'
import Header from './header'
import SEO from "./seo"
import {useSpring, animated, config} from 'react-spring'

type LayoutProps = { children: React.ReactNode; className?: string }

const Layout = ({ children, className = `` }: LayoutProps) => {


  const modalFade = useSpring({
    config: config.default,
    delay: 200,
    from: {
      opacity: 0
    },
    opacity: 1
  })

  return (
    <>
    <Global
      styles={(theme) => ({
        "*": {
          // outline: `1px solid red`, // for easier layout debugging
          boxSizing: `inherit`,
          "&:before": {
            boxSizing: `inherit`,
          },
          "&:after": {
            boxSizing: `inherit`,
          },
        },
        html: {
          fontSize: `100%`,
          WebkitTextSizeAdjust: `100%`,
          scrollBehavior: `smooth`
        },
        body: {
          backgroundColor: theme.colors.background,
          fontSize: [`12px`, `14px`, `16px`],
          lineHeight: `1.75`,
          position: `relative`,
          width: `100%`,
          maxWidth: `100vw`,
          minHeight: `100vh`,
          overflowX: `hidden`,
          "&.menu-open": {
            overflow: `hidden`
          },
          "&.ReactModal__Body--open": {
            overflow: `hidden`
          },
          ".wrapper": {
            display: `flex`,
            flexFlow: `column wrap`,
            minHeight: 256,
            maxWidth: `100vw`,
            overflowX: `hidden`
          },
          ".CCOModal_overlay": {
            modalFade,
          },
          ".ReactModal__Overlay--after-open": {
            opacity: 1
          },
          ".ReactModal__Overlay--before-close": {
            opacity: 0
          },
        },
        a: {
          color: `#86E5CC`,
          textDecoration: `none`,
          cursor: `pointer`,
          transition: `all 0.2s ease`,
          "&:hover, &:visited:hover": {
            color: `white`,
          },
         "&:visited": {
           color: `#86E5CC`,
          }
        },
        h2: {
          fontSize: `body.xl`
        },
        img: {
          borderStyle: `none`,
        },
        pre: {
          fontFamily: `monospace`,
          fontSize: `1em`,
        },
        "[hidden]": {
          display: `none`,
        },
        "::selection": {
          backgroundColor: theme.colors.brand.accents.light,
          color: theme.colors.background,
        },
      })}
    />
    <SEO />
    <div className="wrapper">
      <Header />
      <div className={className} sx={{
        position: `relative`,
        overflowX: `hidden`,
        pt: [`75px`, `75px`, `100px`,`100px`,`100px`,`130px`, `170px`],
        width: `100vw`,
        zIndex: 1000
      }}>{children}</div>
      <Footer sx={{position: `relative`, zIndex: 500}} />
    </div>
  </>
  )
    }

export default Layout
