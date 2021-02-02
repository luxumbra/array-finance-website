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
          lineHeight: `1.75`,
          position: `relative`
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
      zIndex: `0`
    }}>{children}</div>
    <Footer />
  </React.Fragment>
)

export default Layout
