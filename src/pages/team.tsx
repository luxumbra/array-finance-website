/** @jsx jsx */
import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import {Spring, useSpring, animated} from 'react-spring/renderprops'
import { Heading, Text, Box, Flex, jsx } from 'theme-ui'
import Layout from '../@lekoarts/gatsby-theme-cara/components/layout'
import Hero from '../@lekoarts/gatsby-theme-cara/components/hero'
import PageSection from '../@lekoarts/gatsby-theme-cara/components/page-section'
import Content from "../@lekoarts/gatsby-theme-cara/elements/content"
import Divider from "../@lekoarts/gatsby-theme-cara/elements/divider"
import SVG from "../@lekoarts/gatsby-theme-cara/components/svg"
import { UpDown, UpDownWide, waveAnimation } from "../@lekoarts/gatsby-theme-cara/styles/animations"
import { TeamPreview, teamImages } from "../@lekoarts/gatsby-theme-cara/components/team-preview"
import { RoadmapPhases, roadmapPhases } from "../@lekoarts/gatsby-theme-cara/components/roadmap-phases"
//
// @ts-ignore
import AutomateDefi from "../@lekoarts/gatsby-theme-cara/sections/automate-defi"
// @ts-ignore
import AssetManagement from "../@lekoarts/gatsby-theme-cara/sections/asset-management"
// @ts-ignore
import Backed from "../@lekoarts/gatsby-theme-cara/sections/backed"
// @ts-ignore
import FutureProof from "../@lekoarts/gatsby-theme-cara/sections/future-proof"
import CTA from "../@lekoarts/gatsby-theme-cara/components/cta"
//

const InnerWave = styled.div`
  path {
    ${waveAnimation(`20s`)};
  }
`
const TraceLines = styled(animated.div)`
  path {
    stroke-dasharray: ${props => tracePath(props)};
  }
`

const HomePage = () => (
  <Layout>
    <Hero page="team" />
  </Layout>
)
export default HomePage
