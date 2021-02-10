/** @jsx jsx */
import React from "react"
import { Global } from "@emotion/core"
import { jsx } from "theme-ui"
import Footer from './footer'
import Header from './header'
import SEO from "./seo"

type LayoutProps = { children: React.ReactNode; className?: string }

const Layout = ({ children, className = `` }: LayoutProps) => (
  <React.Fragment>
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
        },
        body: {
          backgroundColor: theme.colors.background,
          fontSize: [`12px`, `14px`, `16px`],
          lineHeight: `1.75`,
          position: `relative`,
          maxWidth: `100vw`,
          minHeight: `100vh`,
          overflowX: `hidden`
        },
        a: {
          color: `white`,
          textDecoration: `none`,
          cursor: `pointer`,
          "&:hover": {
            color: `brand.secondary.light`
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
          backgroundColor: theme.colors.primary,
          color: theme.colors.background,
        },
      })}
    />
    <SEO />
    <Header />
    <div className={className} sx={{
      position: `relative`,
      overflowX: `hidden`,
      pt: `170px`,
      width: `100vw`,
      zIndex: 1000
    }}>{children}</div>
    <Footer sx={{position: `relative`, zIndex: 500}} />
  </React.Fragment>
)

export default Layout
